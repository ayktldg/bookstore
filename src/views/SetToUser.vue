<template>
  <div class="set-to-user">
    <div class="container col-6 pl-0 mt-5 mb-3">
      <h2 class="font-weight-bold">Set to User</h2>
    </div>
    <BaseReturnToHomeButton  class="col-6"/>
    <div class="container mt-3 mb-5 col-6 p-5 bg-light border">
      <form @submit.prevent="onSave">
        <div class="form-group">
          <label for="bookControlSelect">Book Name</label>
          <select class="form-control" id="bookControlSelect" v-model="user.selectedBook">
             <option value="" selected disabled>Please select a book</option>
            <option v-for="book in books" :key="book.id" :value="book.id">{{book.name}}</option>
          </select>
        </div>
        <div class="form-group">
          <label for="inputId">Identity Number</label>
          <input
            type="text"
            class="form-control"
            id="inputId"
            placeholder="Please insert user identity number"
            v-model.number="user.userId"
          />
        </div>
        <div class="form-group">
          <label for="inputFullName">User Fullname</label>
          <input
            type="text"
            class="form-control"
            id="inputFullName"
            placeholder="Please enter user name and surname"
            v-model="user.fullName"
          />
          </div>
          <div class="form-group">
          <label for="inputUserAdress">User Adress</label>
          <textarea 
            class="form-control"
            id="inputUserAdress"
            placeholder="Please enter user adress"
            rows="3"
            v-model="user.adress"
          />
        </div>
        <button type="submit" class="btn btn-secondary btn-block mt-5">Save</button>
      </form>
    </div>
  </div>
</template>

<script>
import BaseReturnToHomeButton from "../components/BaseReturnToHomeButton";
import { mapGetters } from 'vuex';
export default {
  name: "SetToUser",
  components: {
    BaseReturnToHomeButton
  },
  data() {
      return {
          user: {
              selectedBook: '',
              userId: '',
              fullName: '',
              adress: '',
          },
         
      }
  },
  methods:{
    onSave(){
      this.$store.dispatch('SET_NEW_USER', this.user)
      this.clearForm();
    },
    clearForm(){
      this.user.userId = '';
      this.user.fullName = '';
      this.user.adress = '';
    }
  },
  computed: {
    ...mapGetters({books: 'bookshelfForSetUser'})
  }
};
</script>

<style scoped>
</style>