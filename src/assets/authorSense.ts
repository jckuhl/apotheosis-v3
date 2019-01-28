export default class AuthorSense {

    private recording=  false;
    private substr = '';
    private atIndex = -1;
    private start = 0;
    private str = '';
    private found: string[] = [];

    constructor(private names: string[]) {}
    
    /**
     * Clears the found array of old values
     *
     * @memberof AuthorSense
     */
    private _clearAll(): void {
        this.found = [];
    }

    /**
     * Returns the array of names that match
     *
     * @returns {string[]}
     * @memberof AuthorSense
     */
    public getFoundNames(): string[] {
        return this.found;
    }

    /**
     * From an array of given names, returns the ones that match characters typed past an @ symbol 
     * until a non alphanumeric character is hit
     *
     * @param {string} str
     * @param {*} event
     * @returns
     * @memberof AuthorSense
     */
    public sense(str: string, event: any): void {
        this.str = str;
        const { data , inputType } = event;
        if (data === '@' && !this.recording) {
            this.start = this.atIndex + 1;
            this.atIndex = this.str.length - 1;
            this.recording = true;
            return;
        }
        if (this.recording && data && data.match(/[a-zA-Z]/) && inputType == 'insertText') {
            this._clearAll();
            this.substr = this.str.toLowerCase().slice(this.atIndex + 1)
            this.names.filter((thing) => thing.toLowerCase().startsWith(this.substr)).forEach((thing) => {
                console.log(thing);
                this.found.push(thing);
            });
        }
        if (this.recording && data && data.match(/[^a-zA-Z]/)) {
            this._clearAll();
            this.recording = false;
            this.substr = '';
            this.start = this.str.length;
        }
    }
}