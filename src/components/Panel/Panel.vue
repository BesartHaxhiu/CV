<template>
    <div class="admin-nav">
        <h6 class="text-white hi">Hi {{user.data.displayName}}</h6>
        <hr class="hr-admin-name bg-secondary" width="200">
        <li :class="[currentPage.includes('dashboard') ? activeClass : '', 'nav-item']" id="li-home">
    <router-link to="/dashboard">
        <a class="nav-link">
        <i class="fa fa-fw fa-home nav-ikonat "></i>
        <span class="nav-text">Home</span> 
        </a> 

    </router-link>
        </li>
    <router-link to="/addwork" active-class="Pactive" exact> <a class="nav-link "><i class="fa fa-fw fa-plus nav-ikonat"></i><span class="nav-text">Work</span></a></router-link>
    <a class="nav-link" @click="signOut()" style="cursor:pointer"><i class="fa fa-sign-out nav-ikonat" aria-hidden="true"></i><span class="nav-text">LogOut</span></a>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
import firebase from 'firebase'
    export default {
        data(){
            return{
                activeClass: 'Pactive',
            };
        },

        computed:{
		
		...mapGetters({
		
			user:"user"
		}),
            currentPage(){
                return this.$route.path;
            }
        },

        methods:{
             signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push({
            name: "login"
          });
        });
    }
        }

    }
</script>

<style>
@import 'Panel.css';
</style>