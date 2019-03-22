// tslint:disable: no-console
const express = require("express");
const portScanner = require("portscanner");
const config = require("./config");
const app = express();

async function listen(config) {
    try {
        const port = await checkPort(config.port);
        app.listen(port, () => {
            console.log(`listening on port ${port} in ${config.env}`);
        });
    } catch (error) {
        console.error(error);
    }
}

function checkPort(port) {
    return new Promise((resolve, reject) => {
        portScanner.findAPortNotInUse(port, port + 10, "127.0.0.1", (error, foundPort) => {
            if (error) {
                reject(error);
            } else {
                console.log(`Port found at ${foundPort}`);
                resolve(foundPort);
            }
        });
    });
}

listen(config);
