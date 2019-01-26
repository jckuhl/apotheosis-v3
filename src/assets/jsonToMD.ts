function titleCase(str: string, delim= ' '): string {
    return str.split(delim).map((word) => {
        return word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase();
    }).join(' ');
}

interface JsonObject { [index: string]: string | number | object | JsonObject[]; }

function parseObject(obj: JsonObject, level: number): string {
    // tslint:disable-next-line:no-shadowed-variable
    function bulletLevel(level: number): string {
        let dashes = level > 1 ? '- ' : ' ' ;
        if (level > 1) {
            dashes = ' '.repeat((level - 1) * 2) + dashes;
        }
        return dashes;
    }

    let markdown = '';
    Object.getOwnPropertyNames(obj).forEach((prop) => {
        if (typeof obj[prop] === 'object' && !Array.isArray(obj[prop])) {
            const dashes = bulletLevel(level);
            markdown += `\n${dashes}__${titleCase(prop, '_')}:__ \n`;
            markdown += parseObject(obj[prop] as JsonObject, level + 1);
        } else if (Array.isArray(obj[prop])) {
            const spaces = level > 1 ? ' '.repeat((level - 1) * 2) : '';
            markdown += `\n${spaces}__${titleCase(prop, '_')}:__ \n`;
            (obj[prop] as JsonObject[]).forEach((item) => {
                markdown += `${spaces}- ${item}\n`;
            });
        } else {
            const dashes = bulletLevel(level);
            markdown += `\n${dashes}__${titleCase(prop, '_')}:__ ${obj[prop]}\n`;
        }
    });
    return markdown;
}

export default function jsonToMD(json: string): string {
    const source = JSON.parse(json);
    return parseObject(source, 1);
}
