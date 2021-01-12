<template>
  <div class="container mt-3">
    <div class="list-group-container d-flex justify-content-center">
      <div class="list-group list-group-flush">
        <div class="list-group-item list-title">跟隨誰</div>

        <!--top six users-->

        <div class="list-group-item" v-for="user in topSix" :key="user.id">
          <!-- v-for="user in users" :key="user.id" -->
          <!-- currentUser.id !== user.id -->
          <div class="list-container">
            <div class="item d-flex row justify-content-between align-items-center">
              <div class="li-front-part row">
                <div class="image-container">
                  <!--recommend image-->
                  <router-link :to="{name: 'user', params: {id: user.id}}">
                    <img :src="user.avatar" class="user-avatar" width="50px" height="50px" />
                  </router-link>
                </div>

                <div class="recommend-title d-flex flex-column">
                  <router-link :to="{name: 'user', params: {id: user.id}}">
                    <!--recommend name-->
                    <div class="recommend-name">{{user.name | shortCut}}</div>

                    <!--recommend id-->
                    <div class="recommend-account">@{{user.account | shortCut}}</div>
                  </router-link>
                </div>
              </div>

              <div class="btn-follow">
                <button
                  v-if="user.isFollowed"
                  class="delete-follow"
                  @click.stop.prevent="deleteFollowing(user.id)"
                >正在跟隨</button>

                <button v-else-if="user.id === currentUser.id" class="follow-self">您本人</button>

                <button v-else class="follow" @click.stop.prevent="addFollow(user.id)">跟隨</button>
              </div>
            </div>
          </div>
        </div>

        <!-- show more users -->
        <div
          v-show="showMore"
          class="list-group-item more-users-wrapper"
          v-for="user in moreUsers"
          :key="user.id"
        >
          <div class="list-container">
            <div class="item d-flex row justify-content-between align-items-center">
              <div class="li-front-part row">
                <div class="image-container">
                  <!--recommend image-->
                  <router-link :to="{name: 'user', params: {id: user.id}}">
                    <img :src="user.avatar" class="user-avatar" width="50px" height="50px" />
                  </router-link>
                </div>

                <div class="recommend-title d-flex flex-column">
                  <router-link :to="{name: 'user', params: {id: user.id}}">
                    <!--recommend name-->
                    <div class="recommend-name">{{user.name | shortCut}}</div>

                    <!--recommend id-->
                    <div class="recommend-account">@{{user.account | shortCut}}</div>
                  </router-link>
                </div>
              </div>

              <div class="btn-follow">
                <button
                  v-if="user.isFollowed"
                  class="delete-follow"
                  @click.stop.prevent="deleteFollowing(user.id)"
                >正在跟隨</button>

                <button v-else-if="user.id === currentUser.id" class="follow-self">您本人</button>

                <button v-else class="follow" @click.stop.prevent="addFollow(user.id)">跟隨</button>
              </div>
            </div>
          </div>
        </div>
        <!-- </div> -->

        <!-- show more button -->
        <div class="recommend-bottom">
          <div v-show="!showMore" class="show-more" @click.stop.prevent="showMoreUsers">顯示更多</div>
          <div v-show="showMore" class="show-more" @click.stop.prevent="closeMoreUsers">收回</div>
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
    initialTops: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      users: this.initialTops,
      showMore: false,
      topSix: [],
      moreUsers: []
    };

    // user: {
    //   id: ""
    // }
  },
  created() {
    this.fetchTopSix();
    this.fetchMoreUsers();
  },
  filters: {
    shortCut(string) {
      if (string.length > 12) {
        return string.slice(0, 12) + "...";
      }
      return string;
    },
    hideList(li) {
      if (li.length > 6) {
        return li.slice(0, 6);
      }
      return li;
    }
  },
  methods: {
    fetchTopSix() {
      const topSixUsers = this.initialTops.slice(0, 6);
      this.topSix = topSixUsers;
    },
    fetchMoreUsers() {
      const getMoreUsers = this.initialTops.slice(6, 10);
      this.moreUsers = getMoreUsers;
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

        this.topSix = this.topSix.map(user => {
          if (user.id !== id) {
            return user;
          } else {
            return {
              ...user,
              isFollowed: true
            };
          }
        });
        this.moreUsers = this.moreUsers.map(user => {
          if (user.id !== id) {
            return user;
          } else {
            return {
              ...user,
              isFollowed: true
            };
          }
        });
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

        this.topSix = this.topSix.map(user => {
          if (user.id !== userId) {
            return user;
          } else {
            return {
              ...user,
              isFollowed: false
            };
          }
        });
        this.moreUsers = this.moreUsers.map(user => {
          if (user.id !== userId) {
            return user;
          } else {
            return {
              ...user,
              isFollowed: false
            };
          }
        });

        // this.users = this.users.map(user => {
        //   if (user.id !== userId) {
        //     return user;
        //   } else {
        //     return {
        //       ...user,
        //       isFollowed: false
        //     };
        //   }
        // });
        this.$emit("after-delete-follow", {
          userId: userId
          // isFollowed: false
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
    },
    showMoreUsers() {
      this.showMore = true;
    },
    closeMoreUsers() {
      this.showMore = false;
    }
  },
  //vuex `mapState` 方法
  computed: {
    ...mapState(["currentUser", "isAuthenticated"])
  },
  watch: {
    initialTops(val) {
      if (val && val.length > 0) {
        this.users = this.initialTops;
        this.fetchTopSix();
        this.fetchMoreUsers();
      } else if (!val) {
        this.fetchTopSix();
        this.fetchMoreUsers();
      }
    }
  }
};
</script>
<style scoped>
.list-group-container {
  position: relative;
}
.list-group {
  position: fixed;
  background-color: #f5f8fa;
  width: 300px;
  right: 50px;
  top: 15px;
  /* position: absolute; */
  /* left: 905px;
  top: 35px; */
  border-radius: 14px;
  max-height: 650px;
  overflow: scroll;
}
.list-group-item {
  background-color: #f5f8fa;
}
.list-title {
  font-weight: bold;
  font-size: 18px;
  line-height: 26px;
  height: 45px;
  color: #1c1c1c;
}
.item {
  margin: 0 10px;
  width: 100%;
}
.image-container {
  margin-right: 10px;
}
.user-avatar {
  border-radius: 50%;
}
.recommend-title {
  display: flex;
  align-items: left;
  justify-content: center;
  max-width: 68%;
}
.recommend-name {
  max-width: 150px;
  font-weight: 550;
  font-size: 15px;
  line-height: 15px;
  color: #1c1c1c;
  /* max-width: 95%; */
}
.recommend-account {
  font-weight: 550;
  font-size: 15px;
  line-height: 15px;
  color: #657786;
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
.follow-self {
  width: 62px;
  height: 30px;
  border: 1px solid #ff6600;
  border-radius: 100px;
  color: #ff6600;
  font-size: 15px;
  font-weight: 550;
  line-height: 15px;
}
.delete-follow {
  width: 80px;
  height: 30px;
  background: #ff6600;
  border: 1px solid #ff6600;
  border-radius: 100px;
  font-weight: 550;
  font-size: 15px;
  line-height: 15px;
  color: #ffffff;
}
.recommend-bottom {
  height: 50px;
}
.show-more {
  display: flex;
  align-items: center;
  margin-left: 15px;
  height: 50px;
  font-size: 15px;
  line-height: 22px;
  color: #ff6600;
}

.show-more:hover {
  cursor: pointer;
}

.user-id-input {
  display: none;
}

.more-users-wrapper {
  /* top: 100%;
  width: 100%; */
  transition: transform 1s ease-out;
  /* transform: scale(1, 0);
  transform-origin: top; */
}
</style>
