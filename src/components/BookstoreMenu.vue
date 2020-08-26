<template>
  <div class="menu container d-flex flex-column p-5 mr-4 border bg-light">
    <h4>Book Store Operations</h4>
    <router-link
      tag="button"
      to="/add-new-book"
      type="button"
      class="btn btn-sm btn-secondary my-5"
    >Add New Book</router-link>
    <router-link
      tag="button"
      to="/book-list"
      type="button"
      class="btn btn-sm btn-secondary"
    >Book List</router-link>
  </div>
</template>

<script>
export default {
  name: "BookstoreMenu"
};
</script>

<style  scoped>
@media (max-width: 575.98px) {
  .menu {
    margin-bottom: 3rem;
  }
}
</style>