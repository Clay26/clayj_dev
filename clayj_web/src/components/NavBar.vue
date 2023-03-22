<script lang="ts">
import NavItem from './NavItem.vue'

export default {
  components: {
    NavItem,
  },
  data() {
    return {
      homeLink: 'https://www.clayjackson.dev',
    };
  },
};
</script>

<template>
  <div class="navBar">
    <NavItem :link="homeLink">
      Home
    </NavItem>
    <NavItem :link="homeLink">
      HomeNew
    </NavItem>
  </div>
</template>

<style scoped>
.navBar {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding-left: 20px;
  background-color: cadetblue;
  align-items: stretch;
}
</style>