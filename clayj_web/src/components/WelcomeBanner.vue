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
  <div class="BackgroundImage">
    <slot name="backgroundImage"></slot>
    <div class="bannerText">
        <slot name="content"></slot>
    </div>
  </div>
</template>

<style scoped>
.background-image {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url();
}

.BackgroundImage {
  min-height: 50vh;
  margin: 0px;
  padding: 0px;
  border: 0px;
  width: 100%;
}
</style>