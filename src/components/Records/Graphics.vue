<template>
  <div class="my-5" id="records">
      <div class="container py-5">
          <h1 class="text-center font my-3" style="color:#28798a">WHAT I'M BEST AT</h1>
        <div class="row row-cols-1 row-cols-md-2">
            <div class="col mb-4">
                <div class="card text-center">
                    <h4>HTML<i class="fa fa-html5" style="font-size:25px"></i></h4>
                    <div class="donut-ch">
                        <vue-ellipse-progress 
                        :progress="progressHtml" 
                        :size="sizeHtml" 
                        :color="colorHtml"
                        :emptyColor="emptyColorHtml"
                        :lineMode='lineModeHtml'
                        />
                    </div>
                </div>
            </div>

            <div class="col mb-4">
                <div class="card text-center">
                     <h4>CSS <i class="fab fa-css3-alt" style="font-size:24px"></i></h4>
                    <div class="donut-ch">
                        <vue-ellipse-progress 
                        :progress="progressCSS" 
                        :size="sizeCSS" 
                        :color="colorCSS"
                        :emptyColor="emptyColorCSS"
                        :lineMode='lineModeCSS'
                        />
                    </div>
                </div>
            </div>

            <div class="col mb-4">
                <div class="card text-center">
                    <h4>JavaScript <i class="fab fa-js"></i></h4>
                    <div class="donut-ch">
                       <vue-ellipse-progress 
                        :progress="progressJs" 
                        :size="sizeJs" 
                        :color="colorJs"
                        :emptyColor="emptyColorJs"
                        :lineMode='lineModeJs'
                        />
                    </div>
                </div>
            </div>

            <div class="col mb-4">
                <div class="card text-center">
                    <h4>Others <i class="fab fa-stack-overflow"></i></h4>
                    <div class="donut-ch">
                      <vue-ellipse-progress 
                      :color="color"
                      :emptyColor="emptyColor"
                      :size="size" 
                      :thickness="thickness"
                      :data="Others"/>
                    </div>
                </div>
            <div class="card-footer bg-white">
            <small class="text-muted">
                <ul class="row">
                    <li class="pr-4"><i class="fab fa-php" style="font-size:15px;color:purple;"></i> </li>
                    <li class="pr-4"><i class="fab fa-node" style="font-size:15px;color:green;"></i></li>
                    <li class="pr-4"><i class="fab fa-react" style="font-size:15px;color:cyan;"></i></li>
                    <li class="pr-4"><i class="fab fa-vuejs" style="font-size:15px;color:green;"></i></li>
                    <li class="pr-4"><i class="fab fa-java" style="font-size:15px;color:brown;"></i></li>
                    <li class="pr-4"><i class="fab fa-laravel" style="font-size:15px;color:brown;"></i></li>
                </ul>
            </small>
            </div>
            </div>

        </div>

      </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            progressHtml: 93,
            sizeHtml: 150,
            colorHtml: 'rgb(255, 124, 10)',
            emptyColorHtml: 'rgb(255, 244, 235)',
            lineModeHtml:"in 0.1",

            progressCSS: 95,
            sizeCSS: 150,
            colorCSS: 'rgb(0, 162, 255)',
            emptyColorCSS: 'rgb(214, 240, 255)',
            lineModeCSS:"in 0.1",

            progressJs: 83,
            sizeJs: 150,
            colorJs: 'rgb(255, 229, 28)',
            emptyColorJs: 'rgb(255, 251, 224)',
            lineModeJs:"in 0.1",

            Others: [
            //php
            { 
            progress: 70, 
            color: "rgb(195, 179, 245)",  
            emptyColor: "transparent",
            thickness: "5%",
            size: 120
            },

            //nodeJs
            { 
            progress: 77, 
            color: 'rgb(194, 252, 205)',
            emptyColor: "transparent",
            thickness: "5%",
            size: 120
            },

            //React Js
            {
            progress: 60, 
            color: 'rgb(181, 230, 245)',
            emptyColor: "transparent",
            thickness: "5%",
            size: 120
            },

            //Vue js
            {
            progress: 85, 
            color: 'rgb(166, 207, 155)',
            emptyColor: "transparent",
            thickness: "5%",
            size: 120
            },

            //Java
            {
            progress: 65, 
            color: 'rgb(255, 248, 194)',
            emptyColor: "transparent",
            thickness: "5%",
            size: 120
            },

            //laravel
            {
             progress: 55, 
            color: 'rgb(252, 179, 179)',
            emptyColor: "transparent",
            thickness: "5%",
            size: 120
            }
            ]
        
        }
    }
}
</script>

<style>
@import 'Graphics.css';
</style>