<template>
  <tr v-for="(vehicle, i) in vehicles" : key="i">
    <Card CardTitle:{{vehicle.model}} - {{vehicle.year}}cardText: {{vehicle.description}}/>
  </tr>
</template>

<script lang="js">
import vehicleModule from '../../store/vehicleModule'
import Card from '../CardVehiculo/Card'
export default {
  name: 'src-components-cardVehiculo-card',
  components: {
    cardList: Card
  },
  props: [],
  data() {
    return {
      vehicleData: this.listVehicles(),
    }
  },
  computed: {},
  mounted() {},
  methods: {
    listVehicles: function() {
      vehicleModule.actions.getVehicles();
    }
  }
}
</script>
