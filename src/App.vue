<template>
  <div class="app">
    <Principal />
  </div>
</template>

<script>
import Principal from './components/Principal';

export default {
  name: 'App',
  components: {
    Principal
  }
}
</script>

<style>
.app{
  display: flex;
  margin-left: 5%;
  width: 100%;
  height: 100%;
}
</style>
