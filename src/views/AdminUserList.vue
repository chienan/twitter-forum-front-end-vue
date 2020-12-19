<template>
  <div class="d-flex flex-row">
    <div>
      <!-- class="col-3" -->
      <!-- AdminBar -->
      <UserBar />
    </div>
    <div>
      <!-- class="col-9" -->
      <!--AdminMain -->
      <UserCard />
    </div>
  </div>
</template>

<script>
import UserBar from "../components/UserBar.vue";
import UserCard from "../components/UserCard.vue";
export default {
  components: {
    UserBar,
    UserCard,
  },
};
</script>