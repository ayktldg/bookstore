<template>
  <div class="cards d-flex flex-column align-items-center">
    <div class="container col-9 pl-0 mt-5 mb-3">
      <h2 class="font-weight-bold">Add New Book</h2>
    </div>
    <BaseReturnToHomeButton class="col-9" />
    <div class="card container col-9 m-3 border" v-for="book in books" :key="book.id">
      <div class="row">
        <div class="col-2 p-0">
          <img :src="book.imageUrl" :alt="book.name" class="w-100"/>
        </div>
        <div class="col-10 p-5">
          <div class="d-flex">
            <h3>{{book.name}}</h3>
            <div class="ml-auto">
              <span>{{book.user !== null ? 'At User': 'In Store'}}</span>
            </div>
          </div>
          <div class="d-flex">
             <p>{{book.author}}</p> 
             <div class="ml-auto" v-if="book.user === null">
                 <a class="text-danger text-decoration-none" @click="removeBook(book)">Delete</a>
             </div> 
          </div>  
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import BaseReturnToHomeButton from "../components/BaseReturnToHomeButton";
export default {
  name: "BookList",
  components: {
    BaseReturnToHomeButton
  },
  methods: {
    removeBook(book){
      this.$store.dispatch('REMOVE_BOOK', book)
    }
    
  },
  computed: {
    ...mapGetters({ books: "bookshelf" })
  },
};
</script>

<style scoped>
img {
  height: 100%; 
}
a{
  cursor: pointer;
}

 @media (max-width: 575.98px) { 
  .menu{
    display: flex;
    flex-direction: column;
    }
  }
</style>