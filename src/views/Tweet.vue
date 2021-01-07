<template>
  <div>
    <div>
      <!--NavBar-->
      <NavBar />
    </div>

    <div>
      <!-- TweetsDetail -->
      <Spinner v-if="isLoading" />

      <TweetsDetail
        v-else
        :initialTweet="Tweet"
        :tweetReplies="tweetReplies"
        @after-create-comment="afterCreateComment"
      />
    </div>

    <div>
      <!-- FollowRecommend -->
      <FollowRecommend :initial-tops="topTenUsers" />
    </div>

    <div class="repliedContent" style="display: none">
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
import usersAPI from "../apis/users";
import tweetAPI from "../apis/tweet.js";
import { Toast } from "../utils/helpers";
import Spinner from "../components/Spinner";

export default {
  components: {
    TweetsDetail,
    RepliedContent,
    NavBar,
    FollowRecommend,
    Spinner
  },
  computed: {
    ...mapState(["currentUser"])
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
        isLike: false
      },
      tweetReplies: [],
      topTenUsers: [],
      isLoading: true
    };
  },
  created() {
    const { id } = this.$route.params;
    this.fetchTweet(id);
    this.fetchReplies(id);
    this.fetchTopTenUsers();

    // console.log(id);
  },
  methods: {
    async fetchTweet(tweetId) {
      // console.log(tweetId);
      try {
        const response = await tweetAPI.tweet.get({ tweetId });
        console.log(response);
        const { data } = response;
        this.Tweet = {
          id: data.id,
          description: data.description,
          name: data.User.name,
          account: data.User.account,
          createdAt: data.createdAt,
          avatar: data.User.avatar,
          likes: data.Likes.length,
          replies: data.Replies.length,
          isLike: false
        };
        this.isLoading = false;
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
    },
    afterCreateComment(payload) {
      console.log(payload);
      // console.log(tweetId);
      const { text, account, createdAt } = payload;
      console.log(text, account, createdAt);
      this.tweetReplies.push({
        comment: text,
        createdAt: new Date(),
        User: {
          id: this.currentUser.id,
          name: this.currentUser.name,
          // account: this.currentUser.account,
          account: account,
          avatar: this.currentUser.avatar,
          createdAt: createdAt
        }
      });
    }
  }
};
</script>
<style scoped>
.repliedContent {
  margin-top: -700px;
  margin-left: 800px;
}
/* -60px */
</style>
  

