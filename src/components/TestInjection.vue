<template>
  <p>{{ userId }}</p>
</template>

<script>
import { inject } from "vue";
export default {
  setup() {
    // userIdでinjectを実行し,provideされたglobalな値を取得する
    const userId = inject("userId");

    return {
      userId,
    };
  },
};
</script>
