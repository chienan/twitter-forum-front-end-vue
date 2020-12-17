<template>
  <div>
    <div class="col-4">
      <!-- NavBar -->
    </div>
    <div class="col-8">
      <!-- Account -->
      <Account />
    </div>
  </div>
</template>

<script>
import Account from "../components/Account.vue";
export default {
  components: {
    Account,
  },
};
</script>