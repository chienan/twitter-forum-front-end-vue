<template>
  <div class="replied-content d-flex justify-content-center">
    <div
      class="card border-dark mb-3"
      id="card2"
      style="width: 600px; height: 450px"
    >
      <div class="card-header">
        <img src="https://i.postimg.cc/pdc5H7Qh/Vector.png" alt="X" />
      </div>
      <div class="card-body d-flex flex-row">
        <div>
          <div class="Photo">
            <img :src="initialTweet.avatar" alt="" class="style2" />
          </div>

          <div class="divider">
            <img src="https://i.postimg.cc/L6HStVZh/divider.png" alt="" />
          </div>
        </div>

        <div class="replied-relative">
          <div class="d-flex flex-row">
            <h5 class="card-title mr-2 bold">{{ initialTweet.name }}</h5>
            <p style="color: #657786">
              @{{ initialTweet.account }}・{{ initialTweet.createdAt }}
            </p>
          </div>
          <p class="card-text">
            {{ initialTweet.description }}
          </p>
          <small class="replied"
            ><span style="color: #657786; font-weight: bold">回覆給</span
            ><span style="color: #ff6600">
              @{{ initialTweet.account }}</span
            ></small
          >

          <div id="thumbnail">
            <div>
              <div class="currentUser">
                <img :src="currentUser.avatar" alt="" class="style2" />
              </div>
              <span class="push">推你的回覆</span>
            </div>
            <div>
              <form @submit.stop.prevent="tweet(initialTweet.id)">
                <input
                  style="
                    width: 380px;
                    height: 140px;
                    border: none;
                    outline: none;
                  "
                  v-model="text"
                  type="text"
                />
                <div>
                  <div class="button-relative">
                    <button
                      style="width: 80px; height: 40px"
                      type="submit"
                      class="btn btn-warning"
                    >
                      回覆
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <!--form下2個  -->
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { mapState } from "vuex";
import tweetAPI from "../apis/tweet.js";
export default {
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
  computed: {
    ...mapState(["currentUser"]),
  },
  data() {
    return {
      text: "",
      Tweet: this.initialTweet,
    };
  },
  // (tweetId)
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
      }
    },
  },
};
</script>



<style scoped>
.style2 {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.bold {
  font-weight: bold;
}
.replied-content {
  margin-top: 50px;
  background-color: white;
}
#card2 {
  border-radius: 12px;
  /* padding: 20px 20px; */
}
.card-header {
  border-radius: 14px 14px 0px 0px;
  background-color: white;
  /* border: 1px solid black; */
  height: 55px;
}
.replied-relative {
  position: relative;
}
.card-title {
  margin-left: 10px;
  font-size: 15px;
  margin-top: 5px;
}
.card-text {
  margin-top: -14px;
  margin-left: 10px;
  position: relative;
}
.currentUser {
  margin-top: 100px;
}
.Photo {
  margin-left: -5px;
  margin-top: 3px;
}
.divider {
  margin-top: 8px;
  margin-left: 17px;
}
.replied {
  margin-left: 9px;
  position: absolute;
  top: 108px;
}
#thumbnail {
  margin-top: 50px;
  margin-left: -10px;
  position: relative;
}
.push {
  position: absolute;
  top: 14px;
  left: 60px;
  color: #9197a3;
  font-size: 18px;
}
.button-relative {
  position: relative;
}
button {
  border-radius: 35px;
  /* margin-bottom: -100px;
  margin-right: 10px; */
  position: absolute;
  right: -80px;
  bottom: -10px;
  background-color: #ff6600;
  color: white;
}
button:hover {
  color: white;
  background-color: #ff6600;
}
</style>