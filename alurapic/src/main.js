import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import { routes } from './routes';
//import VeeValidate from 'vee-validate';

// registrando o plugin 
//Vue.use(VeeValidate);

// importando o arquivo `Transform.js`.
import './components/directives/Transform';

Vue.use(VueResource);
Vue.use(VueRouter);

Vue.http.options.root = 'http://localhost:3000';

const router = new VueRouter({
  routes,
  mode: 'history' // mode 'history' justo para tratar a roda e não precisar incluir #
});


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
