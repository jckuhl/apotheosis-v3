import Customizable from './customizable';
import applyMixin from './applyMixin';

export default class Character implements Customizable {
    public readonly id: string;

    private readonly universeID: string;
    private name: string;
    private description: object;

    constructor(universeID: string, name: string, id: string) {
        this.universeID = universeID;
        this.name = name;
        this.id = id;
        this.description = {};
    }


}

applyMixin(Character, [Customizable]);
