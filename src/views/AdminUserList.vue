<template>
  <div class="d-flex flex-row">
    <div>
      <!-- class="col-3" -->
      <!-- AdminBar -->
      <AdminBar />
    </div>
    <div>
      <!-- class="col-9" -->

      <UserCard :adminUsers="adminUsers" />
    </div>
  </div>
</template>

<script>
import AdminBar from "../components/AdminBar.vue";
import UserCard from "../components/UserCard.vue";
import AdminUsersAPI from "../apis/admin.js";
export default {
  name: " AdminUsers",
  components: {
    AdminBar,
    UserCard,
  },
  data() {
    return {
      adminUsers: [],
    };
  },

  created() {
    this.fetchAdminUsers();
  },

  methods: {
    async fetchAdminUsers() {
      try {
        const { ...response } = await AdminUsersAPI.getUsers();
        console.log(response);
        const { data } = response;
        this.adminUsers = data;
        console.log(this.adminUsers);
      } catch (error) {
        console.log("error", error);
      }
    },
  },
};
</script>