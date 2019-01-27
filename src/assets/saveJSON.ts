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