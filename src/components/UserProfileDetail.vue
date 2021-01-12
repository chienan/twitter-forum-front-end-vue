<template>
  <div class="container">
    <div class="main-content">
      <div class="cover-container">
        <img :src="user.cover" alt />

        <img :src="user.avatar" class="avatar-container" alt />
      </div>
      <div class="profile-container">
        <!-- button section -->
        <div v-if="currentUser.id === user.id" class="edit-section">
          <router-link
            :to="{ name: 'users-edit-intro', params: { id: user.id }}"
            class="btn-edit"
          >編輯個人資料</router-link>
        </div>

        <div v-else class="btn-section">
          <div class="btn-mail">
            <img class="icon-mail" src="https://i.imgur.com/TDfyaS9.png" alt />
          </div>
          <!-- notice off(小鈴鐺關) -->
          <div class="btn-notice-off">
            <img class="icon-notice-off" src="https://i.imgur.com/p1FX7TV.png" alt />
          </div>
          <!--notice on(小鈴鐺開)-->
          <!-- <a href class="btn-notice-on">
            <img class="icon-notice-on" src="https://i.imgur.com/aYdKhit.png" alt />
          </a>-->

          <!-- 取消跟隨 -->

          <button
            v-if="user.isFollowed"
            class="btn-unfollow"
            @click.stop.prevent="deleteFollowing(user.id)"
          >正在跟隨</button>

          <!--跟隨-->
          <button v-else class="btn-follow" @click.stop.prevent="addFollow(user.id)">跟隨</button>
        </div>
        <div class="profile-section">
          <div class="user-name">{{user.name}}</div>
          <div class="user-account">@{{user.account}}</div>
          <div class="user-intro">{{user.introduction}}</div>
        </div>
        <div class="follow-section">
          <router-link
            :to="{ name: 'user-following', params: { id: user.id } }"
            class="following-section"
          >
            <div class="following-number">{{followingLength ? followingLength : '0'}} 個</div>跟隨中
          </router-link>

          <router-link
            :to="{ name: 'user-follower', params: { id: user.id } }"
            class="follower-section"
          >
            <div class="follower-number">{{followerLength ? followerLength : '0'}} 位</div>跟隨者
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import usersAPI from "../apis/users";
import { Toast } from "../utils/helpers";
import { mapState } from "vuex";

export default {
  props: {
    initialUser: {}
    // users: {}
  },
  data() {
    return {
      user: this.initialUser,
      followingLength: "",
      followerLength: ""
    };
  },
  created() {
    const { id: userId } = this.$route.params;
    this.getFollowingsNumber(userId);
    this.getFollowersNumber(userId);
    // this.fetchUserFollower(userId);
  },

  computed: {
    ...mapState(["currentUser", "isAuthenticated"])
  },

  methods: {
    async getFollowingsNumber(userId) {
      try {
        const response = await usersAPI.getUserFollowings({ userId });
        const followingLength = response.data.length;
        if (followingLength) {
          this.followingLength = followingLength;
        } else {
          this.followingLength = 0;
        }
      } catch (error) {
        console.log("error", error);
        Toast.fire({
          icon: "error",
          title: "無法取得使用者跟隨中資料"
        });
      }
    },
    async getFollowersNumber(userId) {
      try {
        const response = await usersAPI.getUserFollowers({ userId });
        const followerLength = response.data.length;
        if (followerLength) {
          this.followerLength = followerLength;
        } else {
          this.followerLength = 0;
        }
      } catch (error) {
        console.log("error", error);
        Toast.fire({
          icon: "error",
          title: "無法取得使用者跟隨者資料"
        });
      }
    },
    async addFollow(id) {
      try {
        const { data } = await usersAPI.addFollow({
          id
        });
        if (data.status === "error") {
          throw new Error(data.message);
        }
        Toast.fire({
          icon: "success",
          title: "追蹤成功"
        });

        this.user = {
          ...this.user,
          isFollowed: true
        };

        this.$emit("after-add-follow", {
          userId: id
        });
      } catch (error) {
        console.error(error.message);
        Toast.fire({
          icon: "error",
          title: "您已經追蹤使用者"
        });
      }
    },
    async deleteFollowing(userId) {
      try {
        const { data } = await usersAPI.deleteFollowing({ userId });

        if (data.status !== "success") {
          throw new Error(data.message);
        }

        this.user = {
          ...this.user,
          isFollowed: false
        };

        this.$emit("after-delete-follow", {
          userId: userId
        });

        Toast.fire({
          icon: "success",
          title: "成功取消追蹤"
        });
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法取消追蹤，請稍後再試"
        });
        console.log("error", error);
      }
    }
  },
  watch: {
    initialUser() {
      this.user = this.initialUser;
    }
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

.edit-section {
  display: flex;
  flex-direction: row-reverse;
}

.btn-edit {
  width: 122px;
  height: 40px;
  border: 1px solid #ff6600;
  border-radius: 100px;
  font-weight: bold;
  font-size: 15px;
  line-height: 15px;
  color: #ff6600;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 15px;
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

.user-account {
  margin-top: -4px;
  font-weight: 410;
  font-size: 15px;
  line-height: 22px;
  color: #657786;
}

.user-intro {
  max-height: 50px;
  overflow: hidden;
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
