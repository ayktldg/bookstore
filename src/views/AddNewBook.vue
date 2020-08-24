<template>
<div class="add-new-book">
    <div class="container col-6 pl-0 mt-5 mb-3">
        <h2 class="font-weight-bold">Add New Book</h2>
    </div>
    <BaseReturnToHomeButton class="col-6"/>
     <div class="container mt-3 mb-5 col-6 p-5 bg-light border">
    <form @submit.prevent="onSave">
      <div class="form-group">
        <label for="inputBookName">Book Name</label>
        <input
          type="text"
          class="form-control"
          id="inputBookName"
          placeholder="Please enter book name"
          v-model="book.name"
        />
      </div>
      <div class="form-group">
        <label for="inputAuthor">Author</label>
        <input
          type="text"
          class="form-control"
          id="inputAuthor"
          placeholder="Please enter author"
          v-model="book.author"
        />
        </div>
        <div class="form-group">
        <label for="inputImageUrl">Book Image Url</label>
        <input
          type="text"
          class="form-control"
          id="inputImageUrl"
          placeholder="Book Image URL"
          v-model="book.imageUrl"
        />
      </div>
      <button type="submit" class="btn btn-secondary btn-block mt-5">Save</button>
    </form>
  </div>
</div>
</template>

<script>
import BaseReturnToHomeButton from '../components/BaseReturnToHomeButton'
import { v4 as uuidv4 } from 'uuid';
    export default {
        name: 'AddNewBook',
        components: {
            BaseReturnToHomeButton
        },
        data() {
            return {
                book: {
                    id: '',
                    name: '',
                    author: '',
                    imageUrl: ''
                }
            }
        },
        methods:{
            onSave(){
                this.generateId();
                this.$store.dispatch('ADD_NEW_BOOK', this.book);
                this.clearForm();
            },
            generateId(){
                this.book.id = uuidv4();
            },
            clearForm(){
              this.book.name = '';
              this.book.author = '';
              this.book.imageUrl = '';
            }
        }
    }
</script>

<style scoped>

</style>