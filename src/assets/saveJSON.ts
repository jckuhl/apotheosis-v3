export function saveJSON(json: string): string {
    const file = new Blob(['file text'], { type: 'application/json'})
    return URL.createObjectURL(file);
}

export function saveToFile(url: string, filename: string): any {
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    setTimeout(()=> {
        document.body.removeChild(a);
    }, 0);
}

/**
 * Creates a friendly filename with no spaces
 *
 * @param {*} name the name of the file
 * @param {*} ext the extension of the file name, the . is provided if omitted
 * @returns
 */
export function toFileName(name: string, ext: string): string {
    ext = ext.startsWith('.') ? ext : '.' + ext;
    name = name.toLowerCase().replace(new RegExp(' ', 'g'), '_');
    return name + ext;
}