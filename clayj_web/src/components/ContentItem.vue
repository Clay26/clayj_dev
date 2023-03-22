<template>
  <div class="item">
    <i>
      <slot name="icon"></slot>
    </i>
    <div class="details">
      <h1>
        <slot name="heading"></slot>
      </h1>
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
}

.details {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 400px;
}
.item:before {
  content: ' ';
  border-left: 1px solid var(--color-border);
  position: absolute;
  left: 0;
  bottom: calc(50% + 25px);
  height: calc(50% - 25px);
}
.item:after {
  content: ' ';
  border-left: 1px solid var(--color-border);
  position: absolute;
  left: 0;
  top: calc(50% + 25px);
  height: calc(50% - 25px);
}
.item:first-of-type:before {
  display: none;
}
.item:last-of-type:after {
  display: none;
}

</style>