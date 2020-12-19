<template>
  <div id="app">
      <app-header></app-header>
      <transition name="page" mode="out-in">
      <router-view :key="$route.fullPath"></router-view>
      </transition>
  </div>
</template>

<script>

import Header from './components/Header/Header';
import {mapGetters} from 'vuex';
export default {
  name: 'App',

  components: {
    appHeader: Header,
  },
  computed:{
    ...mapGetters({
      user:'user'
    })
  }
}
</script>