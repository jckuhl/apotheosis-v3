export default class Customizable {
    public static addProperty(key: string, value: any): void {
        Object.defineProperty(this, key, {
            writable: true,
            enumerable: true,
            configurable: true,
            value
        });
    }
}
