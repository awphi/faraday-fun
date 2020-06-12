import VueRouter from "vue-router";
import SplashScreen from "./components/routes/SplashScreen";
import GameScreen from "./components/routes/GameScreen";
import PlayerSelectScreen from "./components/routes/PlayerSelectScreen";

const routes = [
  { path: "/", component: SplashScreen },
  { path: "/game", component: GameScreen },
  { path: "/start", component: PlayerSelectScreen }
];

export default new VueRouter({ routes });
