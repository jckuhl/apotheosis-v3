import Customizable from './customizable';
import applyMixin from './applyMixin';
import Character from './character';

export default class Universe implements Customizable  {
    public readonly id: string;
    private name: string;
    private characters: Character[];
    constructor(name: string, id: string) {
        this.name = name;
        this.id = id;
        this.characters = [];
    }

    public getName(): string {
        return this.name;
    }

    public addCharacter(character: Character) {
        this.characters.push(character);
    }

    public removeCharacter(id: string) {
        this.characters = this.characters.filter((character) => character.id !== id);
    }

    public save(): string {
        return JSON.stringify(this);
    }
}

applyMixin(Universe, [Customizable]);
