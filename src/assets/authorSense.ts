export default class AuthorSense {

    private recording=  false;
    private substr = '';
    private atIndex = -1;
    private start = 0;
    private str = '';
    private found: string[] = [];

    constructor(private names: string[]) {}
    
    public clearAll() {
        this.found = [];
    }

    public sense(str: string, event: any) {
        this.str = str;
        const { data , inputType } = event;
        if (data === '@' && !this.recording) {
            this.start = this.atIndex + 1;
            this.atIndex = this.str.length - 1;
            this.recording = true;
            return;
        }
        if (this.recording && data && data.match(/[a-zA-Z]/) && inputType == 'insertText') {
            this.clearAll();
            this.substr = this.str.toLowerCase().slice(this.atIndex + 1)
            this.names.filter((thing) => thing.toLowerCase().startsWith(this.substr)).forEach((thing) => {
                console.log(thing);
                this.found.push(thing);
            });
        }
        if (this.recording && data && data.match(/[^a-zA-Z]/)) {
            this.clearAll();
            this.recording = false;
            this.substr = '';
            this.start = this.str.length;
        }
    }
}