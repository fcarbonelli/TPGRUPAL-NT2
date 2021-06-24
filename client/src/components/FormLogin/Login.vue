<template lang="html">
  <div class="jumbotron">
    <h2>Login</h2>
    <vue-form :state="formState" @submit.prevent="enviar()">

      <validate tag="div">
          <label for="email">Email</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            class="form-control"
            autocomplete="off"
            v-model.trim="formData.email"
            required
          >
          <field-messages name="email" show="$dirty">
            <div slot="required" class="alert alert-danger">Campo requerido!</div>            
            <div slot="email" class="alert alert-danger mt-1">Email no válido</div>            
          </field-messages>
       </validate>

    <validate tag="div">
          <label for="password">Contraseña</label>
          <input 
            type="password" 
            id="password" 
            name="password" 
            class="form-control"
            autocomplete="off"
            v-model.trim="formData.password"
            required
          >
          <field-messages name="password" show="$dirty">
            <div slot="required" class="alert alert-danger">Campo requerido!</div>                       
          </field-messages>
       </validate>

      <button class="btn btn-success my-3" :disabled="formState.$invalid" type="submit">Enviar</button>
    </vue-form>
  </div>
</template>

<script lang="js">

export default {
  name: 'src-components-formRegistro-registro',
  components: {},
  props: [],
  data() {
    return {
      formData: this.getFormInicial(),
      formState: {},
      logs: [],
    }
  },
  computed: {},
  mounted() {},
  methods: {
    getFormInicial() {
      return {
        email: '',
        password: '',
      }
    },
    enviar() {
      this.logs.push(this.formData)
      console.log(this.formData)
      this.formData = this.getFormInicial()
      this.formState._reset()
    }
  }
}
</script>

<style scoped lang="css">
.jumbotron {
  background-color: rgb(196, 224, 37);
  color: black;
}
hr {
  background-color: #eee;
}
</style>