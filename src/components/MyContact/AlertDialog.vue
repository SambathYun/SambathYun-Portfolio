
<template>
  <!-- #2 using props -->
  <div
    class="alert-container p-2 rounded-md"
    v-show="show"
    :class="setType(type)"
  >
    <div class="text-xl font-bold text-[var(--background)]">
      <h1>{{ title }}</h1>
    </div>
    <div class="text-base font-normal text-[var(--background)]">
      <p v-html="description"></p>
    </div>
  </div>
</template>

<script>
export default {
  //#1 create props properties

  props: {
    show: { type: Boolean, default: false },
    type: {
      type: String,
      default: "success",

      validator(value) {
        // Custom validator function and The value must match one of these strings
        return ["success", "error"].includes(value);
      },
    },
    title: { type: String },
    description: { type: String },
  },
  setup() {
    const types = {
      success: "show-success",
      error: "show-error",
    };
    return {
      setType: (type) => {
        return type ? types[type] : "show-success";
      },
    };
  },
};
</script>

<style lang='scss'>
.alert-container {
  &.show-success {
    background: var(--success);
  }
  &.show-error {
    background: var(--danger);
  }
}
</style>