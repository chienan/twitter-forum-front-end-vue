<template>
  <div class="d-flex">
    <div>
      <NavBar />
    </div>
    <Spinner v-if="isLoading" />
    <div v-else class="main-content">
      <UserProfileNav :user="user" :tweets="tweets" :tweetsLength="tweetsLength" />

      <UserProfileDetail
        :initial-user="user"
        @after-add-follow="afterAddFollow"
        @after-delete-follow="afterDeleteFollow"
      />
      <!-- UserProfileNavTabs  -->
      <div class="user-profile-navtabs">
        <div class="tab-tweets">推文</div>
        <router-link
          :to="{name: 'users-replied-tweets',  params: {id: user.id}}"
          class="tab-replies"
        >推文與回覆</router-link>
        <router-link :to="{name: 'users-likes',  params: {id: user.id}}" class="tab-liked">喜歡的內容</router-link>
      </div>

      <!--  UserProfileTweets  -->
      <div class="tweets-container">
        <div class="tweet-list">
          <div class="tweet-item" v-for="tweet in tweets" :key="tweet.id">
            <div class="item-left">
              <img :src="user.avatar" class="circle" alt />
            </div>

            <div class="item-right">
              <div class="item-user-info d-flex">
                <div class="user-name">{{user.name}}</div>

                <div class="user-account">@{{user.account}}</div>

                <div class="time">・{{tweet.createdAt | fromNow}}</div>
              </div>
              <div class="item-content">{{tweet.description}}</div>
              <div class="item-interaction">
                <div class="tweet-reply">
                  <img src="https://i.imgur.com/I3DHrNy.png" id="icon-reply" alt />
                  <p class="reply-count">{{tweet.Replies.length}}</p>
                </div>

                <div class="tweet-like">
                  <div class="like-container">
                    <img
                      v-if="!tweet.isLiked"
                      src="https://i.imgur.com/gCFSWst.png"
                      id="icon-like"
                      @click.stop.prevent="addLike(tweet.id)"
                      alt
                    />
                    <img
                      v-else
                      src="https://i.imgur.com/7Mp1UdA.png"
                      id="icon-unlike"
                      @click.stop.prevent="deleteLike(tweet.id)"
                      alt
                    />
                  </div>
                  <p class="like-count">{{tweet.likeCount}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div>
      <FollowRecommend :initial-tops="topTenUsers" />
    </div>
  </div>
</template>

<script>
import NavBar from "../components/NavBar";
import FollowRecommend from "../components/FollowRecommend";
import UserProfileNav from "../components/UserProfileNav";
import UserProfileDetail from "../components/UserProfileDetail";
import usersAPI from "../apis/users";
import { Toast } from "../utils/helpers";
import moment from "moment";
import Spinner from "../components/Spinner";

export default {
  components: {
    NavBar,
    UserProfileNav,
    FollowRecommend,
    UserProfileDetail,
    Spinner
  },
  filters: {
    fromNow(datetime) {
      if (!datetime) {
        return "-";
      }
      return moment(datetime).fromNow();
    }
  },
  data() {
    return {
      user: {},
      tweets: {},
      tweetsLength: "",
      isLoading: true,
      topTenUsers: [],
      isFollowed: true
    };
  },
  created() {
    const { id: userId } = this.$route.params;
    this.fetchUser(userId);
    this.fetchUserTweets(userId);
    this.fetchTopTenUsers();
  },
  beforeRouteUpdate(to, from, next) {
    const { id: userId } = to.params;
    this.fetchUser(userId);
    next();
  },

  methods: {
    async fetchUser(userId) {
      try {
        const response = await usersAPI.getUsers({ userId });
        const user = response.data;
        this.user = user;
        this.isLoading = false;
      } catch (error) {
        this.isLoading = false;
        console.log("error", error);
        Toast.fire({
          icon: "error",
          title: "無法取得使用者資料"
        });
      }
    },
    async fetchUserTweets(userId) {
      try {
        const response = await usersAPI.getUsersTweets({ userId });

        const tweets = response.data;
        const tweetsLength = response.data.length;
        this.tweets = tweets;
        this.tweetsLength = tweetsLength;
      } catch (error) {
        console.log("error", error);
        Toast.fire({
          icon: "error",
          title: "無法取得使用者資料"
        });
      }
    },
    async addLike(tweetId) {
      try {
        const { data } = await usersAPI.addLike({ tweetId });
        if (data.status !== "success") {
          throw new Error(data.message);
        }

        this.tweets = this.tweets.map(tweet => {
          if (tweet.id === tweetId) {
            (tweet.isLiked = true), tweet.likeCount++;
            return tweet;
          } else {
            return tweet;
          }
        });

        Toast.fire({
          icon: "success",
          title: "like tweet"
        });
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "您已經like這條tweet"
        });
        console.log("error", error);
      }
    },
    async deleteLike(tweetId) {
      try {
        const { data } = await usersAPI.deleteLike({ tweetId });
        if (data.status === "error") {
          throw new Error(data.message);
        }
        this.tweets = this.tweets.map(tweet => {
          if (tweet.id === tweetId) {
            (tweet.isLiked = false), tweet.likeCount--;
            return tweet;
          } else {
            return tweet;
          }
        });
        Toast.fire({
          icon: "success",
          title: "unlike tweet"
        });
      } catch (error) {
        console.error(error.message);
        Toast.fire({
          icon: "error",
          title: "您沒有like這條tweet"
        });
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
    afterAddFollow() {
      this.isFollowed = true;
    },
    afterDeleteFollow() {
      this.isFollowed = false;
    }
  },
  watch: {
    user() {
      // const { id: userId } = this.$route.params;
      this.fetchTopTenUsers();
      // this.fetchUser(userId);
    },
    isFollowed() {
      this.fetchTopTenUsers();
    }
  }
};
</script>


<style scoped>
/* CSS reset  */
body {
  margin: 0;
  padding: 0;
  display: block;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0px;
  padding: 0px;
}
/* user-profile-nav */
.nav-section {
  height: 55px;
  width: 600px;
  position: absolute;
  left: 315px;
  background: #ffffff;
  border: 1px solid #e6ecf0;
  border-bottom: none;
}

.nav-icon-container {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px 19px 21px 19px;
}

.nav-icon-back {
  width: 17px;
  height: 14px;
}

.nav-title {
  height: 100%;

  margin: 9px auto 5px 19px;
}

.nav-user-name {
  font-weight: 700;
  font-size: 19px;
  line-height: 18px;
  color: #1c1c1c;
}

.nav-tweets-count {
  font-weight: 400;
  font-size: 13px;
  line-height: 19px;
  letter-spacing: 0.5px;
  color: #657786;
}

/*  user-profile-navtabs  */
.user-profile-navtabs {
  height: 40px;
  width: 600px;
  position: absolute;
  top: 455px;
  left: 300px;
  background: #ffffff;
  border-left: 1px solid #e6ecf0;
  border-right: 1px solid #e6ecf0;
  display: flex;
  justify-content: start;
  border-bottom: 1px solid #e6ecf0;
}

.tab-tweets,
.tab-replies,
.tab-liked {
  width: 140px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 15px;
  line-height: 22px;
  color: #657786;
  border-bottom: 1px solid #ffffff;
  padding-bottom: 10px;
}

.tab-tweets {
  border-bottom: 2px solid #ff6600;
}

.tweets-container {
  width: 600px;
  position: absolute;
  top: 495px;
  left: 300px;
  background: #ffffff;
  display: flex;
}

.user-image {
  height: 100%;
  width: 10%;
}

.circle {
  background: #c4c4c4;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin: 9px 10px auto 15px;
}

.tweet-item {
  width: 600px;
  border: 1px solid #e6ecf0;
  background: #ffffff;
  border-top: none;
  display: flex;
  flex-direction: row;
  padding: 2px 0px;
}

.item-user-info {
  margin: 5px auto 0px auto;
}

.user-name {
  font-weight: bold;
  font-size: 15px;
  line-height: 22px;
  color: #1c1c1c;
  order: 0;
  flex-grow: 0;
  margin: 5px 5px 5px 0px;
}

.user-account,
.time {
  font-weight: 400;
  font-size: 15px;
  line-height: 22px;
  color: #657786;
  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 5px 0px;
}

.item-content {
  padding-right: 10px;
  font-weight: 400;
  font-size: 15px;
  line-height: 22px;
  color: #1c1c1c;
  text-align: left;
  text-justify: inter-ideograph;
}

.item-interaction {
  position: relative;
  height: 30px;
}

.item-interaction,
.tweet-reply,
.tweet-like {
  display: flex;
  vertical-align: middle;
}

.tweet-reply,
.tweet-like {
  position: absolute;
  bottom: 7px;
  font-weight: 400;
  font-size: 13px;
  line-height: 13px;
  color: #657786;
}

.tweet-reply {
  width: 20%;
}

.tweet-like {
  width: 80%;
  left: 90px;
}

#icon-reply {
  width: 12.34px;
  height: 12.34px;
  margin-right: 11.35px;
}

.like-count {
  position: absolute;
  left: 30px;
  bottom: 0px;
}

#icon-like {
  height: 11.82px;
  width: 12.56px;
  margin-right: 11.35px;
}

#icon-unlike {
  position: absolute;
  left: -4px;
  bottom: -2px;
  height: 19px;
  width: 20px;
  /* margin-right: -1px; */
  /* margin-left: -10;
  margin-bottom: -1px; */
}

#icon-like,
#icon-unlike:hover {
  cursor: pointer;
}
</style>