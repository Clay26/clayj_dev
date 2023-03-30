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
  <div class="item">
    <a :href="link">
      <slot></slot>
    </a>
  </div>
</template>

<style scoped>
.item {
  min-width: 110px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border-left: 2px solid;
}

a {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  text-decoration: none;
}

.item:last-of-type {
  border-right: 2px solid;
}
</style>