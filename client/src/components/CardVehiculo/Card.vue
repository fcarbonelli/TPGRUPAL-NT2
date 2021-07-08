<template>
  <div class="card" style="width: 18rem;">
    <img src="" class="card-img-top" alt="" />
    <div class="card-body">
      <h5 class="card-title">{{ vehicleData.model }}</h5>
      <p class="card-text">
        {{ vehicleData.year }}
      </p>
    </div>
  </div>
</template>

<script lang="js">

export default {
  name: 'Card',
  components: {},
  props: ["vehicleData"],
  data() {
    return {}
  },
  computed: {},
  mounted() {},
  methods: {}
}
</script>
