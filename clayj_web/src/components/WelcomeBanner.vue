<script lang="ts">
export default {
  props: {
    imageUrl: {
      type: String,
      required: true,
    },
  },
  mounted() {
    this.$el.style.backgroundImage = `url(${this.imageUrl})`;
  },
};
</script>

<template>
  <div class="Banner">
    <slot name="backgroundImage"></slot>
    <div class="bannerText">
        <slot name="content"></slot>
    </div>
  </div>
</template>

<style scoped>
.Banner {
  min-height: 50vh;
  margin: 0px;
  padding: 0px;
  border: 0px;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url();
}
</style>