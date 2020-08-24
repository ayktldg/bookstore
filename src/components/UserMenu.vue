<template>
  <div class="container d-flex flex-column p-5 m-5 border bg-light">
      <h2>Book Store Operations</h2>
    <router-link tag="button" to="/set-to-user" type="button" class="btn btn-secondary my-5">Set to User</router-link>
    <router-link
      tag="button"
      to="/get-from-user"
      type="button"
      class="btn btn-secondary"
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