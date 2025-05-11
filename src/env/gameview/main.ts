import '../../web/styles/style.css'
import {GameBuilder, GameType} from "../../game/game-builder.ts";

new GameBuilder(GameType.Prod).game.init().catch(console.error);
