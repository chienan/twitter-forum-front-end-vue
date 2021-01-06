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
            <div class="user-input" @click="openModal">有什麼新鮮事？</div>
          </div>
          <div class="input-content-bottom">
            <button class="btn-tweet" @click="openModal">推文</button>
          </div>
        </div>
      </div>

      <!-- tweet-list -->
      <div class="tweet-list">
        <!--tweet item start-->

        <div class="tweet-item" v-for="tweet in tweets" :key="tweet.id">
          <router-link :to="{ name: 'user', params:{id: tweet.UserId}}" class="item-left">
            <img :src="tweet.User.avatar" width="50" height="50" class="user-avatar" />
          </router-link>

          <div class="item-right">
            <div class="item-user-info d-flex">
              <router-link
                :to="{ name: 'user', params: { id: tweet.UserId } }"
                class="user-name"
              >{{ tweet.User.name }}</router-link>

              <router-link
                :to="{ name: 'user', params: { id: tweet.UserId } }"
                class="user-account"
              >@{{tweet.User.account}}</router-link>

              <div class="time">・{{ tweet.createdAt | fromNow }}</div>
            </div>
            <router-link
              :to="{ name: 'tweet', params: { id: tweet.id } }"
              class="item-content"
            >{{ tweet.description }}</router-link>
            <div class="item-interaction">
              <router-link :to="{ name: 'tweet', params: { id: tweet.id } }" class="tweet-reply">
                <img src="https://i.imgur.com/I3DHrNy.png" id="icon-reply" alt />
                <p>{{tweet.replyCount}}</p>
              </router-link>

              <div class="tweet-like">
                <div class="like-container">
                  <img
                    v-if="tweet.isLiked"
                    src="https://i.imgur.com/7Mp1UdA.png"
                    id="icon-unlike"
                    @click.stop.prevent="deleteLike(tweet.id)"
                    alt
                  />
                  <img
                    v-else
                    src="https://i.imgur.com/gCFSWst.png"
                    id="icon-like"
                    @click.stop.prevent="addLike(tweet.id)"
                    alt
                  />
                </div>
                <p class="like-count">{{tweet.likeCount}}</p>
                <!-- <div class="unlike-container">

                  <div class="btn-unlike" @click.stop.prevent="deleteLike(tweet.id)">unlike</div>
                </div>-->
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- tweet Modal start -->
      <div v-if="myModal">
        <transition name="modal">
          <div class="modal-mask">
            <div class="modal-wrapper">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <button type="button" class="close" @click="myModal=false">
                      <span area-hidden="true">&times;</span>
                    </button>
                  </div>
                  <form @submit.stop.prevent="handleSubmit">
                    <div class="modal-body">
                      <img
                        :src="currentUser.avatar"
                        height="50px"
                        width="50px"
                        class="user-avatar"
                        id="modal-avatar"
                      />
                      <textarea
                        ref="descriptionArea"
                        class="textarea-description"
                        name="description"
                        rows="2"
                        cols="40"
                        maxlength="140"
                        required
                        v-model="description"
                        placeholder="有什麼新鮮事？"
                      />

                      <span class="text-count">{{this.description.length}} / 140</span>
                      <button class="btn-tweet">推文</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
      <!-- tweet Modal end -->
    </div>
  </div>
</template>

<script>
import moment from "moment";
import { mapState } from "vuex";
import { Toast } from "../utils/helpers";
import usersAPI from "../apis/users";
import tweetsAPI from "../apis/tweets";
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
      tweets: this.initialTweets,
      myModal: false,
      description: ""
    };
  },
  props: {
    initialTweets: {
      type: Array,
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

        // this.tweets = this.tweets.map(tweet => {
        //   if (tweet.id !== tweetId) {
        //     return tweet;
        //   } else {
        //     return {
        //       ...tweet,
        //       isLiked: false
        //       // likeCount: newLikeCount
        //     };
        //   }
        // });
        console.log(this.tweet);
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
    openModal() {
      this.myModal = true;
      setTimeout(() => {
        this.$refs.descriptionArea.focus();
      });
    },
    async handleSubmit() {
      try {
        if (!this.description) {
          Toast.fire({
            icon: "warning",
            title: "您尚未填寫任何文字"
          });
          return;
        }
        const { data } = await tweetsAPI.create({
          // tweetId: data.tweetId,
          description: this.description
        });
        if (data.status === "error") {
          throw new Error(data.message);
        }

        this.tweets.unshift({
          // id: this.tweetId,
          description: this.description,
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

        this.$emit("after-create-tweet", {
          tweetId: data.tweetId,
          description: this.description
        });

        this.myModal = false;
        this.description = "";
      } catch (error) {
        console.error(error.message);
        Toast.fire({
          icon: "error",
          title: "無法新增tweet，請稍後再試"
        });
      }
    }
  }
  // watch: {
  //   tweets() {
  //     this.fetchTweets();
  //   },
  //   deep: true
  // }
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

.user-input:hover {
  cursor: pointer;
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
  margin-bottom: -1px;
}
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}
.modal-body {
  height: 245px;
  display: flex;
  vertical-align: text-top;
}
.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

#modal-avatar {
  margin-right: 20px;
}

.textarea-description {
  margin-top: 20px;
  height: 150px;
  width: 380px;
  border: none;
}

.text-count {
  position: absolute;
  font-size: 12px;
  right: 100px;
  bottom: 15px;
}

.like-count {
  position: absolute;
  left: 25px;
  bottom: 0px;
}

#icon-like,
#icon-unlike:hover {
  cursor: pointer;
}

#icon-unlike {
  position: absolute;
  left: -5px;
  bottom: -1px;
}

/* .btn-unlike {
  position: absolute;
  left: 90px;
  bottom: 0px;
  color: gray;
} */
</style>