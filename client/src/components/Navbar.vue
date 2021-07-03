<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">L'automotores</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link active" to="/login"
              >Login
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link active" to="/registro"
              >Registro
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link active" to="/vehicles"
              >Vehiculos
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link active" to="/list-vehicles"
              >Lista Vehiculos
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link active" to="/logout"
              >Logout
            </router-link>
          </li>
        </ul>
        <form class="d-flex">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">
            Buscar...
          </button>
        </form>
      </div>
    </div>
  </nav>
</template>

<script lang="js">

  export default  {
    name: 'navbar',
    props: [],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}
</script>

<style scoped lang="css">
.navbar {
}
</style>
