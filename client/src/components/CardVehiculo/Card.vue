<template>

  <div class="card-deck">
    <div class="card" :style="{ width: '18rem' }" @click="clicked('No hay información del vehiculo por el momento')">
      <img src="../../assets/fitito.webp" class="card-img-top">
      <div class="card-body">
        <h5 class="card-title">{{ vehicleData.brand | capitalize }} {{ vehicleData.model | capitalize }} </h5>
        <p class="card-text">{{ vehicleData.year }}</p>
      </div>
      <div class="card-footer">
        <small class="text-muted">{{ vehicleData.kilometers + ' kms'}}</small>
      </div>
    </div>
  </div>
  
</template>

<script lang="js">

import alertMixin from "../../mixins/alertMixin";

export default {
  name: 'Card',
  components: {},
  props: ["vehicleData"],
  mixins: [alertMixin],
  data() {
    return {}
  },
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  },
  computed: {},
  mounted() {},
  methods: {}
}
</script>
