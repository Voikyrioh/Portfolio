import { Game } from "./classes/game.ts";

class GameLoader {
    readonly game: Game;

    constructor() {
        this.game = new Game();
    }
}

export default Object.freeze(new GameLoader());
