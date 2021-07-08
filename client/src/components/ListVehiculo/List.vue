<template>
<div>
  <tr v-for="(vehicle, i) in this.$store.state.v.vehicles" :key="i">
    <Card :vehicleData="vehicle" />
  </tr>
</div>
</template>

<script lang="js">
import Card from "../CardVehiculo/Card.vue"
export default {
  name: 'src-components-cardVehiculo-card',
  components: {
    Card,
  },
  props: [],
  data() {
    return {
      
    }
  },
  computed: {},
  mounted() {
    this.listVehicles()
    console.log("BLABLA ",this.listVehicles());
  },
  methods: {
    listVehicles: function() {
      this.$store.dispatch("v/getVehicles");
    }
  }
}
</script>
