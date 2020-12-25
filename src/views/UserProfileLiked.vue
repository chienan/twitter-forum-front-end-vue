<template>
  <div class="d-flex">
    <div>
      <NavBar />
    </div>
    <Spinner v-if="isLoading" />
    <div v-else class="main-content">
      <UserProfileNav :user="user" :tweetsLength="tweetsLength" />
      <UserProfileDetail :user="user" />
      <!-- UserProfileNavTabs  -->
      <div class="user-profile-navtabs">
        <router-link :to="{name: 'user',  params: {id: user.id}}" class="tab-tweets">推文</router-link>
        <router-link
          :to="{name: 'users-replied-tweets',  params: {id: user.id}}"
          class="tab-replies"
        >推文與回覆</router-link>
        <div class="tab-liked">喜歡的內容</div>
      </div>

      <!--  UserProfileTweets  -->
      <div class="tweets-container">
        <!-- tweet-list -->
        <div class="tweet-list">
          <!--tweet item start-->
          <div v-for="tweet in tweets" :key="tweet.id" class="tweet-item">
            <a href class="item-left">
              <div class="circle"></div>
            </a>

            <div class="item-right">
              <div class="item-user-info d-flex">
                <!-- UserName -->
                <a href class="user-name">name</a>

                <!-- UserId -->
                <a href class="user-account">@account</a>

                <!-- time -->
                <div class="time">・{{tweet.createdAt | fromNow}}</div>
              </div>

              <!-- description -->
              <a href class="item-content">{{tweet.description}}</a>
              <div class="item-interaction">
                <!--reply-->
                <a href class="tweet-reply">
                  <img src="https://i.imgur.com/I3DHrNy.png" id="icon-reply" alt />
                  <p class="reply-count">13</p>
                </a>

                <!-- like -->
                <a href class="tweet-like">
                  <img src="https://i.imgur.com/gCFSWst.png" id="icon-like" alt />
                  <p class="like-count">{{tweet.Likes.length}}</p>
                </a>
              </div>
            </div>
          </div>
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
import Spinner from "../components/Spinner";

export default {
  components: {
    NavBar,
    FollowRecommend,
    UserProfileNav,
    UserProfileDetail,
    Spinner
  },
  data() {
    return {
      user: {},
      tweets: {},
      tweetsLength: "",
      isLoading: true
    };
  },
  filters: {
    fromNow(datetime) {
      if (!datetime) {
        return "-";
      }
      return moment(datetime).fromNow();
    }
  },
  created() {
    const { id: userId } = this.$route.params;
    this.fetchUser(userId);
    this.fetchUserLiked(userId);
    this.fetchUserTweetsLength(userId);
  },
  methods: {
    async fetchUser(userId) {
      try {
        const response = await usersAPI.getUsers({ userId });
        console.log("response", response);

        const user = response.data;
        this.user = user;
        this.isLoading = false;
      } catch (error) {
        console.log("error", error);
        this.isLoading = false;

        Toast.fire({
          icon: "error",
          title: "無法取得使用者資料"
        });
      }
    },
    async fetchUserLiked(userId) {
      try {
        const response = await usersAPI.getUsersLikes({ userId });
        console.log("response", response);

        const tweets = response.data;
        this.tweets = tweets;
      } catch (error) {
        console.log("error", error);
        Toast.fire({
          icon: "error",
          title: "無法取得使用者like資料，請稍後再試"
        });
      }
    },
    async fetchUserTweetsLength(userId) {
      try {
        const response = await usersAPI.getUsersTweets({ userId });

        console.log(response.data.length);
        const tweetsLength = response.data.length;
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

.tab-liked {
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