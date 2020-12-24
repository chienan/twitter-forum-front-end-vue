<template>
  <div class="d-flex">
    <div>
      <NavBar />
    </div>

    <div>
      <MainTweets :tweets="tweets" />
    </div>

    <div>
      <FollowRecommend />
    </div>
  </div>
</template>

<script>
import NavBar from "../components/NavBar";
import MainTweets from "../components/MainTweets";
import FollowRecommend from "../components/FollowRecommend";
import tweetsAPI from "../apis/tweets";
import usersAPI from "../apis/users";
import { Toast } from "../utils/helpers";

export default {
  components: {
    NavBar,
    MainTweets,
    FollowRecommend
  },
  data() {
    return {
      tweets: {}
    };
  },
  created() {
    this.fetchTweets();
  },
  methods: {
    async fetchTweets() {
      try {
        const response = await tweetsAPI.getTweets({ tweets });
        // console.log("response", response);

        const tweets = response.data;
        this.tweets = tweets;
      } catch (error) {
        console.log("error", error);
        Toast.fire({
          icon: "error",
          title: "無法取得資料，請稍後再試"
        });
      }
    },
    async getCurrentUser() {
      try {
        const response = await usersAPI.getCurrentUser();
        console.log("response", response);

        const currentUser = response.data;
        this.currentUser = currentUser;
      } catch (error) {
        console.log("error", error);
        Toast.fire({
          icon: "error",
          title: "無法取得當前使用者"
        });
      }
    }
  }
};
</script>

