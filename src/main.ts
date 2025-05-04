import { createApp } from 'vue'
import './style.css'
import App from './web/App.vue'
import GameLoader from "./app/game-loader.ts";

createApp(App).mount('#app')
GameLoader.game.init();
