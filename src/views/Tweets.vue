<template>
  <div class="d-flex">
    <div>
      <NavBar />
    </div>

    <div>
      <MainTweets :tweets="tweets" @after-create-tweet="afterCreateTweet" />
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
import { mapState } from "vuex";

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
      console.log("aftercreate");
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
    tweets: {
      handler: function() {
        console.log("watch is on"); //測試用
      },
      deep: true
    }
  },
  computed: {
    ...mapState(["currentUser", "isAuthenticated"])
  }
};
</script>

