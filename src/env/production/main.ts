import { createApp } from 'vue'
import '../../styles/style.css'
import App from '../../web/App.vue'
import {GameBuilder, GameType} from "../../app/game-builder.ts";

createApp(App).mount('#app')
new GameBuilder(GameType.Prod).game.init().catch(console.error);
