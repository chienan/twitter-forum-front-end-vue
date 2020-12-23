<template>
  <div class="d-flex">
    <div>
      <NavBar />
    </div>

    <div class="main-content">
      <UserProfileNav :user="user" :tweets="tweets" :tweetsLength="tweetsLength" />
      <UserProfileDetail :user="user" />
      <!-- UserProfileNavTabs  -->
      <div class="user-profile-navtabs">
        <a href class="tab-tweets">推文</a>
        <a href="/#/users/replied" class="tab-replies">推文與回覆</a>
        <a href="/#/users/liked" class="tab-liked">喜歡的內容</a>
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
                <a href class="user-name">{{user.name}}</a>

                <a href class="user-account">@{{user.account}}</a>

                <div class="time">・{{tweet.createdAt | fromNow}}</div>
              </div>
              <a href class="item-content">{{tweet.description}}</a>
              <div class="item-interaction">
                <a href class="tweet-reply">
                  <img src="https://i.imgur.com/I3DHrNy.png" id="icon-reply" alt />
                  <p class="reply-count">{{tweet.Replies.length}}</p>
                </a>

                <a href class="tweet-like">
                  <img src="https://i.imgur.com/gCFSWst.png" id="icon-like" alt />
                  <p class="like-count">76</p>
                </a>
              </div>
            </div>
          </div>
          <!-- tweet-item-test -->

          <!-- tweet-item-test-end -->
        </div>
      </div>
    </div>

    <div>
      <FollowRecommend />
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

export default {
  components: {
    NavBar,
    UserProfileNav,
    FollowRecommend,
    UserProfileDetail
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
      tweetsLength: ""
    };
  },
  created() {
    const { id: userId } = this.$route.params;
    this.fetchUser(userId);
    this.fetchUserTweets(userId);
  },

  methods: {
    async fetchUser(userId) {
      try {
        const response = await usersAPI.getUsers({ userId });
        console.log("response", response);

        const user = response.data;
        this.user = user;
      } catch (error) {
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
        console.log("response", response);
        console.log(response.data.length);
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

#icon-like {
  height: 11.82px;
  width: 12.56px;
  margin-right: 11.35px;
}
</style>