<template>
  <div>
    <div>
      <!--NavBar-->
      <NavBar />
    </div>

    <div>
      <!-- TweetsDetail -->
      <TweetsDetail />
    </div>

    <div>
      <!-- FollowRecommend -->
      <FollowRecommend />
    </div>

    <div>
      <!-- RepliedContent -->
      <RepliedContent style="display: none" />
    </div>
  </div>
</template> 

<script>
import TweetsDetail from "../components/TweetsDetail.vue";
import RepliedContent from "../components/RepliedContent.vue";
import NavBar from "../components/NavBar.vue";
import FollowRecommend from "../components/FollowRecommend.vue";
import tweetAPI from "../apis/tweet.js";
export default {
  components: {
    TweetsDetail,
    RepliedContent,
    NavBar,
    FollowRecommend,
  },
  data() {
    return {
      Tweet: {},
    };
  },

  created() {
    const { id } = this.$route.params;
    this.fetchTweet(id);
    console.log(id);
  },

  methods: {
    async fetchTweet(tweetId) {
      console.log(tweetId);
      try {
        const response = await tweetAPI.tweet.get({ tweetId });
        console.log(response);
      } catch (error) {
        console.log("error", error);
      }
    },
  },
};
</script>


