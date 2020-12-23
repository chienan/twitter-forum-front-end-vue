<template>
  <div class="container">
    <div class="main-content">
      <div class="cover-container">
        <img :src="user.cover" alt />

        <img :src="user.avatar" class="avatar-container" alt />
      </div>
      <div class="profile-container">
        <!-- button section -->
        <div class="btn-section">
          <a href class="btn-mail">
            <img class="icon-mail" src="https://i.imgur.com/TDfyaS9.png" alt />
          </a>
          <!-- notice off(小鈴鐺關) -->
          <a href class="btn-notice-off">
            <img class="icon-notice-off" src="https://i.imgur.com/p1FX7TV.png" alt />
          </a>
          <!--notice on(小鈴鐺開)-->
          <!-- <a href class="btn-notice-on">
            <img class="icon-notice-on" src="https://i.imgur.com/aYdKhit.png" alt />
          </a>-->

          <!-- 取消跟隨 -->
          <a href class="btn-unfollow">正在跟隨</a>

          <!--跟隨-->
          <!-- <a href class="btn-follow">跟隨</a> -->
        </div>
        <div class="profile-section">
          <div class="user-name">{{user.name}}</div>
          <div class="user-id">@{{user.account}}</div>
          <div class="user-intro">{{user.introduction}}</div>
        </div>
        <div class="follow-section">
          <a href class="following-section">
            <div class="following-number">1,164 個</div>跟隨中
          </a>
          <a href class="follower-section">
            <div class="follower-number">6.3萬 位</div>跟隨者
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    user: {}
  }
};
</script>


<style scoped>
.container {
  height: 400px;
  width: 600px;
  position: absolute;
  top: 55px;
  left: 300px;
  background: #ffffff;
  /* border-left: 1px solid #e6ecf0;
  border-right: 1px solid #e6ecf0; */
}

* {
  letter-spacing: 0.3px;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.main-content {
  position: absolute;
  left: 0px;
  width: 600px;
  display: flex;
  flex-direction: column;
  padding-right: 8px;
}

.cover-container,
.profile-container {
  width: 600px;
  height: 200px;
}

.cover-container {
  z-index: 0;
  position: relative;
  background: #999999;
}

.avatar-container {
  z-index: 1;
  position: absolute;
  top: 125px;
  left: 15px;
  width: 140px;
  height: 140px;
  background: #c4c4c4;
  border: 4px solid #ffffff;
  border-radius: 50%;
}

.profile-container {
  border-left: 1px solid #e6ecf0;
  border-right: 1px solid #e6ecf0;
}

.profile-section,
.follow-section {
  padding-left: 15px;
  margin-top: 10px;
}

.btn-section {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
}

.btn-mail,
.btn-notice-off,
.btn-notice-on {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid #ff6600;
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn-notice-on {
  background-color: #ff6600;
}

.btn-mail {
  margin-right: 10px;
}

.icon-mail {
  height: 18px;
  width: 20px;
}

.icon-notice-off {
  height: 21.89px;
  width: 23.9px;
}

.icon-notice-on {
  height: 22.54px;
  width: 23.93px;
}

.btn-follow,
.btn-unfollow {
  width: 92px;
  height: 40px;
  border: 1px solid #ff6600;
  border-radius: 100px;
  font-weight: bold;
  font-size: 15px;
  line-height: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 15px 10px 10px;
}

.btn-follow {
  color: #ff6600;
}

.btn-unfollow {
  background-color: #ff6600;
  color: #ffffff;
}

.user-name {
  font-weight: 900;
  font-size: 19px;
  line-height: 28px;
  color: #1c1c1c;
}

.user-id {
  margin-top: -4px;
  font-weight: 410;
  font-size: 15px;
  line-height: 22px;
  color: #657786;
}

.user-intro {
  padding-top: 10px;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #000000;
}

.follow-section,
.following-section,
.follower-section {
  display: flex;
  font-weight: 450;
  font-size: 14px;
  line-height: 20px;
  color: #657786;
}

.following-number,
.follower-number {
  color: #000000;
}

.following-section {
  margin-right: 20px;
}
</style>
