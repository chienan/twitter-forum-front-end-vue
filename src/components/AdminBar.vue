<template >
  <div>
    <div class="bar" style="height: 1310px; width: 337px">
      <div>
        <div class="content">
          <div>
            <img src="https://i.postimg.cc/YST4m6x2/Icon.png" alt />
          </div>
          <div class="d-flex flex-row">
            <div>
              <router-link :to="{ path: '/admin/tweets' }">
                <img src="https://i.postimg.cc/MKrzTW5q/icon-index.png" alt class="icon-index mr-4" />
              </router-link>
            </div>
            <div>
              <!--  to="/admin/tweets" -->
              <router-link :to="{ path: '/admin/tweets' }">
                <p class="bold icon-index" style="font-size: 18px; color: #ff6600">推文清單</p>
              </router-link>
            </div>
          </div>
          <div class="d-flex flex-row">
            <div>
              <router-link :to="{ path: '/admin/userList' }">
                <!-- "{path: '/CouplePackage' }"
                :to="{path: '/CouplePackage'-->
                <img src="https://i.postimg.cc/dVjPCwmh/icon-user.png" alt class="icon-user mr-4" />
              </router-link>
            </div>
            <div>
              <!-- to="/admin/userList" -->
              <router-link :to="{ path: '/admin/userList' }">
                <p class="bold icon-user" style="font-size: 18px; color: #1c1c1c">使用者列表</p>
              </router-link>
            </div>
          </div>
          <div class="d-flex flex-row">
            <div>
              <img src="https://i.postimg.cc/NjJDSnQN/icon-logout.png" alt class="icon-logout mr-4" />
            </div>
            <div>
              <button @click="logout">
                <p class="bold icon-logout" style="font-size: 18px">登出</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- "d-flex flex-direction: column align-items-end" -->
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["currentUser", "isAuthenticated"])
  },
  methods: {
    logout() {
      this.$store.commit("revokeAuthentication");
      this.$router.push("/signin");
    }
  }
};
</script>





<style scoped>
* {
  font-family: "Noto Sans TC";
}
.content {
  margin-left: 120px;
  margin-top: 15px;
}
/* .bar {
  border-right: 1px solid red;
} */
.bold {
  font-weight: bold;
}
.icon-index {
  margin-top: 54px;
}
.icon-user {
  margin-top: 13px;
}
.icon1 {
  display: flex;
  flex-direction: column;
  align-items: end;
}
.icon-logout {
  margin-top: 1100px;
}
</style>