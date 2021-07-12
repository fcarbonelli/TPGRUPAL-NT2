<template>
<div>
  <div class="row row-cols-1 row-cols-md-3 g-4">
      <Card :vehicleData="vehicle" v-for="(vehicle, i) in vehicleList" :key="i" />
  </div>
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
