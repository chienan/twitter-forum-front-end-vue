<template>
  <div class="container">
    <ul class="list-group rounded-0" id="tweets-detail">
      <li class="list-group-item" style="height: 55px; border-top: none">
        <div class="d-flex flex-row">
          <div>
            <img
              class="icon-back"
              src="https://i.imgur.com/cyFMsT7.png"
              @click="$router.go(-1)"
              alt
            />
          </div>
          <div>
            <p class="bold mt-1" style="font-size: 18px">推文</p>
          </div>
        </div>
      </li>

      <!-- style="border-bottom: none" -->
      <li class="list-group-item" style="border-bottom: none">
        <div class="d-flex flex-row">
          <div>
            <img :src="Tweet.avatar" alt class="Photo" />
          </div>
          <div class="ml-2">
            <p class="bold">{{ Tweet.name }}</p>
            <p class="color-gray apple user-account">@{{ initialTweet.account }}</p>
          </div>
        </div>

        <div class="description-section">{{ Tweet.description }}</div>
        <p class="color-gray time">{{ Tweet.createdAt | fromNow }}</p>
        <hr />
      </li>

      <li class="list-group-item count-relative" style="height: 50px; border-bottom: none">
        <div class="d-flex flex-row count">
          <div class="mr-3">
            <span class="tweet-replies">{{ Tweet.replies }}</span>
            <span class="replies color-gray">回覆</span>
          </div>
          <div>
            <span class="tweet-likes">{{ Tweet.likes }}</span>
            <span class="likes color-gray">喜歡次數</span>
          </div>
        </div>
      </li>

      <li class="list-group-item line-relative" style="height: 50px">
        <p class="line"></p>
        <div class="d-flex flex-row">
          <div>
            <b-button v-b-modal.modal-1 class="button2">
              <input type="checkbox" id="replied" style="display: none" />
            </b-button>
            <label for="replied">
              <div>
                <img
                  src="https://i.imgur.com/ncDfH3P.png"
                  alt
                  class="replied-icon"
                  @click="openModal"
                />
              </div>
            </label>
            <!--  Modal start  -->
            <div>
              <b-modal id="modal-1" class="reply-modal" title hide-footer>
                <!-- <div class="card-header">
                  <img src="https://i.postimg.cc/pdc5H7Qh/Vector.png" alt="X" />
                </div>-->
                <div class="card-content-container">
                  <div class="card-body d-flex flex-row">
                    <div>
                      <div class="tweet-content d-flex flex-row">
                        <div class="Photo1">
                          <img :src="initialTweet.avatar" alt class="style2 tweet-user-avatar" />
                        </div>

                        <div class="replied-relative">
                          <div class="d-flex flex-row">
                            <h5 class="tweet-user-name card-title mr-2">{{ initialTweet.name }}</h5>
                            <p class="tweet-user-info" style="color: #657786">
                              @{{ initialTweet.account }}・{{
                              initialTweet.createdAt | fromNow
                              }}
                            </p>
                          </div>
                          <p class="card-text">{{ initialTweet.description }}</p>
                          <small class="replied">
                            <span class="reply-start mr-1" style="color: #657786;">回覆給</span>
                            <span
                              class="reply-account"
                              style="color: #ff6600"
                            >@{{ initialTweet.account }}</span>
                          </small>
                        </div>
                      </div>
                      <div class="divider">
                        <!-- <img src="https://i.postimg.cc/L6HStVZh/divider.png" alt /> -->
                      </div>
                    </div>
                    <!-- </div> -->
                  </div>
                  <!-- card-body -->

                  <div class="user-reply-container">
                    <div id="thumbnail">
                      <div class="currentUser">
                        <img :src="currentUser.avatar" alt class="style2 current-user-avatar" />
                      </div>
                    </div>
                    <div>
                      <form @submit.stop.prevent="tweet(initialTweet.id)">
                        <textarea
                          type="text"
                          v-model="text"
                          ref="replyArea"
                          placeholder="推你的回覆"
                          class="reply-textarea"
                          required="required"
                        />

                        <div>
                          <div class="button-relative">
                            <b-button
                              class="button1"
                              @click="$bvModal.hide('modal-1')"
                              type="submit"
                            >回覆</b-button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <!-- p class="my-4" -->
              </b-modal>
            </div>

            <!-- Modal end -->

            <div class="heart-icon-relative">
              <img src="https://i.imgur.com/PNWIJak.png" alt class="heart-icon" />
            </div>
          </div>
        </div>
      </li>

      <div v-if="tweetReplies.length === 0" class="no-replies-container">尚無回覆</div>
      <li
        v-else
        class="list-group-item d-flex flex-row list"
        v-for="tweetReplie in tweetReplies"
        :key="tweetReplie.id"
      >
        <div>
          <img :src="tweetReplie.User.avatar" alt class="avatar" />
        </div>
        <div class="ml-2" style="line-height: 27px">
          <span class="bold mr-2">{{ tweetReplie.User.name }}</span>
          <span class="color-gray">
            @{{ tweetReplie.User.account }}・{{
            tweetReplie.createdAt | fromNow
            }}
          </span>
          <div>
            <span class="color-gray mr-1">回覆</span>
            <span style="color: #ff6600">@{{ initialTweet.account }}</span>
          </div>

          <p class="reply-comment">{{ tweetReplie.comment }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { fromNowFilter } from "../utils/mixins.js";
import { mapState } from "vuex";
import tweetAPI from "../apis/tweet.js";
import { Toast } from "../utils/helpers.js";

export default {
  mixins: [fromNowFilter],
  props: {
    initialTweet: {
      type: Object,
      required: true
    },
    tweetReplies: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      Tweet: this.initialTweet,
      // islike: this.initialTweet.isLike,
      // isModel: false,
      text: "",
      isLoading: true,
      modal: false
    };
  },
  computed: {
    ...mapState(["currentUser"])
  },
  watch: {
    initialTweet(newValue) {
      this.Tweet = {
        ...this.Tweet,
        ...newValue
      };
    }
  },
  methods: {
    async tweet(tweetId) {
      // console.log(tweetId);
      try {
        const data1 = {
          comment: this.text,
          TweetId: tweetId
        };

        console.log(tweetId);
        const response = await tweetAPI.tweet.post({ tweetId, data1 });
        console.log(response);
        const { data } = response;
        if (data.status !== "success") {
          throw new Error(data.status);
        }
        this.$emit("after-create-comment", {
          text: this.text,
          // id:tweetId,
          account: this.initialTweet.account,
          createdAt: this.initialTweet.createdAt
        });
        this.text = "";
        console.log("ok");
      } catch (error) {
        console.log("error", error);
        Toast.fire({
          icon: "error",
          title: "目前無法編輯帳戶，請稍後再試"
        });
      }
    },
    openModal() {
      (this.modal = true),
        setTimeout(() => {
          this.$refs.replyArea.focus();
        });
    }
  }
};
</script>

