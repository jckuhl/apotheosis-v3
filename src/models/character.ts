import Customizable from './customizable';
import applyMixin from './applyMixin';

export default class Character implements Customizable {
    private readonly universeID: string;
    private name: string;
    private description: object;

    constructor(universeID: string, name: string) {
        this.universeID = universeID;
        this.name = name;
        this.description = {};
    }
}

applyMixin(Character, [Customizable]);
