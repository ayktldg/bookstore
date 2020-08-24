<template>
   <div class="card container col-9 m-3 border">
      <div class="row">
        <div class="col-3 p-0">
          <img :src="book.imageUrl" :alt="book.name" class="w-75"/>
        </div>
        <div class="col-9 p-5">
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
</template>

<script>
    export default {
        name: 'BookCard',
        props:{
            book: {
                type: Object,
                required: true
            }
        },
        methods: {
    removeBook(book){
      this.$store.dispatch('REMOVE_BOOK', book)
    }
    }
    }
</script>

<style lang="scss" scoped>

</style>