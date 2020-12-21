<template>
  <div class="d-flex flex-row">
    <div>
      <!-- class="col-3" -->
      <!-- AdminBar -->
      <AdminBar />
    </div>
    <div>
      <!-- class="col-9" -->
      <!--UserCard -->
      <AdminMain />
    </div>
  </div>
</template>

<script>
import AdminBar from "../components/AdminBar.vue";
import AdminMain from "../components/AdminMain.vue";
export default {
  components: {
    AdminBar,
    AdminMain,
  },
};
</script>