<template>
  <div class="d-flex justify-content-center">
    <ul
      class="list-group rounded-0"
      style="width: 600px; height: 1202px"
      id="tweets-detail"
    >
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
        <p class="color-gray time">{{ Tweet.createdAt }}</p>
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
            <img
              src="https://i.postimg.cc/ZqS9w3RK/Vector-3.png"
              alt=""
              class="replied-icon"
            />
          </div>
          <div>
            <img
              src="https://i.postimg.cc/26P3BBPD/Vector.png"
              alt=""
              class="heart-icon"
            />
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
            >@{{ tweetReplie.User.account }}・{{ tweetReplie.createdAt }}</span
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
  data() {
    return {
      Tweet: this.initialTweet,
      // islike: this.initialTweet.isLike,
    };
  },
  watch: {
    initialTweet(newValue) {
      this.Tweet = {
        ...this.Tweet,
        ...newValue,
      };
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
hr {
  margin-left: -3px;
  background-color: #e6ecf0;
  height: 1px;
  border: none;
}

.tset {
  padding-top: -60px;
}

.line {
  border-bottom: 1px solid #e6ecf0;
  margin-top: -25px;
  margin-left: -3px;
}
.heart-icon {
  margin-left: -19px;
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
</style>