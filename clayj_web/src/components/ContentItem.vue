<template>
  <div class="item">
    <i>
      <slot name="icon"></slot>
    </i>
    <div class="details">
      <h2 class="heading">
        <slot name="heading"></slot>
      </h2>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-right: 30px;
  padding-left: 30px;
  border-left: 1px solid;
  height: 100%;
  padding-top: 30px;
  padding-bottom: 30px;
}

.heading {
  font-weight: bold;
}

.item:first-of-type {
  border-left: 0px;
}

.details {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 400px;
}
</style>