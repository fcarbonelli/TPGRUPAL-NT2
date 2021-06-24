<template>
  <div class="container-fluid mt-3">
    <div class="jumbotron">
      <Navbar />
      <router-view/>
    </div>    
  </div>
</template>

<script>
  import Navbar from './components/Navbar.vue';
  

  export default {
    name: 'App',
    components: {  
      Navbar
    }
  }

</script>
