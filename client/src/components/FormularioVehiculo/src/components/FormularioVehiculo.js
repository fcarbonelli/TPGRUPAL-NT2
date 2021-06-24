
export default {
  name: 'src-components-formulario',
  components: {},
  props: [],
  data () {
    return {
      formData : this.getInicialData(),
      formState : {},
      stringMaxLength: 15,
      stringMinLength:2, //asignar en el form
      listVehicles: [],
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    getInicialData(){
      return {
        brand: "",
        model:"",
        year:"",
        kilometers:"",
        color:"",
        doors:"",
        description:"",
      }
    },
    enviar(){
      this.listVehicles.push(this.formData)
      console.log(this.formData)
      this.formData = this.getInicialData()
      this.formState._reset()    
    }   
  }
}


