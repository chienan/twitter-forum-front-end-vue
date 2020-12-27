<template>
  <div class="d-flex justify-content-center">
    <ul class="list-group rounded-0" style="width: 600px" id="tweets-detail">
      <li class="list-group-item" style="height: 55px; border-top: none">
        <div class="d-flex flex-row">
          <div>
            <img
              class="mt-1"
              src="https://i.postimg.cc/4N8M37VK/Vector-1.png"
              alt=""
            />
          </div>
          <div>
            <p class="bold ml-5 mt-1" style="font-size: 18px">推文</p>
          </div>
        </div>
      </li>

      <!-- style="border-bottom: none" -->
      <li class="list-group-item" style="border-bottom: none">
        <div class="d-flex flex-row">
          <div>
            <img :src="Tweet.avatar" alt="" class="Photo" />
          </div>
          <div class="ml-2">
            <p class="bold">{{ Tweet.name }}</p>
            <p class="color-gray apple">@{{ initialTweet.account }}</p>
          </div>
        </div>

        <div class="text bold">
          {{ Tweet.description }}
        </div>
        <p class="color-gray time">{{ Tweet.createdAt | fromNow }}</p>
        <hr />
      </li>

      <li
        class="list-group-item count-relative"
        style="height: 50px; border-bottom: none"
      >
        <div class="d-flex flex-row count">
          <div class="mr-3">
            <span class="bold">{{ Tweet.replies }}</span
            ><span class="color-gray bold"> 回覆</span>
          </div>
          <div>
            <span class="bold">{{ Tweet.likes }}</span
            ><span class="color-gray bold"> 喜歡次數</span>
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
                  src="https://i.postimg.cc/ZqS9w3RK/Vector-3.png"
                  alt=""
                  class="replied-icon"
                />
              </div>
            </label>
            <div>
              <b-modal id="modal-1" title="回覆表單" hide-footer>
                <!-- <div class="card-header">
                  <img src="https://i.postimg.cc/pdc5H7Qh/Vector.png" alt="X" />
                </div> -->
                <div class="my-4">
                  <div class="card-body d-flex flex-row">
                    <div>
                      <div class="d-flex flex-row">
                        <div class="Photo1">
                          <img
                            :src="initialTweet.avatar"
                            alt=""
                            class="style2"
                          />
                        </div>

                        <div class="replied-relative">
                          <div class="d-flex flex-row">
                            <h5 class="card-title mr-2 bold">
                              {{ initialTweet.name }}
                            </h5>
                            <p style="color: #657786">
                              @{{ initialTweet.account }}・{{
                                initialTweet.createdAt | fromNow
                              }}
                            </p>
                          </div>
                          <p class="card-text">
                            {{ initialTweet.description }}
                          </p>
                          <small class="replied"
                            ><span style="color: #657786; font-weight: bold"
                              >回覆給</span
                            ><span style="color: #ff6600">
                              @{{ initialTweet.account }}</span
                            ></small
                          >
                        </div>
                      </div>
                      <div class="divider">
                        <img
                          src="https://i.postimg.cc/L6HStVZh/divider.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <!-- </div> -->
                  </div>
                  <!-- card-body -->

                  <div>
                    <div class="d-flex flex-row" id="thumbnail">
                      <div class="currentUser">
                        <img :src="currentUser.avatar" alt="" class="style2" />
                      </div>
                      <div class="push-relative">
                        <span class="push">推你的回覆</span>
                      </div>
                    </div>
                    <div>
                      <form @submit.stop.prevent="tweet(initialTweet.id)">
                        <input
                          type="text"
                          v-model="text"
                          style="
                            width: 380px;
                            height: 140px;
                            border: none;
                            outline: none;
                          "
                        />

                        <div>
                          <div class="button-relative">
                            <b-button
                              class="mt-3 button1"
                              @click="$bvModal.hide('bv-modal-example')"
                              style="width: 80px; height: 40px"
                              type="submit"
                              >回覆
                            </b-button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <!-- p class="my-4" -->
              </b-modal>
            </div>

            <!-- Modal -->

            <div class="heart-icon-relative">
              <img
                src="https://i.postimg.cc/26P3BBPD/Vector.png"
                alt=""
                class="heart-icon"
              />
            </div>
          </div>
        </div>
      </li>

      <li
        class="list-group-item d-flex flex-row list"
        v-for="tweetReplie in tweetReplies"
        :key="tweetReplie.id"
      >
        <div>
          <img :src="tweetReplie.User.avatar" alt="" class="mt-1 avatar" />
        </div>
        <div class="ml-2" style="line-height: 27px">
          <span class="bold mr-2">{{ tweetReplie.User.name }}</span>
          <span class="color-gray"
            >@{{ tweetReplie.User.account }}・{{
              tweetReplie.createdAt | fromNow
            }}</span
          >
          <div>
            <span class="color-gray bold"> 回覆 </span>
            <span style="color: #ff6600">@{{ initialTweet.account }}</span>
          </div>

          <p>{{ tweetReplie.comment }}</p>
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
      required: true,
    },
    tweetReplies: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      Tweet: this.initialTweet,
      // islike: this.initialTweet.isLike,
      // isModel: false,
      text: "",
    };
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  watch: {
    initialTweet(newValue) {
      this.Tweet = {
        ...this.Tweet,
        ...newValue,
      };
    },
  },
  methods: {
    async tweet(tweetId) {
      // console.log(tweetId);
      try {
        const data1 = {
          comment: this.text,
          TweetId: tweetId,
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
          createdAt: this.initialTweet.createdAt,
        });
        this.text = "";
        console.log("ok");
      } catch (error) {
        console.log("error", error);
        Toast.fire({
          icon: "error",
          title: "目前無法編輯帳戶，請稍後再試",
        });
      }
    },
  },
};
</script>

<style scoped>
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
.avatar {
  height: 50px;
  width: 50px;
  border-radius: 50%;
}

.heart-icon-relative {
  position: relative;
}

.heart-icon {
  position: absolute;
  left: 150px;
  top: -33px;
}

.Photo {
  margin-left: -6px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.text {
  margin-left: -3px;
  margin-top: -8px;
  margin-bottom: 10px;
}
.time {
  margin-left: -3px;
  font-size: 15px;
}
/* .card-text { */
/* position: relative; */
/* border: 1px solid black; */
/* max-height: 1000px;
} */
hr {
  margin-left: -3px;
  background-color: #e6ecf0;
  height: 1px;
  border: none;
}
/* .push-relative {
  position: relative;
} */
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
  margin-right: 130px;
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
  margin-top: -45px;
  margin-left: 0px;
}
.style2 {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.replied-relative {
  /* position: relative; */
  margin-left: 20px;
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
  /* margin-bottom: -100px;
  margin-right: 10px; */
  position: absolute;
  right: 10px;
  bottom: -15px;
  background-color: #ff6600;
}
.button1:hover {
  background-color: #ff6600;
}
</style>