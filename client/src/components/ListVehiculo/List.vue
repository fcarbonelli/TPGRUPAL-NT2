<template>
<div>
  <tr v-for="(vehicle, i) in vehicleList" :key="i">
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
  computed: {
    vehicleList: function() {
      return this.$store.state.v.vehicles;
    }
  },
  mounted() {
    this.listVehicles()
  },
  methods: {
    listVehicles: function() {
      this.$store.dispatch("v/getVehicles");
    }
  }
}
</script>
