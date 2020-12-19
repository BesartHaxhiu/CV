<template>
 <div class="container">

    <div class="card o-hidden border-0 shadow-lg my-5">
      <div class="card-body p-0">
        <!-- Nested Row within Card Body -->
        <div class="row">
          <div class="col-lg-5 d-none d-lg-block bg-register-image"></div>
          <div class="col-lg-7">
            <div class="p-5">
              <div class="text-center">
                <h1 class="h4 text-dark mb-4">Create an Account!</h1>
              </div>
              <div v-if="error" class="alert alert-danger">{{error}}</div>
              <form action="#" @submit.prevent="submit">
                <div class="form-group row">
                  <div class="col-sm-6 mb-3 mb-sm-0">
                    <div class="input-group-prepend">
                    <span class="input-group-text bg-info"><i class="fas fa-user" style="color:white;"></i></span>
                    <input type="text" class="form-control form-control-user" id="name" placeholder="First Name" autofocus v-model="form.name">
                    </div>
                    
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col-sm-6 mb-3 mb-sm-0">
                  <div class="input-group-prepend">
                  <span class="input-group-text bg-info color-light"><i class="far fa-envelope-open " style="color:white;"></i></span>
                  <input type="email" class="form-control form-control-user" id="email" placeholder="Email Address" autofocus v-model="form.email"  >
                  </div>
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col-sm-6 mb-3 mb-sm-0">
                    <div class="input-group-prepend">
                    <span class="input-group-text bg-info"><i class="fa fa-lock " style="color:white;font-size:20px;padding:2.5px;"></i></span>
                    <input type="password" class="form-control form-control-user" id="password" placeholder="Password"  v-model="form.password">
                    </div>
                  </div>
                </div>
                <button type="submit" class="btn btn-primary btn-user btn-block">Register</button>
                <hr>
                <a href="#" class="btn btn-google btn-user btn-block">
                  <i class="fab fa-google fa-fw"></i> Register with Google
                </a>
                <a href="#" class="btn btn-facebook btn-user btn-block">
                  <i class="fab fa-facebook-f fa-fw"></i> Register with Facebook
                </a>
              </form>
              <hr>
              <div class="text-center">
                <a class="small" href="#">Forgot Password?</a>
              </div>
              <div class="text-center">
                <a class="small" href="#">Already have an account? Login!</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
/* eslint-disable*/
import firebase from "firebase";

export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: ""
      },
      error: null
    };
  },
  methods: {
    submit() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.form.email, this.form.password)
        .then(data => {
          data.user
            .updateProfile({
              displayName: this.form.name
            })
            this.$router.push({name: '/',})
            .then(() => {});
        })
        .catch(err => {
          this.error = err.message;
        });
    }
  }
};
</script>