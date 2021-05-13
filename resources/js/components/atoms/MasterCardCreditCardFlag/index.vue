<template>
  <div class="master-card-credit-card-flag-component relative w-2">
      <div class="left absolute bg-red-500 left-0 rounded-xl h-5 w-5"></div>
      <div class="right absolute bg-yellow-300 right-0 rounded-xl h-5 w-5"></div>
    </div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
.left::after {
  background: red;
  border-radius: 50px;
  content: "";
  height: 20px;
  opacity: 0.5;
  position: absolute;
  width: 20px;
  z-index: 1;
}
</style>
