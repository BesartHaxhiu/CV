import Vue from 'vue';
import Router from 'vue-router';
import firebase from 'firebase';
import CV from '@/components/CV';
import Login from '@/components/Auth/Login';
import Register from '@/components/Auth/Register';
import Dashboard from '@/components/Dashboard/Dashboard';
import AddWork from '@/components/AddWork/AddWork'

Vue.use(Router);

let router = new Router({
    routes: [
        {path: '/', name: 'cv', component:CV},
        { path: '/login', name:'login', component:Login, meta: {requiresGuest:true}},
        { path: '/register', name:'register', component:Register},
        { path: '/dashboard', name:'dashboard', component:Dashboard, meta: {requiresAuth:true}},
        { path: '/addwork', name: 'addwork', component: AddWork, meta: {requiresAuth:true}}
      ]
});

router.beforeEach((to, from, next) => {
    // Check for requiresAuth guard
    if (to.matched.some(record => record.meta.requiresAuth)) {
      // Check if NO logged user
      if (!firebase.auth().currentUser) {
        // Go to login
        next({
          path: '/login',
          query: {
            redirect: to.fullPath
          }
        });
      } else {
        // Proceed to route
        next();
      }
    } else if (to.matched.some(record => record.meta.requiresGuest)) {
      // Check if NO logged user
      if (firebase.auth().currentUser) {
        // Go to login
        next({
          path: '/',
          query: {
            redirect: to.fullPath
          }
        });
      } else {
        // Proceed to route
        next();
      }
    } else {
      // Proceed to route
      next();
    }
  });

export default router;