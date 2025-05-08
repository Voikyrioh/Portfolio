import '../../styles/style.css'
import {GameBuilder, GameType} from "../../app/game-builder.ts";

new GameBuilder(GameType.Prod).game.init().catch(console.error);
