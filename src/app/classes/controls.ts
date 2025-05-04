export class Controls {
    #keys = new Set<string>();
    constructor() {
        document.addEventListener('keyup', (event: KeyboardEvent) => {this.#keys.delete(event.key);});
        document.addEventListener('keydown', (event: KeyboardEvent) => {this.#keys.add(event.key);});
    }

    isKeyPressed(key: string) {
        return this.#keys.has(key);
    }
}
