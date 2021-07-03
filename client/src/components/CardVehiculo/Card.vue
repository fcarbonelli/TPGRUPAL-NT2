<template>
  <div class="card" style="width: 18rem;">
    <img src="..." class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">{{ CardTitle }}</h5>
      <p class="card-text">
        {{ cardText }}
      </p>
    </div>
  </div>
</template>

<script lang="js">

export default {
  name: 'Card',
  components: {Card},
  props: [CardTitle, cardText],
  data() {
    return {}
  },
  computed: {},
  mounted() {},
  methods: {}
}
</script>
