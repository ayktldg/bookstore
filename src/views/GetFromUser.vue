<template>
  <div class="get-from-user">
    <div class="container col-6 pl-0 mt-5 mb-3">
      <h2 class="font-weight-bold">Get From User</h2>
    </div>
    <BaseReturnToHomeButton class="col-6" />
    <div class="container mt-3 mb-5 col-6 p-5 bg-light border">
      <form @submit.prevent="onGetFromUser">
        <div class="form-group">
          <label for="bookControlSelect">Book Name</label>
          <select class="form-control" id="bookControlSelect" v-model="selectedBook">
            <option value selected disabled>Please select a book</option>
            <option v-for="book in books" :key="book.id" :value="book">{{book.name}}</option>
          </select>
        </div>
        <div class="userList mt-4" v-if="selectedBook">
          <p>{{selectedBook.user.userId}}</p>
          <p>{{selectedBook.user.fullName}}</p>
          <p>{{selectedBook.user.adress}}</p>
        </div>
        <button type="submit" class="btn btn-sm btn-secondary btn-block mt-4">Get From User</button>
      </form>
    </div>
  </div>
</template>

<script>
import BaseReturnToHomeButton from "../components/BaseReturnToHomeButton";
import { mapGetters } from "vuex";
export default {
  name: "GetFromUser",
  components: {
    BaseReturnToHomeButton
  },
  data() {
    return {
      selectedBook: ""
    };
  },
  methods: {
    onGetFromUser() {
      this.$store.dispatch("GET_FROM_USER", this.selectedBook);
      this.$notify({
        text: `${this.selectedBook.name} has been got from user`,
        type: "success"
      });
      this.selectedBook = "";
    }
  },
  computed: {
    ...mapGetters({ books: "bookshelfForGetFromUser" })
  }
};
</script>

<style scoped>
.userList {
  min-height: 5rem;
}
p {
  line-height: 1;
}
</style>