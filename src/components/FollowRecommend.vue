<template>
  <div class="container mt-3">
    <div class="list-group-container d-flex justify-content-center">
      <div class="list-group list-group-flush">
        <div class="list-group-item list-title">跟隨誰</div>

        <!--li start-->

        <div class="list-group-item" v-for="user in users" :key="user.id">
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
                    <div class="recommend-name">{{user.name}}</div>

                    <!--recommend id-->
                    <div class="recommend-account">@{{user.account}}</div>
                  </router-link>
                </div>
              </div>

              <div class="btn-follow">
                <!-- <button v-if="user.isFollowed" class="delete-follow">正在跟隨</button> -->

                <form @click.stop.prevent="addFollow(user.id)">
                  <input type="text" :value="user.id" class="user-id-input" />
                  <button class="follow">跟隨</button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div class="recommend-bottom">
          <!--           
          <a href class="show-more">顯示更多</a>-->
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
  data() {
    return {
      users: {},
      user: {
        id: ""
      },
      isFollowed: false
    };
  },
  created() {
    this.fetchTopTenUsers();
  },
  methods: {
    async fetchTopTenUsers() {
      try {
        const response = await usersAPI.getTopTenUsers({ users });
        console.log("response", response);

        const users = response.data;
        this.users = users;
        // console.log(this.currentUser.Followings);
        let recommendFollows = this.currentUser.Followings.filter(
          user => user.id !== response.data.id
        );
        console.log(recommendFollows);
      } catch (error) {
        console.log("error", error);
        Toast.fire({
          icon: "error",
          title: "無法取得資料，請稍後再試"
        });
      }
    },
    async addFollow(id) {
      try {
        console.log("追蹤");

        const { data } = await usersAPI.addFollow({
          id
        });
        console.log("user.id:", id);
        if (data.status === "error") {
          throw new Error(data.message);
        }
        Toast.fire({
          icon: "success",
          title: "追蹤成功"
        });
      } catch (error) {
        console.error(error.message);
        Toast.fire({
          icon: "error",
          title: "您已經追蹤使用者"
        });
      }
    }
  },
  //vuex `mapState` 方法
  computed: {
    ...mapState(["currentUser", "isAuthenticated"])
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
  border-radius: 14px;
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
}

.recommend-name {
  max-width: 150px;
  font-weight: 550;
  font-size: 15px;
  line-height: 15px;
  color: #1c1c1c;
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

.user-id-input {
  display: none;
}
</style>
