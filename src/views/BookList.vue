<template>
  <div class="cards d-flex flex-column align-items-center">
    <div class="container col-9 pl-0 mt-5 mb-3">
      <h2 class="font-weight-bold">Book List</h2>
    </div>
    <BaseReturnToHomeButton class="col-9" />
    <BookCard v-for="book in paginatedBooks" :key="book.id" :book="book" />
    <div class="overflow-auto">
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        aria-controls="book"
      ></b-pagination>
      <b-table id="books" :per-page="perPage" :current-page="currentPage" small></b-table>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import BaseReturnToHomeButton from "../components/BaseReturnToHomeButton";
import BookCard from "../components/BookCard";
export default {
  name: "BookList",
  components: {
    BaseReturnToHomeButton,
    BookCard
  },
  data() {
    return {
      currentPage: 1,
      perPage: 3
    };
  },
  computed: {
    ...mapGetters({ books: "bookshelf" }),
    rows() {
      return this.books.length;
    },
    paginatedBooks() {
      return this.books.slice(
        (this.currentPage - 1) * this.perPage,
        this.currentPage * this.perPage
      );
    }
  }
};
</script>
