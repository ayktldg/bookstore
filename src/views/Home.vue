<template>
<div class="home">
    <h1 class="font-weight-bold mt-5">Welcome to Bookshelf</h1>
    <div class="menu d-flex justify-content-center align-items-center px-5">
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
    flex-direction: column;}
  }

</style>
