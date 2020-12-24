<template>
  <div class="container">
    <div class="main-content">
      <div class="main-header">
        <div class="header-title">首頁</div>
      </div>
      <!-- tweet-input -->
      <div class="tweet-input">
        <div class="input-content">
          <div class="input-content-top">
            <!--current-user-image-->
            <div class="user-image">
              <img :src="currentUser.avatar" height="50px" width="50px" class="user-avatar" />
            </div>
            <div class="user-input">有什麼新鮮事？</div>
          </div>
          <div class="input-content-bottom">
            <button class="btn-tweet">推文</button>
          </div>
        </div>
      </div>
      <!-- tweet-list -->
      <div class="tweet-list">
        <!--tweet item start-->

        <div class="tweet-item" v-for="tweet in tweets" :key="tweet.id">
          <router-link :to="{ name: 'user', params:{id: tweet.UserId}}" class="item-left"></router-link>

          <img :src="tweet.User.avatar" width="50" height="50" class="user-avatar" />

          <div class="item-right">
            <div class="item-user-info d-flex">
              <router-link
                :to="{ name: 'tweet', params: { id: tweet.id } }"
                class="user-name"
              >{{ tweet.User.name }}</router-link>

              <a href class="user-account">@{{tweet.User.account}}</a>

              <div class="time">・{{ tweet.createdAt | fromNow }}</div>
            </div>
            <router-link
              :to="{ name: 'tweet', params: { id: tweet.id } }"
              class="item-content"
            >{{ tweet.description }}</router-link>
            <div class="item-interaction">
              <a href class="tweet-reply">
                <img src="https://i.imgur.com/I3DHrNy.png" id="icon-reply" alt />
                <p>{{tweet.Replies.length}}</p>
              </a>

              <div class="tweet-like">
                <div class="unlike-container">
                  <img
                    src="https://i.imgur.com/7Mp1UdA.png"
                    id="icon-unlike"
                    @click.stop.prevent="deleteLike(tweet.id)"
                    alt
                  />
                </div>
                <div class="like-container">
                  <img
                    src="https://i.imgur.com/gCFSWst.png"
                    id="icon-like"
                    @click.stop.prevent="addLike(tweet.id)"
                    alt
                  />
                </div>

                <p>5</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import { mapState } from "vuex";
import { Toast } from "../utils/helpers";
import usersAPI from "../apis/users";
// let isLiked = false;

export default {
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
      // isLiked: ""
    };
  },
  props: {
    tweets: {
      type: Object,

      required: true
    }
  },
  computed: {
    ...mapState(["currentUser", "isAuthenticated"])
  },
  methods: {
    async addLike(tweetId) {
      try {
        const { data } = await usersAPI.addLike({ tweetId });

        if (data.status !== "success") {
          throw new Error(data.message);
        }

        this.tweet = {
          ...this.tweet
          // isLiked = true
        };

        console.log(this.tweet);
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法like，請稍後再試"
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
        this.tweet = {
          ...this.tweet
        };

        this.tweet.isLiked = false;
        console.log(this.tweet);
      } catch (error) {
        console.error(error.message);
        Toast.fire({
          icon: "error",
          title: "無法取消按讚，請稍後再試"
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

/* style start */
.container {
  position: relative;
}

.main-content {
  height: 100%;
  width: 600px;
  position: absolute;
  left: 300px;
}

.main-header {
  width: 600px;
  height: 55px;
  background: #ffffff;
  border: 1px solid #e6ecf0;
  border-bottom: none;
  box-sizing: border-box;
}

.header-title {
  height: 100%;
  margin: 15px 15px 15px;
  font-weight: 550;
  font-size: 18px;
  line-height: 26px;
  color: #1c1c1c;
}

.tweet-input {
  width: 600px;
  height: 120px;
  background: #ffffff;
  border: 1px solid #e6ecf0;
  border-bottom: 10px solid #e6ecf0;
  box-sizing: border-box;
}

.input-content {
  /* border: 1px solid gray; */
  box-sizing: border-box;
  height: 100%;
}

.input-content-top {
  height: 50%;
  display: flex;
}

.user-image {
  height: 100%;
  width: 10%;
  /* border: 1px solid gray; */
}

.circle {
  border-radius: 50%;
}

.user-avatar {
  border-radius: 50%;
  margin: 9px 10px auto 15px;
}

.user-input {
  height: 100%;
  width: 90%;
  /* border: 1px solid gray; */
  padding: 20px 15px 10px;
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  color: #9197a3;
  letter-spacing: 0.5px;
}

.input-content-bottom {
  position: relative;
  height: 50%;
  /* border: 1px solid gray; */
}

.btn-tweet {
  position: absolute;
  right: 15px;
  bottom: 10px;
  width: 64px;
  height: 40px;
  background: #ff6600;
  border-radius: 100px;
  font-weight: 500;
  font-size: 18px;
  line-height: 18px;
  color: #ffffff;
}

.tweet-item {
  border: 1px solid #e6ecf0;
  background: #ffffff;
  border-top: none;
  display: flex;
  flex-direction: row;
}

.item-right {
  padding-right: 25px;
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
  /* margin: 14px 0px; */
  position: relative;
  height: 40px;
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
  bottom: 14px;
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

#icon-unlike {
  height: 19px;
  width: 20px;
  margin-right: 11.35px;
}
</style>
