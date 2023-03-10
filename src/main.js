import Vue from 'vue'
import App from './App.vue'
import router from './router'

import '../public/static/app/style.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Vuelidate from 'vuelidate';

Vue.config.productionTip = false

Vue.use(Vuelidate);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
