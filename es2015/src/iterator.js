import { map } from "rxjs/operator/map";

export class Iterable {
    constructor(iteratorFactory) {
        [Symbol.iterator] = iteratorFactory;
    }
}

export class Iterator {
    constructor(onNext) {
        this.next = onNext
    }
    
}

export class IteratorResult {
    constructor(value, done) {
        this.value = value;
        this.done = done;
    }
}

/**
 * Rendre les propriétés d'un objet iterables
 * S'aider de la fonction Object.keys
 */
export function toIterable(obj) {
    obj[Symbol.iterator] = () => {
        let keysProperties = Object.keys(obj);
        let valuesProperties = Object.values(obj);
        let Done = false;
        let index = 0;
        return {
            next: () => {
                Done = (index >= keysProperties.length);
                let obj = {
                   done : Done,
                   value : new Map().set(keysProperties[index],valuesProperties[index])
                };
                index++;
                return obj;
            }
        };
    };
}