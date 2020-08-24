<template>
  <div class="container d-flex flex-column p-5 border bg-light">
    <h4>User Operations</h4>
    <router-link
      tag="button"
      to="/set-to-user"
      type="button"
      class="btn btn-sm btn-secondary my-5"
    >Set to User</router-link>
    <router-link
      tag="button"
      to="/get-user"
      type="button"
      class="btn btn-sm btn-secondary"
    >Get from User</router-link>
  </div>
</template>

<script>
export default {
  name: "UserMenu"
};
</script>

<style scoped>
</style>