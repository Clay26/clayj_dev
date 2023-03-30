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
  <div class="header">
    <div>
      <h3>
        Clay
      </h3>
    </div>
    <div class="navBar">
      <NavItem :link="homeLink">
        Home
      </NavItem>
      <NavItem :link="homeLink">
        HomeNew
      </NavItem>
      <NavItem :link="homeLink">
        Index
      </NavItem>
    </div>
  </div>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  background-color: cadetblue;
  align-items: center;
  padding-left: 60px;
}

.navBar {
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
}
</style>