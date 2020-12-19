import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import router from './router';
import firebase from 'firebase';
import './components/firebaseInit';
import VueEllipseProgress from 'vue-ellipse-progress';
const VueScrollTo = require('vue-scrollto')
import store from './store';
import Vuelidate from 'vuelidate';
Vue.use(Vuelidate)

Vue.use(VueScrollTo)
Vue.use(VueEllipseProgress);
 

Vue.use(VueRouter);
Vue.config.productionTip = false


let app;
firebase.auth().onAuthStateChanged(function(user){
  store.dispatch("fetchUser", user);
  if(!app){
  app = new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
  });
}
});
