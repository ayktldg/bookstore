<template>
  <div class="container d-flex flex-column p-5 m-5 border bg-light">
      <h2>User Operations</h2>
    <router-link tag="button" to="/add-book" type="button" class="btn btn-secondary my-5">Add New Book</router-link>
    <router-link tag="button" to="/book-list" type="button" class="btn btn-secondary">Book List</router-link>
  </div>
</template>

<script>
export default {
  name: "BookstoreMenu"
};
</script>

<style  scoped>
</style>