<style scoped>
.container {
  position: relative;
}

.list-group {
  position: absolute;
  top: -15px;
  left: 235px;
  width: 600px;
  /* border: 1px solid black; */
}

.no-replies-container {
  height: 310px;
  border: 1px solid #e6ecf0;
  border-top: none;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #e6ecf0;
}

.icon-back {
  width: 17px;
  height: 14px;
  margin-top: 10px;
  margin-right: 36px;
  cursor: pointer;
}

.list-group-item {
  border-color: #e6ecf0;
}
.bold {
  font-weight: bold;
}
.color-gray {
  color: #657786;
}
.mt-10 {
  margin-top: -5px;
}
.apple {
  margin-top: -17px;
}

.user-account {
  font-size: 15px;
  line-height: 22px;
}

.avatar {
  margin: 5px 2px 0px -7px;
  height: 50px;
  width: 50px;
  border-radius: 50%;
}
.heart-icon-relative {
  position: relative;
}
.heart-icon {
  width: 25.12px;
  height: 23.64px;
  position: absolute;
  left: 140px;
  top: -20px;
  /* top: -36px; */
}
.Photo {
  margin-left: -6px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

.description-section {
  display: flex;
  align-items: center;
  width: 500px;
  /* max-width: 500px; */
  min-height: 100px;
  /* border: 1px solid gray; */
  font-weight: 450px;
  font-size: 20px;
  line-height: 34px;
  word-break: break-all;
  word-wrap: break-word;
}

.time {
  margin-top: 15px;
  margin-left: -3px;
  font-size: 15px;
}

.card-text {
  min-height: 50px;
  min-width: 350px;
  max-width: 150px;
  word-break: break-all;
  word-wrap: break-word;
}

hr {
  margin-left: -3px;
  background-color: #e6ecf0;
  height: 1px;
  border: none;
}

.push {
  /* position: absolute; */
  /* top: 14px;
  left: 60px; */
  margin-top: 250px;
  color: #9197a3;
  font-size: 18px;
}
.tset {
  padding-top: -60px;
}
.line {
  border-bottom: 1px solid #e6ecf0;
  margin-top: -25px;
  margin-left: -3px;
}
.count-relative {
  position: relative;
}
.count {
  position: absolute;
  top: -8px;
  font-size: 19px;
}
.replied-icon {
  height: 24.69px;
  width: 24.69px;
  position: absolute;
  left: 20px;
  bottom: 18px;
  cursor: pointer;
}

.replies,
.likes {
  margin-left: 3px;
}

.reply-comment {
  min-height: 40px;
  display: flex;
  align-items: center;
}

.card-body {
  margin-top: 2px;
}

.tweet-user-avatar {
  margin-top: 0px;
}

.tweet-user-name {
  font-weight: bold;
  font-size: 15px;
  line-height: 22px;
}

.tweet-user-info {
  font-size: 15px;
  line-height: 22px;
}

.list {
  padding-bottom: 0px;
}
#thumbnail {
  margin-top: -15px;
  margin-left: 0px;
  /* position: relative; */
}

.Photo1 {
  margin-left: -20px;
  margin-top: 3px;
}
.divider {
  /* display: flex;
  align-items: center;
  justify-content: center; */
  width: 2px;
  height: 80px;
  /* margin-bottom: -5px; */
  background: #ccd6dd;

  margin-top: -70px;
  margin-left: 3px;
}

.user-reply-container {
  display: flex;
}

.style2 {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.replied-relative {
  /* position: relative; */
  margin-left: 15px;
}

.reply-textarea {
  border: none;
  height: 130px;
  width: 400px;
  margin-left: 15px;
  margin-top: -7px;
  margin-bottom: 40px;
}

.button2 {
  border: none;
  /* border-outline: none; */
  background-color: transparent;
  z-index: -10;
  opacity: 0;
}
.button1:focus {
  /* outline: 0; */
  border-color: #ff6600;
  outline: none;
  box-shadow: none;
}
input {
  z-index: 999;
}
.button1:hover {
  background-color: #ff6600;
}
.button-relative {
  position: relative;
}
.button1:active {
  background-color: #ff6600;
}
.button1 {
  border-radius: 35px;
  position: absolute;
  right: -4px;
  bottom: -5px;
  background-color: #ff6600;
  border: none;
  width: 64px;
  height: 40px;
  border-radius: 100px;
}
.button1:hover {
  background-color: #ff6600;
}
</style>