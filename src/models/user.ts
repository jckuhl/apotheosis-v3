export default class User {
    private id: string;
    private username: string;
    private offline: boolean;
    private universes: any[];
    constructor(username: string, id: string, offline = false) {
        this.username = username;
        this.id = id;
        this.offline = offline;
        this.universes = [];
    }

    public addUniverse(universe: any) {
        this.universes.push(universe);
    }
}
