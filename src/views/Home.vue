<template>
<div class="home">
  <div class="container my-5">
    <h1 class="font-weight-bold">Welcome to Bookshelf</h1>
  </div>
    <div class="menu container d-flex align-items-center px-0">
      <BookstoreMenu />
      <UserMenu />       
  </div>
</div>
</template>

<script>
import BookstoreMenu from '../components/BookstoreMenu'
import UserMenu from '../components/UserMenu'
export default {
  name: "Home",
  components: {
    BookstoreMenu,
    UserMenu
  }
};
</script>
<style scoped>
  @media (max-width: 575.98px) { 
  .menu{
    display: flex;
    flex-direction: column;
    }
  }

</style>
