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

.bannerText {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #ffffff;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  font-size: larger;
}
</style>