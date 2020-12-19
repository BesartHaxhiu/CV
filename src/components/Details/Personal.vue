<template>
  <div class="my-5" id="personal">
      <div class="container py-5">
      <div class="desc">
        <h1 class="text-center font" style="color:#2a4f70">Personal Details</h1>
        <p class="font"> Solution-driven Web Developer adept at contributing to collaborative work 
          environment, finding solutions and determing customer satisfaction.
          Proven experience developing cunsumer-focused websites using HTML, CSS,
          JavaScript, PHP.I've been developing for two years as a freelancer.On my recent projects
          mostly I've worked with MEVN and MERN stack, also has previous projects with ASP.net and Laravel PHP.
        </p>
      </div>
        <div class="card-deck">

        <div class="card">
            <div class="card-body text-center">
            <i class='fa fa-graduation-cap' style="color:#2a4f70"></i>
            <h5 class="card-title">Education</h5>
            <div class="d-flex">
            <button class="btn btn-outline-primary mx-auto my-5" @click="animated = !animated" > Load More <i class="fas fa-braille"></i></button>
            </div>
            <section>
                <transition name="animate" enter-active-class="animate__animated animate__flipInY" leave-active-class="animate__animated animate__zoomOutRight">
                <div class="card-group container" v-if="animated">
                <div class="card">
                <div class="card-body">
                <ul>
                    <li class="education-li">
                        <strong>Elementary School </strong> <br>
                        <a  href="#" class="text-primary">Gjon Serreçi</a>
                    </li>
                    <li class="education-li">
                        <strong>High School</strong> <br>
                        <a  href="#" class="text-primary">Gjimnazi Kuvendi i Arbërit</a>
                    </li>
                    <li class="education-li">
                        <strong>University</strong> <br>
                        <a  href="#" class="text-primary">UBT-Computer Science & Engineering</a>
                    </li>
                </ul>
                    </div>
                </div>
                </div>
                </transition>
        </section>
            </div>
        </div>

        <div class="card">
            <div class="card-body text-center">
            <i class='fa fa-code' style="color:#2a4f70"></i>
            <h5 class="card-title">Experience</h5>
            <div class="d-flex">
            <button class="btn btn-outline-warning mx-auto my-5" @click="animated2 = !animated2" > Load More <i class="fas fa-project-diagram"></i></button>
            </div>
            <section>
                <transition name="animate2" enter-active-class="animate__animated animate__flipInY" leave-active-class="animate__animated animate__zoomOutRight">
                <div class="card-group container" v-if="animated2">
                <div class="card">
                <div class="card-body">
                <ul>
                    <li class="education-li">
                        <strong>Freelancer </strong> <br>
                        <a  href="#" class="text-warning">2 years - present</a>
                    </li>
                    <li class="education-li">
                        <strong>Starlabs Intern</strong> <br>
                        <a  href="#" class="text-warning"> October 2020 - December 2020</a>
                    </li>
                </ul>
                    </div>
                </div>
                </div>
                </transition>
        </section>
            </div>
        </div>
        
 <div class="card">
            <div class="card-body text-center">
            <i class='fa fa-map-marker' style="color:#2a4f70"></i>
            <h5 class="card-title">Address</h5>
            <div class="d-flex">
            <button class="btn btn-outline-info mx-auto my-5" @click="animated3 = !animated3" > Load More <i class="fas fa-home"></i></button>
            </div>
            <section>
                <transition name="animate3" enter-active-class="animate__animated animate__flipInY" leave-active-class="animate__animated animate__zoomOutRight">
                <div class="card-group container" v-if="animated3">
                <div class="card">
                <div class="card-body">
                <ul>
                    <li class="education-li">
                        <strong>City </strong> <br>
                        <a  href="#" class="text-info">Ferizaj</a>
                    </li>
                    <li class="education-li">
                        <strong>Street </strong> <br>
                        <a  href="#" class="text-info">Rr.Xhev Llodrovci</a>
                    </li>
                    <li class="education-li">
                        <strong>Zip </strong> <br>
                        <a  href="#" class="text-info">70000</a>
                    </li>
                </ul>
                    </div>
                </div>
                </div>
                </transition>
        </section>
            </div>
        </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            animated: false,
            animated2: false,
            animated3: false
        }
    }
}
</script>

<style>
@import 'Personal.css';
</style>