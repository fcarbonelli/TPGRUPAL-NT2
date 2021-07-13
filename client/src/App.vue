<template>
  <div class="container-fluid mt-3">
    <div class="jumbotron">
      <Navbar />
      <router-view/>
      <Footer />
    </div>    
  </div>
</template>

<script>
  import Navbar from './components/Navbar.vue';
  import Footer from './components/Footer.vue';
  

  export default {
    name: 'App',
    components: {  
      Navbar,
      Footer
    }
  }

</script>
