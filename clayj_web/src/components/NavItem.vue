<script lang="ts">
export default {
  props: {
    link: {
      type: String,
      required: true,
    },
  },
  mounted() {
  },
};
</script>

<template>
  <div>
    <a :href="link">
      <slot></slot>
    </a>
  </div>
</template>
