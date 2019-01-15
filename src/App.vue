<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
@import './assets/css/base';
@import './assets/css/common';

#app {
  display: flex;
  flex: 1;
  width: 100%;
  height: 100%;
}
</style>
