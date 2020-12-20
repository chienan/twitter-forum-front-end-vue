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
            <!--user-image-->
            <div class="user-image">
              <div class="circle"></div>
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
        <div class="tweet-item" v-for="tweet in tweets.tweets" :key="tweet.id">
          <a href class="item-left">
            <div class="circle"></div>
          </a>

          <div class="item-right">
            <div class="item-user-info d-flex">
              <a href class="user-name">{{tweet.User.name}}</a>

              <a href class="user-id">@{{tweet.UserId}}</a>

              <div class="time">・3hrs</div>
            </div>
            <a href class="item-content">{{tweet.description}}</a>
            <div class="item-interaction">
              <a href class="tweet-reply">
                <img src="https://i.imgur.com/I3DHrNy.png" id="icon-reply" alt />
                <p>13</p>
              </a>

              <a href class="tweet-like">
                <img src="https://i.imgur.com/gCFSWst.png" id="icon-like" alt />
                <p>5</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tweets: {
      type: Object,
      required: true
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
  background: #c4c4c4;
  border-radius: 50%;
  width: 50px;
  height: 50px;
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

.user-id,
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
</style>
