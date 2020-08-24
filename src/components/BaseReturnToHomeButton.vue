<template>
  <div class="container col-6 text-right pr-0">
    <router-link to="/" class="link text-secondary text-decoration-none ">
      <svg class="icon icon-arrow-left2">
        <use xlink:href="#icon-arrow-left2" />
      </svg>
      <symbol id="icon-arrow-left2" viewBox="0 0 32 32">
        <path
          d="M12.586 27.414l-10-10c-0.781-0.781-0.781-2.047 0-2.828l10-10c0.781-0.781 2.047-0.781 2.828 0s0.781 2.047 0 2.828l-6.586 6.586h19.172c1.105 0 2 0.895 2 2s-0.895 2-2 2h-19.172l6.586 6.586c0.39 0.39 0.586 0.902 0.586 1.414s-0.195 1.024-0.586 1.414c-0.781 0.781-2.047 0.781-2.828 0z"
        ></path>
      </symbol> Return Home Page
    </router-link>
  </div>
</template>

<script>
export default {
  name: "BaseReturnToHomeButton"
};
</script>

<style scoped>
.link:hover{
    opacity: 0.7;
}
.icon {
  display: inline-block;
  width: 1em;
  height: 1em;
  stroke-width: 0;
  stroke: currentColor;
  fill: currentColor;
}

</style>