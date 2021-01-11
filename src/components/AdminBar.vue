<template >
  <div>
    <!-- <div class="bar" style="height: 1310px; width: 337px"> -->
    <div class="nav">
      <div>
        <div class="content">
          <div>
            <img src="https://i.imgur.com/FwTYXrW.png" style="width: 30px" alt />
          </div>
          <div class="d-flex flex-row nav-item">
            <div>
              <router-link :to="{ path: '/admin/tweets' }">
                <img src="https://i.imgur.com/OxLE5Bf.png" alt class="icon-index mr-4" />
              </router-link>
            </div>
            <div>
              <!--  to="/admin/tweets" -->
              <router-link :to="{ path: '/admin/tweets' }">
                <p class="bold nav-item-option">推文清單</p>
              </router-link>
            </div>
          </div>
          <div class="d-flex flex-row nav-item">
            <div>
              <router-link :to="{ path: '/admin/userList' }">
                <!-- "{path: '/CouplePackage' }"
                :to="{path: '/CouplePackage'-->
                <img src="https://i.imgur.com/MBiFHBl.png" alt class="icon-user mr-4" />
              </router-link>
            </div>
            <div>
              <!-- to="/admin/userList" -->
              <router-link :to="{ path: '/admin/userList' }">
                <p class="bold nav-item-option">使用者列表</p>
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

.nav {
  position: fixed;
  width: 25%;
  height: 650px;
  background: #ffffff;
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

.nav-item {
  display: flex;
  border: 1px solid black;
}

.nav-item-option {
  font-size: 18px;
  color: #1c1c1c;
}

.nav-item-option:hover {
  color: #ff6600;
}

.icon-index {
  width: 22.2px;
  height: 20.25px;
}

.icon-user {
  /* margin-top: 13px; */
  width: 16.7px;
  height: 20.34px;
}
.icon1 {
  display: flex;
  flex-direction: column;
  align-items: end;
}
.icon-logout {
  /* margin-top: 1100px; */
}
</style>