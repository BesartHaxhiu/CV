<template>
  <div class=" work-bg" id="work">
      <div class="container">
      <h1 class="text-center font" style="color:#28528a"> Some of my best work</h1>
      <app-Carousel></app-Carousel>
     

  <div class="row my-5">
      <div class="col-md-5 ">
          <img src="../../assets/work.svg" class="space-work-pic" width="500px" height="300px">
          <h3 class="text-center font" style="color:#28528a" >My latest work</h3>
      </div>
      <div class="col-md-7">
        <div class="row">
            <img src="../../assets/work3.png" width="250px" height="300px" class="work-latest-project1"  alt="...">
        <img src="../../assets/work4.png" width="250px" height="300px" class="work-latest-project2"  alt="...">
        
         <img src="../../assets/work6.png" width="250px" height="300px" class="work-latest-project3"  alt="...">
          
        </div>
      </div>
  </div>
</div>
  </div>
</template>

<script>
import Carousel from '../Carousel/Carousel'
export default {
    components: {
        appCarousel: Carousel
    }
}
</script>

<style>
@import 'Work.css';
</style>