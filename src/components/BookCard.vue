<template>
  <div class="card container col-9 m-3 border">
    <div class="row d-flex">
      <div class="w-25 pr-4">
        <img :src="book.imageUrl" :alt="book.name" class="image w-100" />
      </div>

      <div class="main w-50 pt-3 pl-3">
        <p class="name font-weight-bold">{{book.name}}</p>
        <p class="author font-italic">{{book.author}}</p>
      </div>
      <div class="d-flex flex-column justify-content-around align-items-center w-25">
        <div class>
          <span>{{book.user !== null ? 'At User': 'In Store'}}</span>
        </div>
        <div class v-if="book.user === null">
          <a class="text-danger text-decoration-none" @click="removeBook(book)">Delete</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BookCard",
  props: {
    book: {
      type: Object,
      required: true
    }
  },
  methods: {
    removeBook(book) {
      this.$confirm("Are you sure delete this book?").then(() => {
        this.$store.dispatch("REMOVE_BOOK", book);
      });
    }
  }
};
</script>

<style scoped>
.image {
  max-height: 170px;
}
a {
  cursor: pointer;
}
.name {
  font-size: 1.5em;
}

@media (max-width: 575.98px) {
  .card {
    font-size: 0.5em;
  }
  .main {
    padding-left: 4rem;
  }
  .image {
  }
}
</style>