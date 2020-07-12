import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

library.add(faArrowLeft);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: function(h) {
    return h(App);
  }
}).$mount("#app");
