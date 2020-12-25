<template>
  <div class="d-flex flex-row">
    <div>
      <!-- class="col-3" -->
      <!-- AdminBar -->
      <UserBar />
    </div>
    <div>
      <!-- class="col-9" -->

      <UserCard :adminUsers="adminUsers" />
    </div>
  </div>
</template>

<script>
import UserBar from "../components/UserBar.vue";
import UserCard from "../components/UserCard.vue";
import AdminUsersAPI from "../apis/admin.js";
export default {
  name: " AdminUsers",
  components: {
    UserBar,
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