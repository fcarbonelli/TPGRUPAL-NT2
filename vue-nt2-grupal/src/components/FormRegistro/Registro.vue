<template lang="html">
  <div class="jumbotron">
    <h2>Registro</h2>
    <vue-form :state="formState" @submit.prevent="enviar()">

      <validate tag="div">
        <label for="nombre">Nombre</label>
        <input class="form-control" 
               type="text" 
               id="nombre" 
               name="nombre" 
               v-model.trim="formData.nombre"
               autocomplete="off" 
               :minlength="nombreMin" 
               :maxlength="nombreMax" 
               no-espacios
               required
        >
        <field-messages name="nombre" show="$dirty">
          <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
          <div slot="no-espacios" class="alert alert-danger mt-1">No se permiten espacios</div>
          <div slot="minlength" class="alert alert-danger mt-1">Campo minimo {{ nombreMin }} letras </div>
          <div v-if="formData.nombre.length == nombreMax" class="alert alert-danger mt-1">Campo maximo {{ nombreMax }} caracteres </div>
        </field-messages>
      </validate>

      <validate tag="div">
        <label for="apellido">Apellido</label>
        <input class="form-control" 
               type="text" 
               id="apellido" 
               name="apellido" 
               v-model.trim="formData.apellido"
               autocomplete="off"  
               :minlength="nombreMin"
               :maxlength="nombreMax"  
               no-espacios
               required
        >
        <field-messages name="apellido" show="$dirty">
          <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
          <div slot="no-espacios" class="alert alert-danger mt-1">No se permiten espacios</div>
          <div slot="minlength" class="alert alert-danger mt-1">Este campo requiere un nombre de minimo {{ nombreMin }} letras </div>
          <div v-if="formData.apellido.length == nombreMax" class="alert alert-danger mt-1">El apellido debe tener como máximo {{ nombreMax }} caracteres </div>
        </field-messages>
      </validate>

      <validate tag="div">
        <label for="nota">DNI</label>
        <input class="form-control" 
               type="number" 
               id="dni" 
               name="dni"
               v-model.number="formData.dni"
               autocomplete="off" 
               required
               >
        <field-messages name="dni" show="$dirty">
          <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
        </field-messages>
      </validate>

      <validate tag="div">
        <label for="edad">Edad</label>
        <input class="form-control" 
               type="number" 
               id="edad" 
               name="edad"
               v-model.number="formData.edad"
               autocomplete="off" 
               :min="edadMin" 
               :max="notaMax"
               required
               >
        <field-messages name="edad" show="$dirty">
          <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
          <div slot="min" class="alert alert-danger mt-1">Para registrarse debe ser mayor a {{ edadMin }} años</div>
        </field-messages>
      </validate>

      <validate tag="div">
        <label for="domicilio">Domicilio</label>
        <input class="form-control" 
               type="text" 
               id="domicilio" 
               name="domicilio" 
               v-model.trim="formData.domicilio"
               autocomplete="off" 
               required
        >
        <field-messages name="domicilio" show="$dirty">
          <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
        </field-messages>
      </validate>

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
      nombreMin: 4,
      nombreMax: 15,
      edadMin: 18,
      registros: [],
    }
  },
  computed: {},
  mounted() {},
  methods: {
    getFormInicial() {
      return {
        nombre: '',
        apellido: '',
        dni: '',
        edad: '',
        domicilio: '',
        email: '',
        password: '',
      }
    },
    enviar() {
      this.registros.push(this.formData)
      console.log(this.formData)
      this.formData = this.getFormInicial()
      this.formState._reset()
    }
  }
}
</script>

<style scoped lang="css">
.jumbotron {
  background-color: rgb(9, 9, 128);
  color: white;
}
hr {
  background-color: #eee;
}
</style>