<template>
  <div>
    <div>
      <!-- NavBar -->
      <NavBar />
    </div>
    <div>
      <!-- Account -->
      <Account />
    </div>
  </div>
</template>

<script>
import Account from "../components/Account.vue";
import NavBar from "../components/NavBar.vue";
export default {
  components: {
    Account,
    NavBar,
  },
};
</script>