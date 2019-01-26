export default function loadJSON(file: File): Promise<object> {
    const reader = new FileReader();
    return new Promise((resolve, reject) => {
        reader.readAsText(file);
        reader.onloadend = () => {
            if (reader.result) {
                const parsed = JSON.parse(reader.result as string);
                resolve(parsed);
            } else {
                reject(new Error('Error loading file'));
            }
        };
        reader.onerror = (error) => {
            reject(error);
        };
    });
}
