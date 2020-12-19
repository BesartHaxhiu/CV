<template>
<div>
    <app-Panel></app-Panel>
    <div class="text-center">
    <h1 class="font py-5">Welcome to the dashboard</h1>
    <img src="../../assets/dashboard.svg" width="500px" class="pl-5 img-fluid text-center"> 
    </div>
</div>
</template>

<script>
import Panel from '../Panel/Panel'
export default {
    components: {
        appPanel: Panel
    }

}
</script>

<style>

</style>