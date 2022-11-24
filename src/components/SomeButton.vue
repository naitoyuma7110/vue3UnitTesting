<template>
  <button id="a" @click="clickBtn('a')">ボタンA</button>
  <button id="b" @click="clickBtn('b')">ボタンB</button>
  <button id="c" @click="clickBtn('c')">ボタンC</button>
</template>

<script>
export default {
  methods: {
    clickBtn(type) {
      if (type === "c") {
        this.$emit("click-btn-c");
        return;
      }
      this.$emit("click-btn", type);
    },
  },
};
</script>
