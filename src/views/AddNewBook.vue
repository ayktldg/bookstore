<template>
  <div class="add-new-book">
    <div class="container col-6 pl-0 mt-5 mb-3">
      <h2 class="font-weight-bold">Add New Book</h2>
    </div>
    <BaseReturnToHomeButton class="col-6" />
    <div class="container mt-3 mb-5 col-6 p-5 bg-light border">
      <ValidationObserver v-slot="{ handleSubmit }">
        <form @submit.prevent="handleSubmit(onSave)">
          <div class="form-group">
            <label for="inputBookName">Book Name</label>
            <ValidationProvider
              name="Book Name"
              mode="passive"
              rules="required"
              v-slot="{ errors }"
            >
              <input
                type="text"
                class="form-control"
                id="inputBookName"
                placeholder="Please enter book name"
                v-model="book.name"
              />
              <span class="text-danger">{{ errors[0] }}</span>
            </ValidationProvider>
          </div>
          <div class="form-group">
            <label for="inputAuthor">Author</label>
            <ValidationProvider name="Author" mode="passive" rules="required" v-slot="{ errors }">
              <input
                type="text"
                class="form-control"
                id="inputAuthor"
                placeholder="Please enter author"
                v-model="book.author"
              />
              <span class="text-danger">{{ errors[0] }}</span>
            </ValidationProvider>
          </div>
          <div class="form-group">
            <label for="inputImageUrl">Book Image Url</label>
            <ValidationProvider
              name="Image Url"
              mode="passive"
              rules="required"
              v-slot="{ errors }"
            >
              <input
                type="text"
                class="form-control"
                id="inputImageUrl"
                placeholder="Book Image URL"
                v-model="book.imageUrl"
              />
              <span class="text-danger">{{ errors[0] }}</span>
            </ValidationProvider>
          </div>
          <button type="submit" class="btn btn-secondary btn-block mt-5">Save</button>
        </form>
      </ValidationObserver>
    </div>
  </div>
</template>

<script>
import BaseReturnToHomeButton from "../components/BaseReturnToHomeButton";
import { v4 as uuidv4 } from "uuid";
export default {
  name: "AddNewBook",
  components: {
    BaseReturnToHomeButton
  },
  data() {
    return {
      book: {
        id: "",
        name: "",
        author: "",
        imageUrl: ""
      }
    };
  },
  methods: {
    onSave() {
      this.generateId();
      this.$store.dispatch("ADD_NEW_BOOK", this.book);
      this.$notify({
        text: `${this.book.name} has been added succesfully`,
        type: "success"
      });
      this.clearForm();
    },
    generateId() {
      this.book.id = uuidv4();
    },
    clearForm() {
      this.book.name = "";
      this.book.author = "";
      this.book.imageUrl = "";
    }
  }
};
</script>
