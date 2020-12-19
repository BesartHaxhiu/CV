<template>
<div>
<app-Panel></app-Panel>
 <div class="d-flex">

    <div class="card o-hidden border-0 shadow-lg my-5 container ml-5 mr-5">
      <div class="card-body p-0">
        <!-- Nested Row within Card Body -->
        <div class="row">
          <div class="col-lg-5 d-none d-lg-block bg-addWork"></div>
          <div class="col-lg-7">
            <div class="p-5">

                <form @submit="onSubmit">
        <div class="form-group">
          <label for="title" class="text-dark">Title</label>
          <input required type="text" class="form-control" placeholder="Enter Title" id="title" name="title" >
       
        </div>

              
        <div class="form-group text-dark">
       <label for="picture">Picture</label>
              <input required type="file" id="image" name="image"  class="form-control-file"  @change="onFileChange" >
        </div>

          <button type="submit" class="btn btn-outline-dark" >Submit</button>
  </form>
            </div>
          </div>
        </div>
      </div>
    </div>
 </div>
   
</div>
</template>

<script>
/* eslint-disable */
import { mapGetters } from "vuex";
import Panel from '../Panel/Panel'
import axios from "axios";
export default {
  data() {
    return {
      work: {},
    
    };
  },
  components: {
    appPanel: Panel
  },
  computed: {
    ...mapGetters({
// map `this.user` to `this.$store.getters.user`
      user: "user"
    })
  },
  methods: {
    onFileChange(e) {
      const file = e.target.files[0];
      
      console.log(file);
    },
    onSubmit(evt) {
      evt.preventDefault();
      
      
        
          var bodyFormData = new FormData();
          let image = document.getElementById("image");

          bodyFormData.set("title", document.getElementById("title").value);
          bodyFormData.append("image", image.files[0]);

          axios.post(`http://localhost:4000/work`, bodyFormData)
      .then(response => {
        //console.log(response);
        this.$router.push({
          name: 'cv',
          //params: { id: response.data._id }
        })
        })
        
    }
  }
};
</script>

<style>
@import 'AddWork.css';
</style>