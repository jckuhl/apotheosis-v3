const environments = {
    staging: {
        port: process.env.PORT,
        env: 'staging'
    }
}

const node_env = process.env.NODE_ENV;
let currentEnvironment;

if(typeof node_env === 'string') {
    if(Object.keys(environments).includes(node_env)) {
        currentEnvironment = environments[node_env.toLowerCase()];
    } else {
        throw new Error('Invalid environment')
    }
} else {
    currentEnvironment = environments.staging;
}

module.exports = currentEnvironment;