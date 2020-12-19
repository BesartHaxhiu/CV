<template>
   <!-- Carousel -->
      <div class="container my-4">


    <hr class="my-4">

    <!--Carousel Wrapper-->
    <div id="multi-item-example" class="carousel slide carousel-multi-item" data-ride="carousel">

      <!--Controls-->
      <div class="controls-top">
        <a class="btn-floating" href="#multi-item-example" data-slide="prev"><i class="fa fa-chevron-left"></i></a>
        <a class="btn-floating" href="#multi-item-example" data-slide="next"><i class="fa fa-chevron-right"></i></a>
      </div>
      <!--/.Controls-->

      <!--Indicators-->
      <ol class="carousel-indicators">
        <li data-target="#multi-item-example" data-slide-to="0" class="active"></li>
        <li data-target="#multi-item-example" data-slide-to="1"></li>
        <li data-target="#multi-item-example" data-slide-to="2"></li>
      </ol>
      <!--/.Indicators-->

      <!--Slides-->
      <div class="carousel-inner" role="listbox">

        <!--First slide-->
        <div class="carousel-item active">

          <div class="row">
            <div class="col-md-4" >
              <div class="card mb-2">
                <div v-for="work in workfields.slice(0,1)" v-bind:key="work._id">
              <img :src="`http://localhost:5000/images/${work.image}`"  class="card-img-top">
                </div>
                <div class="card-body">
                  <h4 class="card-title font">Game<span style="color:orange">ON</span></h4>
                  <p class="card-text font text-warning">Game News Website</p>
                  <div class="card-footer">
                    <p class="font" style="font-size:13px">
                        Built with MEVN Stack 
                    <i class="fab fa-node" style="font-size:15px;color:green;"> </i> 
                     <i class="fab fa-erlang" style="font-size:14px;color:darkgrey;"> </i> 
                     <i class="fab fa-vuejs" style="font-size:15px;color:darkgreen;"> </i> 
                     <i class="fab fa-pied-piper-square" style="font-size:15px;color:darkgreen;"> </i> 
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-4 clearfix d-none d-md-block">
              <div class="card mb-2">
                <div v-for="work in workfields.slice(1,2)" v-bind:key="work._id">
              <img :src="`http://localhost:5000/images/${work.image}`"  class="card-img-top">
                </div>
                    <div class="card-body">
                  <h4 class="card-title font">FOOD<span class="text-primary">EX</span></h4>
                  <p class="card-text font text-primary">Client Side E-Commerce Website</p>
                  <div class="card-footer">
                    <p class="font" style="font-size:13px">
                        Built with MERN Stack 
                    <i class="fab fa-node" style="font-size:15px;color:green;"> </i> 
                     <i class="fab fa-erlang" style="font-size:14px;color:darkgrey;"> </i> 
                     <i class="fab fa-react" style="font-size:15px;color:cyan;"> </i> 
                     <i class="fab fa-pied-piper-square" style="font-size:15px;color:darkgreen;"> </i> 
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-4 clearfix d-none d-md-block">
              <div class="card mb-2">
                <div v-for="work in workfields.slice(2,3)" v-bind:key="work._id">
              <img :src="`http://localhost:5000/images/${work.image}`"  class="card-img-top">
                </div>
                    <div class="card-body">
                  <h4 class="card-title font" >FOOD<span style="color:#288a8a">EX</span></h4>
                  <p class="card-text font" style="color:#288a8a">Admin Side E-Commerce Website</p>
                  <div class="card-footer">
                    <p class="font" style="font-size:13px">
                        Built with MEVN Stack 
                    <i class="fab fa-node" style="font-size:15px;color:green;"> </i> 
                     <i class="fab fa-erlang" style="font-size:14px;color:darkgrey;"> </i> 
                     <i class="fab fa-vuejs" style="font-size:15px;color:green;"> </i> 
                     <i class="fab fa-pied-piper-square" style="font-size:15px;color:darkgreen;"> </i> 
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
        <!--/.First slide-->

        <!--Second slide-->
        <div class="carousel-item">

          <div class="row">
            <div class="col-md-4">
              <div class="card mb-2">
                <div v-for="work in workfields.slice(3,4)" v-bind:key="work._id">
              <img :src="`http://localhost:5000/images/${work.image}`"  class="card-img-top">
                </div>
                    <div class="card-body">
                  <h4 class="card-title font"><span style="color:#28528a">E</span>LL<span style="color:#28528a">E</span></h4>
                  <p class="card-text font" style="color:#28528a">E-Commerce Fashion Website</p>
                  <div class="card-footer">
                    <p class="font" style="font-size:13px">
                        Built with Wordpress CMS 
                    <i class="fab fa-wordpress" style="font-size:15px;color:lightblue;"> </i> 
    
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-4 clearfix d-none d-md-block">
              <div class="card mb-2">
                <div v-for="work in workfields.slice(4,5)" v-bind:key="work._id">
              <img :src="`http://localhost:5000/images/${work.image}`"  class="card-img-top">
                </div>
                    <div class="card-body">
                  <h4 class="card-title font"><span class="text-danger">M</span>ovies</h4>
                  <p class="card-text font text-danger">Vintage Store Movies E-commerce web</p>
                  <div class="card-footer">
                    <p class="font" style="font-size:13px">
                        Built with MEVN Stack 
                    <i class="fab fa-node" style="font-size:15px;color:green;"> </i> 
                     <i class="fab fa-erlang" style="font-size:14px;color:darkgrey;"> </i> 
                     <i class="fab fa-vuejs" style="font-size:15px;color:green;"> </i> 
                     <i class="fab fa-pied-piper-square" style="font-size:15px;color:darkgreen;"> </i> 
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-4 clearfix d-none d-md-block">
              <div class="card mb-2">
                <div v-for="work in workfields.slice(5,6)" v-bind:key="work._id">
              <img :src="`http://localhost:5000/images/${work.image}`"  class="card-img-top">
                </div>
                    <div class="card-body">
                  <h4 class="card-title font"><span class="text-success">On</span>l Food</h4>
                  <p class="card-text font text-success">E-Commerce food website</p>
                  <div class="card-footer">
                    <p class="font" style="font-size:13px">
                        Built with PHP & MySql 
                    <i class="fab fa-html5" style="font-size:15px;color:orange;"> </i> 
                     <i class="fab fa-css3-alt" style="font-size:14px;color:blue;"> </i> 
                     <i class="fab fa-php" style="font-size:15px;color:purple;"> </i> 
                     <i class="fas fa-database" style="font-size:15px;color:lightblue;"> </i> 
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
        <!--/.Second slide-->
      </div>
      <!--/.Slides-->
    </div>
    <!--/.Carousel Wrapper-->
  </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios'
export default {
  data () {
    return {
      workfields:{},
      work: {}
    }
  },created () {
    axios.get(`http://localhost:4000/work`)
    .then(response => {
      this.workfields = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  },
}
</script>

<style>

</style>