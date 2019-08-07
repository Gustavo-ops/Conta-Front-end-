import Vue from 'vue';
import App from './App.vue';
import router from './router';



import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.config.productionTip = false;
vue.use(Vuetify);
new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
