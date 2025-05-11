import { Game } from "./classes/game.ts";

export enum GameType {
    Prod,
    ViewChar
}

export class GameBuilder {
    readonly game: Game;

    constructor(gameType: GameType) {
        if (gameType === GameType.Prod) {
            this.game = new Game();
        }
        this.game = new Game();
    }
}
