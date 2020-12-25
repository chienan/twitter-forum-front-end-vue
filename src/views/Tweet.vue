<template>
  <div>
    <div>
      <!--NavBar-->
      <NavBar />
    </div>

    <div>
      <!-- TweetsDetail -->
      <TweetsDetail :initialTweet="Tweet" :tweetReplies="tweetReplies" />
    </div>

    <div>
      <!-- FollowRecommend -->
      <FollowRecommend />
    </div>

    <div class="repliedContent">
      <!-- RepliedContent -->
      <RepliedContent
        :initialTweet="Tweet"
        :tweetReplies="tweetReplies"
        @after-create-comment="afterCreateComment"
      />
    </div>
  </div>
</template> 

<script>
import { mapState } from "vuex";
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
  computed: {
    ...mapState(["currentUser"]),
  },
  data() {
    return {
      Tweet: {
        id: -1,
        description: "",
        name: "",
        account: "",
        createdAt: "",
        avatar: "",
        likes: [],
        replies: [],
        isLike: false,
      },
      tweetReplies: [],
    };
  },

  created() {
    const { id } = this.$route.params;
    this.fetchTweet(id);
    this.fetchReplies(id);
    console.log(id);
  },

  methods: {
    async fetchTweet(tweetId) {
      console.log(tweetId);
      try {
        const response = await tweetAPI.tweet.get({ tweetId });
        console.log(response);
        const { data } = response;
        this.Tweet = {
          id: data.id,
          description: data.description,
          name: data.User.name,
          accoun: data.User.account,
          createdAt: data.createdAt,
          avatar: data.User.avatar,
          likes: data.Likes.length,
          replies: data.Replies.length,
          isLike: false,
        };
      } catch (error) {
        console.log("error", error);
      }
    },

    async fetchReplies(tweetId) {
      try {
        const { ...responst } = await tweetAPI.tweet.getReplies({ tweetId });
        console.log(responst);
        const { data } = responst;
        this.tweetReplies = data;
      } catch (error) {
        console.log("error", error);
      }
    },
    afterCreateComment(payload) {
      console.log("ok");
      const { text, id } = payload;
      this.tweetReplies.push({
        text: text,
        id: tweetId,
        User: {
          id: this.currentUser.id,
          name: this.currentUser.name,
          createdAt: new Date(),
        },
      });
    },
  },
};
</script>
<style scoped>
.repliedContent {
  margin-top: -700px;
  margin-left: -60px;
}
</style>
  



