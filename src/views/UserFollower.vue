<template>
  <div class="d-flex">
    <div>
      <NavBar />
    </div>

    <div class="main-content">
      <UserProfileNav />

      <!-- User Follow NavTab -->
      <div class="follow-nav-tabs">
        <a href class="tab-follower">跟隨者</a>
        <a href class="tab-following">正在跟隨</a>
      </div>
      <!-- User Follow List -->
      <div class="user-follow-list">
        <div class="follow-item">
          <button class="delete-follow">正在跟隨</button>
          <a href class="item-left">
            <div class="circle"></div>
          </a>

          <div class="item-right">
            <div class="item-user-info">
              <a href class="user-name">Super Mario</a>

              <a href class="user-id">@supermario</a>
            </div>
            <a
              href
              class="item-content"
            >Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</a>
          </div>
        </div>
        <div class="follow-item">
          <button class="follow">跟隨</button>
          <a href class="item-left">
            <div class="circle"></div>
          </a>

          <div class="item-right">
            <div class="item-user-info">
              <a href class="user-name">Super Mario</a>

              <a href class="user-id">@supermario</a>
            </div>
            <a
              href
              class="item-content"
            >Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</a>
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

export default {
  components: {
    NavBar,
    FollowRecommend,
    UserProfileNav
  }
};
</script>

<style scoped>
.follow-nav-tabs {
  height: 55px;
  width: 600px;
  position: absolute;
  top: 55px;
  left: 300px;
  background: #ffffff;
  border: 1px solid #e6ecf0;
  border-top: none;
  display: flex;
  justify-content: start;
}

.tab-follower,
.tab-following {
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
  padding-top: 8px;
}

.tab-follower {
  border-bottom: 2px solid #ff6600;
}

.circle {
  background: #c4c4c4;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin: 9px 10px auto 15px;
}

.user-follow-list {
  display: flex;
  flex-direction: column;
  width: 600px;
  position: absolute;
  top: 110px;
  left: 300px;
  background: #ffffff;
  display: flex;
}

.follow-item {
  border: 1px solid #e6ecf0;
  background: #ffffff;
  border-top: none;
  display: flex;
  padding-top: 3px;
  padding-bottom: 10px;
  position: relative;
}

.delete-follow,
.follow {
  position: absolute;
  right: 15px;
  top: 13px;
}

.delete-follow {
  width: 92px;
  height: 30px;
  background: #ff6600;
  border: 1px solid #ff6600;
  border-radius: 100px;
  font-weight: 550;
  font-size: 15px;
  line-height: 15px;
  color: #ffffff;
}

.follow {
  width: 62px;
  height: 30px;
  border: 1px solid #ff6600;
  border-radius: 100px;
  color: #ff6600;
  font-size: 15px;
  font-weight: 550;
  line-height: 15px;
}

.item-user-info {
  display: flex;
  flex-direction: column;
  margin: 8px auto 0px auto;
}

.user-name {
  font-weight: bold;
  font-size: 15px;
  line-height: 22px;
  color: #1c1c1c;
  order: 0;
  flex-grow: 0;
  margin-top: -3px;
}

.user-id {
  font-weight: 400;
  font-size: 15px;
  line-height: 22px;
  color: #657786;
  flex: none;
  order: 1;
  flex-grow: 0;
  margin-top: -3px;
  margin-bottom: 4px;
}

.item-content {
  font-weight: 400;
  font-size: 15px;
  line-height: 22px;
  color: #1c1c1c;
  text-align: left;
  text-justify: inter-ideograph;
  margin-bottom: 10px;
}
</style>