<template>
  <div class="get-from-user">
      <div class="container col-6 pl-0 mt-5 mb-3">
        <h2 class="font-weight-bold">Get User</h2>
    </div>
    <BaseReturnToHomeButton class="col-6"/>
    <div class="container mt-3 mb-5 col-6 p-5 bg-light border">
    <form @submit.prevent="onGetUser">
      <div class="form-group">
        <label for="bookControlSelect">Book Name</label>
        <select class="form-control" id="bookControlSelect" v-model="selectedBook">
          <option value selected disabled>Please select a book</option>
          <option v-for="book in books" :key="book.id" :value="book">{{book.name}}</option>
        </select>
      </div>
      <div class="userList mt-4" v-if="user">
            <p>{{user.userId}}</p>
            <p>{{user.fullName}}</p>
            <p>{{user.adress}}</p>
      </div>
      <button type="submit" class="btn btn-sm btn-secondary btn-block mt-4">Get User</button>
    </form>
    </div>
  </div>
</template>

<script>
import BaseReturnToHomeButton from "../components/BaseReturnToHomeButton";
import { mapGetters } from "vuex";
export default {
  name: "GetUser",
  components: {
    BaseReturnToHomeButton
  },
  data() {
      return {
              selectedBook: '',
              user: null,  
      }
  },
  methods: {
    onGetUser() {
      
      this.user = this.selectedBook.user
      console.log(this.user)
    }
  },
  computed: {
    ...mapGetters({ books: "bookshelfForGetUser" })
  }
};
</script>

<style scoped>
.userList{
  min-height: 5rem;
}
p{
  line-height: 1;
}
</style>