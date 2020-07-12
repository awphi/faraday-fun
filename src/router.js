import VueRouter from "vue-router";
import Vue from "vue";
import SplashScreen from "./components/routes/SplashScreen";
import GameScreen from "./components/routes/GameScreen";
import PlayerSelectScreen from "./components/routes/PlayerSelectScreen";
import CategorySelectScreen from "./components/routes/CategorySelectScreen";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: SplashScreen },
  { path: "/game", component: GameScreen },
  { path: "/start", component: PlayerSelectScreen },
  { path: "/categories", component: CategorySelectScreen }
];

export default new VueRouter({ routes });
