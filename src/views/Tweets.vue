<template>
  <div class="d-flex">
    <div>
      <NavBar />
    </div>

    <div>
      <Spinner v-if="isLoading" />
      <!-- <template v-else> -->
      <MainTweets v-else :tweets="tweets" @after-create-tweet="afterCreateTweet" />
      <!-- </template> -->
    </div>

    <div>
      <FollowRecommend :initial-tops="topTenUsers" />
    </div>
  </div>
</template>

<script>
import NavBar from "../components/NavBar";
import MainTweets from "../components/MainTweets";
import FollowRecommend from "../components/FollowRecommend";
import usersAPI from "../apis/users";
import tweetsAPI from "../apis/tweets";
import { Toast } from "../utils/helpers";
import { mapState } from "vuex";
import Spinner from "../components/Spinner";

export default {
  components: {
    NavBar,
    MainTweets,
    FollowRecommend,
    Spinner
  },
  data() {
    return {
      tweets: {},
      isLoading: true,
      topTenUsers: []
    };
  },
  created() {
    this.fetchTweets();
    this.fetchTopTenUsers();
  },
  methods: {
    async fetchTweets() {
      try {
        const response = await tweetsAPI.getTweets({ tweets });

        const tweets = response.data;
        this.tweets = tweets;
        this.isLoading = false;
      } catch (error) {
        console.log("error", error);
        this.isLoading = false;

        Toast.fire({
          icon: "error",
          title: "無法取得資料，請稍後再試"
        });
      }
    },

    afterCreateTweet(payload) {
      const { tweetId, description } = payload;
      this.tweets.push({
        id: tweetId,
        description: description,
        User: {
          id: this.currentUser.id,
          name: this.currentUser.name,
          account: this.currentUser.account,
          avatar: this.currentUser.avatar
        },
        createdAt: new Date(),
        replyCount: "0",
        likeCount: "0"
      });
    },
    async fetchTopTenUsers() {
      try {
        const response = await usersAPI.getTopTenUsers();

        const topTenUsers = response.data;
        this.topTenUsers = topTenUsers;
      } catch (error) {
        console.log("error", error);
        Toast.fire({
          icon: "error",
          title: "無法取得資料，請稍後再試"
        });
      }
    }
    // afterAddLike(payload) {
    //   const { tweetId } = payload;
    //   this.tweets.push({
    //     id: tweetId,
    //     likeCount: +1
    //   });
    // }
  },
  watch: {
    tweets() {
      this.fetchTweets();
    }
  },
  computed: {
    ...mapState(["currentUser", "isAuthenticated"])
  }
};
</script>

