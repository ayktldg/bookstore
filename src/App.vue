<template>
  <div id="app">
      <transition name="page" mode="out-in">
      <router-view />
    </transition>
    <notifications position="top center" />
  </div>
</template>

<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.page-enter,
.page-leave-active {
  opacity: 0;
  transform: translate(50px);
}
.page-enter-active,
.page-leave {
  transition: all 0.5s;
}

</style>
