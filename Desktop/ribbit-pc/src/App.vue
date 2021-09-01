<template>
  <div>
    <h2>{{$store.state.moduleA.username}}</h2>
    <h2>{{$store.state.moduleB.username}}</h2>
  </div>
</template>
<script>

export default {
  name: "App",
  setup() {
  },
};
</script>

<style lang="less">
</style>
