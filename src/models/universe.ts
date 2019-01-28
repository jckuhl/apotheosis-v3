import Customizable from './customizable';
import applyMixin from './applyMixin';
import Character from './character';

export default class Universe implements Customizable  {
    public readonly id: string;
    private name: string;
    private templates: any;    //'any' because user can modify templates object
    constructor(name: string, id: string) {
        this.name = name;
        this.id = id;
        this.templates = {
            characters: [] as Character[]
        }
    }

    public getName(): string {
        return this.name;
    }

    public getAllNames(): string[] {
        const result: string[] = []
        result.push(this.name);
        Object.values(this.templates).forEach((v)=> {
            (v as Array<any>).forEach((value: any) => result.push(value.name));
        });
        return result;
    }

    public addCharacter(character: Character) {
        this.templates.characters.push(character);
    }

    public removeCharacter(id: string) {
        this.templates.characters = this.templates.characters
                                        .filter((character: Character) => character.id !== id);
    }

    public save(): string {
        return JSON.stringify(this);
    }
}

applyMixin(Universe, [Customizable]);
