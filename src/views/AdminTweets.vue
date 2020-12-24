<template>
  <div class="d-flex flex-row">
    <div class="admin-bar">
      <!-- class="col-3" -->
      <!-- AdminBar -->
      <AdminBar v-show="!isLoading" />
    </div>
    <div>
      <!-- class="col-9" -->

      <!-- v-for="admintweet in admintweets" -->
      <!-- :key="admintweet.id" -->
      <AdminMain
        :initialAdmintweets="admintweets"
        @after-delete-admintweet="afterDeleteAdmintweet"
        v-show="!isLoading"
      />
    </div>
  </div>
</template>

<script>
import AdminBar from "../components/AdminBar.vue";
import AdminMain from "../components/AdminMain.vue";
import AdminTweetsAPI from "../apis/admin.js";
import { Toast } from "../utils/helpers.js";
export default {
  name: "AdminTweets",

  components: {
    AdminBar,
    AdminMain,
  },
  data() {
    return {
      admintweets: [],
      isLoading: true,
    };
  },

  created() {
    this.fetchAdminTweets();
  },

  methods: {
    async fetchAdminTweets() {
      try {
        const { ...response } = await AdminTweetsAPI.adminTweets.get();
        console.log(response);
        const { data } = response;
        this.admintweets = data;
        this.isLoading = false;
        if (response.statusText !== "OK") {
          throw new Error(response.statusText);
        }
      } catch (error) {
        this.isLoading = false;
        console.log("error", error);
        Toast.fire({
          icon: "error",
          title: "無法取得推文，請稍後再試",
        });
      }
    },

    async afterDeleteAdmintweet(admintweetId) {
      try {
        console.log("ok");
        this.admintweets = this.admintweets.filter(
          (admintweet) => admintweet.id !== admintweetId
        );
      } catch (error) {
        console.log("error", error);
      }
    },
  },
};
</script>

<style  scoped>
/* s */
</style>