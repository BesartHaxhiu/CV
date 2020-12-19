<template>
<div class="my-5" id="contact">
    <hr>
  <!--Section: Contact v.2-->
<section class="mb-4 container">

    <!--Section heading-->
    <h2 class="h1-responsive font-weight-bold text-center my-4">Contact Me</h2>
    <!--Section description-->
    <p class="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact me directly.</p>

    <div class="row">

        <!--Grid column-->
        <div class="col-md-9 mb-md-0 mb-5">
            <form id="contact-form" name="contact-form" action="mail.php" method="POST">

                <!--Grid row-->
                <div class="row">

                    <!--Grid column-->
                    <div class="col-md-6">
                        <div class="md-form mb-0">
                            <input type="text" id="name" name="name" class="form-control contact-inp" v-model="contact.name" :class="{ 'is-invalid': submitted && $v.contact.name.$error }">
                            <label for="name" class="">Your name</label>
                <div v-if="submitted && !$v.contact.name.required" class="invalid-feedback">This field is required!!</div>
              <div v-if="submitted && !$v.contact.name.alpha" class="invalid-feedback">This field approves only letters and space!!</div>
              <div v-if="submitted && !$v.contact.name.minLength || !$v.contact.name.maxLength" class="invalid-feedback">It must contain 2 to 30 letters!!</div>
                        </div>
                    </div>
                    <!--Grid column-->

                    <!--Grid column-->
                    <div class="col-md-6">
                        <div class="md-form mb-0">
                            <input type="text" id="email" name="email" class="form-control contact-inp" v-model="contact.email" :class="{ 'is-invalid': submitted && $v.contact.email.$error }">
                            <label for="email" class="">Your email</label>
            <div v-if="submitted && !$v.contact.email.required" class="invalid-feedback">This field is required!!</div>
                        </div>
                    </div>
                    <!--Grid column-->

                </div>
                <!--Grid row-->

                <!--Grid row-->
                <div class="row">
                    <div class="col-md-12">
                        <div class="md-form mb-0">
                            <input type="text" id="subject" name="subject" class="form-control contact-inp" v-model="contact.subject" :class="{ 'is-invalid': submitted && $v.contact.subject.$error }">
                            <label for="subject" class="">Subject</label>
                            <div v-if="submitted && !$v.contact.email.required" class="invalid-feedback">This field is required!!</div>
                        </div>
                    </div>
                </div>
                <!--Grid row-->

                <!--Grid row-->
                <div class="row">

                    <!--Grid column-->
                    <div class="col-md-12">

                        <div class="md-form">
                            <textarea type="text" id="message" name="message" rows="2" class="form-control contact-inp md-textarea" v-model="contact.message" :class="{ 'is-invalid': submitted && $v.contact.message.$error }"></textarea>
                            <label for="message">Your message</label>
                            <div v-if="submitted && !$v.contact.email.required" class="invalid-feedback">This field is required!!</div>
                        </div>

                    </div>
                </div>
                <!--Grid row-->

            </form>

            <div class="text-center text-md-left">
                <button type="submit" @click="onSubmit" class="btn btn-outline-dark btn-user btn-block">Send</button>
            </div>
            <div class="status"></div>
        </div>
        <!--Grid column-->

        <!--Grid column-->
        <div class="col-md-3 text-center">
            <ul class="list-unstyled mb-0">
                <li><i class="fas fa-map-marker-alt fa-2x"></i>
                    <p>Ferizaj, 70000, Kosovë</p>
                </li>

                <li><i class="fas fa-phone mt-4 fa-2x"></i>
                    <p>+ 383 49 854 876</p>
                </li>

                <li><i class="fas fa-envelope mt-4 fa-2x"></i>
                    <p>besart.haxhiu99@gmail.com</p>
                </li>
            </ul>
        </div>
        <!--Grid column-->

    </div>

</section>
<!--Section: Contact v.2-->
</div>
</template>
<script>
import { required, minLength,maxLength, helpers,email} from "vuelidate/lib/validators"
const alpha = helpers.regex('alpha', /^[a-zA-Z ]*$/)

import axios from 'axios'
export default {
  data () {
    return {
      contact:{},
      submitted:false
    }
  },
   validations: {
            contact: {
                name: { required,alpha, minLength: minLength(2), maxLength: maxLength(30)},
                email:{required, email},
                subject:{required},
                message:{required}
                }
        },
  methods: {
    onSubmit () {
      
      this.submitted = true;

        this.$v.$touch();
          if (this.$v.$invalid) {
              return;
      }
      axios.post(`http://localhost:4000/contact`, this.contact)
      .then(response => {
        console.log(response);
        this.$router.go({name: '/' })
 
        })
      
    },

  }
}
</script>

<style>
@import 'Contact.css';
</style>