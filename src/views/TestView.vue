<template>
  <CounterUp :disabled="disabled" />
  <TestChild />
  <TestForm />
</template>

<script>
// @ is an alias to /src
import CounterUp from "@/components/CounterUp.vue";
import TestChild from "@/components/TestChild.vue";
import TestForm from "@/components/TestForm.vue";

export default {
  name: "TestVue",
  components: {
    CounterUp,
    TestChild,
    TestForm,
  },
  data() {
    return {
      disabled: false,
    };
  },
};
</script>
