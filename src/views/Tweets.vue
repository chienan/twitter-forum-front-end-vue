<template>
  <div class="d-flex">
    <div>
      <NavBar />
    </div>

    <div>
      <MainTweets v-for="tweet in tweets" :key="tweet.id" :initial-tweet="tweet" />
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
import { Toast } from "../utils/helpers";

export default {
  components: {
    NavBar,
    MainTweets,
    FollowRecommend
  },
  data() {
    return {
      tweets: []
    };
  },
  created() {},
  methods: {
    async fetchTweets() {
      try {
        const { data } = await tweetsAPI.getTweets();
        this.tweets = data.tweets;
      } catch (error) {
        console.log("error", error);

        Toast.fire({
          icon: "error",
          title: "無法取得推文資料，請稍後再試"
        });
      }
    }
  }
};
</script>

