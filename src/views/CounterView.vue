<template>
  <p>現在のカウント:{{ count }}</p>
  <button @click="countUp">カウントアップ</button>
</template>

<script>
export default {
  computed: {
    count() {
      return this.$store.state.count;
    },
  },
  methods: {
    countUp() {
      this.$store.commit("increment");
    },
  },
};
</script>
