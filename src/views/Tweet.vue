<template>
  <div>
    <div>
      <!--NavBar-->
      <NavBar />
    </div>

    <div style="display: none">
      <!-- TweetsDetail -->
      <TweetsDetail />
    </div>

    <div>
      <!-- FollowRecommend -->
      <FollowRecommend />
    </div>

    <div>
      <!-- RepliedContent -->
      <RepliedContent />
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
  create() {
    const { id } = this.$route.params;
    this.fetchTweet(id);
    console.log(id);
  },

  methods: {
    async fetchTweet(tweetUserId) {
      console.log(tweetUserId);
      try {
        const response = await tweetAPI.tweet.get({ tweetUserId });
        console.log(response);
      } catch (error) {
        console.log("error", error);
      }
    },
  },
};
</script>


