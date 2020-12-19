<template>
  <div>
    <app-Banner></app-Banner>
    <app-Personal></app-Personal>
    <app-Graphics></app-Graphics>
    <app-Work></app-Work>
    <app-Contact></app-Contact>
    <app-Footer></app-Footer>
  </div>
</template>

<script>
import Banner from './Banner/Banner';
import Personal from './Details/Personal';
import Graphics from './Records/Graphics';
import Work from './Work/Work';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
export default {

  components:{
    appBanner: Banner,
    appPersonal: Personal,
    appGraphics: Graphics,
    appWork: Work,
    appContact:Contact,
    appFooter: Footer
  }

}
</script>