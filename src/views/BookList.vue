<template>
  <div class="cards d-flex flex-column align-items-center">
    <div class="container col-9 pl-0 mt-5 mb-3">
      <h2 class="font-weight-bold">Book List</h2>
    </div>
    <BaseReturnToHomeButton class="col-9" />
    <BookCard  v-for="book in books" :key="book.id" :book="book"/>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import BaseReturnToHomeButton from "../components/BaseReturnToHomeButton";
import BookCard from '../components/BookCard'

export default {
  name: "BookList",
  components: {
    BaseReturnToHomeButton,
    BookCard,
  },
  computed: {
    ...mapGetters({ books: "bookshelf" })
  },
};
</script>

<style scoped>

</style>