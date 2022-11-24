<template>
  <p>現在のカウント:{{ count }}</p>
  <button @click="countUp">カウントアップ</button>
</template>

<script>
export default {
  props: {
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    countUp() {
      // disabledがtureの場合はカウントアップせずに終了
      if (this.disabled) {
        return;
      }
      this.count++;
    },
  },
};
</script>
