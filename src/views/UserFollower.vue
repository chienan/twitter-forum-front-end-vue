<template>
  <div class="d-flex">
    <div>
      <NavBar />
    </div>
    <Spinner v-if="isLoading" />

    <div v-else class="main-content">
      <UserProfileNav :user="user" :tweetsLength="tweetsLength" />

      <!-- User Follow NavTab -->
      <div class="follow-nav-tabs">
        <div class="tab-follower">跟隨者</div>
        <router-link
          :to="{ name: 'user-following', params: { id: user.id } }"
          class="tab-following"
        >正在跟隨</router-link>
      </div>
      <!-- User Follow List -->
      <div class="user-follow-list">
        <div class="follow-item" v-for="user in users" :key="user.id">
          <button class="delete-follow">正在跟隨</button>
          <div class="item-left">
            <router-link :to="{ name: 'user', params:{id: user.id}}">
              <img :src="user.avatar" class="circle" alt />
            </router-link>
          </div>

          <div class="item-right">
            <router-link :to="{ name: 'user', params:{id: user.id}}">
              <div class="item-user-info">
                <div class="user-name">{{user.name}}</div>
                <div class="user-account">@{{user.account}}</div>
              </div>
              <div class="item-content">{{user.introduction}}</div>
            </router-link>
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
import usersAPI from "../apis/users";
import { Toast } from "../utils/helpers";
import Spinner from "../components/Spinner";

export default {
  components: {
    NavBar,
    FollowRecommend,
    UserProfileNav,
    Spinner
  },
  data() {
    return {
      user: {},
      tweetsLength: "",
      users: {},
      isLoading: true
    };
  },
  created() {
    const { id: userId } = this.$route.params;
    this.fetchUser(userId);
    this.fetchUserTweetsLength(userId);
    this.fetchUserFollower(userId);
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
    },
    async fetchUserFollower(userId) {
      try {
        const response = await usersAPI.getUserFollowers({ userId });
        console.log("response", response);

        const users = response.data;
        this.users = users;
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
  padding-bottom: 0px;
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

.user-account {
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