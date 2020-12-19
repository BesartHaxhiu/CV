<template>
<div class="header-bg">
  <nav class="navbar navbar-expand-md ">
    <button class="navbar-toggler navbar-dark" type="button" data-toggle="collapse" data-target="#main-navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="main-navigation">
<div class="d-flex container">
  <div class="mr-auto p-2 fontB" style="font-size:20px"><router-link to="/" style="text-decoration:none;color:white">BH</router-link></div>
    <div class="p-2 " v-if="user.loggedIn">
      <router-link to="/dashboard" class="header-menu font">Dashboard</router-link>
    </div>
  <div class="p-2 ">
    <a href="#" class="header-menu font" v-scroll-to="{ element: '#personal', duration: 1500 }">About me</a>
    </div>
  <div class="p-2 ">
    <a href="#" class="header-menu font" v-scroll-to="{ element: '#records', duration: 1500 }">Records</a>
    </div>
  <div class="p-2 ">
    <a href="#" class="header-menu font" v-scroll-to="{ element: '#work', duration: 1500 }">Work</a>
    </div>
  <div class="p-2 ">
    <a href="#" class="header-menu font" v-scroll-to="{ element: '#contact', duration: 1500 }">Contact</a>
  </div>

          <template v-if="user.loggedIn || user.registerIn">
            <li class="nav-item">
              <a class="header-menu font" @click.prevent="signOut"><i class="fa fa-sign-out" id="sign-out-icon"></i></a>
            </li>
          </template>
          
          <template v-else>
            <li class="nav-item">
              <router-link to="login" class="header-menu font"><i class="fa fa-user-circle-o" style="font-size:18px;color:wheat"></i></router-link>
            </li>
          </template>
          </div>
  </div>
  </nav>
</div>
</template>

<script>
import { mapGetters } from "vuex";
import firebase from "firebase";
export default {
    computed: {
    ...mapGetters({
// map `this.user` to `this.$store.getters.user`
      user: "user"
    })
  },
    methods: {
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
         this.$router.go({
            name: 'home',  
            })
          this.$router.replace({
            name: "home"
          });
        });
    },
  }
}
</script>

<style>
@import 'Header.css';
</style>