<template>
  <CounterUp :disabled="disabled" />
  <TestChild />
</template>

<script>
// @ is an alias to /src
import CounterUp from "@/components/CounterUp.vue";
import TestChild from "@/components/TestChild.vue";

export default {
  name: "TestVue",
  components: {
    CounterUp,
    TestChild,
  },
  data() {
    return {
      disabled: false,
    };
  },
};
</script>
