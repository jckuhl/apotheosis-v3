export default function applyMixin(targetClass: any, sources: any[]): void {
    sources.forEach((source) => {
        Object.getOwnPropertyNames(source.prototype).forEach((prop) => {
            targetClass.prototype[prop] = source.prototype[prop];
        });
    });
}
