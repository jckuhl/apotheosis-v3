import random from './random';

export default function generateID(idSet: Set<string>): string {
    let id: string;
    do {
        id = random(100000).toString();
    } while(idSet.has(id));
    return id;
} 