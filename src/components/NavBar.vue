<template>
  <!-- <div class="container mt-3"> -->
  <nav class="nav d-flex flex-column align-items-center">
    <div class="nav-list">
      <div class="nav-top">
        <img src="https://i.imgur.com/FwTYXrW.png" style="width: 30px" alt="logo" />
      </div>

      <!-- nav item -->
      <div
        v-show="!activeIndex"
        class="origin-item"
        @mouseover="mouseOverIndex"
        @mouseout="mouseOutIndex"
        @click="mouseOverIndex"
      >
        <a href="/#/tweets" class="nav-item d-flex align-items-center">
          <div>
            <img src="https://i.imgur.com/OxLE5Bf.png" style="width: 20.25px" alt />
          </div>
          <div>
            <div class="nav-link">首頁</div>
          </div>
        </a>
      </div>

      <div v-show="activeIndex" class="active-item">
        <a href="/#/tweets" class="nav-item d-flex align-items-center">
          <div>
            <img src="https://i.imgur.com/CtX9yrH.png" style="width: 20.25px" alt />
          </div>
          <div>
            <div class="nav-link active-link">首頁</div>
          </div>
        </a>
      </div>

      <div
        v-show="!activeProfile"
        class="origin-item"
        @mouseover="mouseOverProfile"
        @mouseout="mouseOutProfile"
      >
        <router-link
          :to="{ name: 'user', params: { id: currentUser.id } }"
          class="nav-item d-flex align-items-center"
        >
          <img src="https://i.imgur.com/MBiFHBl.png" style="width: 16.7px" alt />
          <div class="nav-link">個人資料</div>
        </router-link>
      </div>

      <div v-show="activeProfile" class="acitve-item">
        <router-link
          :to="{ name: 'user', params: { id: currentUser.id } }"
          class="nav-item d-flex align-items-center"
        >
          <img src="https://i.imgur.com/h5YE1W0.png" style="width: 16.7px" alt />
          <div class="nav-link active-link">個人資料</div>
        </router-link>
      </div>

      <!-- 
      <div class="nav-item d-flex align-items-center">
        <img src="https://i.imgur.com/2EadrJC.png" class="chat-icon" width="22px" alt />
        <a href="/#/chat" class="nav-link">公開聊天室</a>
      </div>-->

      <div
        v-show="!activeSetting"
        class="origin-item"
        @mouseover="mouseOverSetting"
        @mouseout="mouseOutSetting"
      >
        <router-link
          :to="{ name: 'set-account', params: { id: currentUser.id } }"
          class="nav-item d-flex align-items-center"
        >
          <img src="https://i.imgur.com/Ce7aQj4.png" style="width: 20.75px" alt />
          <div class="nav-link">設定</div>
        </router-link>
      </div>

      <div v-show="activeSetting" class="active-item">
        <router-link
          :to="{ name: 'set-account', params: { id: currentUser.id } }"
          class="nav-item d-flex align-items-center"
        >
          <img src="https://i.imgur.com/yEjkFr2.png" style="width: 20.75px" alt />
          <div class="nav-link active-link">設定</div>
        </router-link>
      </div>

      <div>
        <!-- <button class="btn-tweet">推文</button> -->
      </div>
    </div>

    <div class="p-2 nav-bottom">
      <div class="d-flex align-items-center">
        <img src="https://i.imgur.com/4v9ZADO.png" style="width: 16px" alt />
        <button @click="logout">
          <a class="nav-link" href="#">登出</a>
        </button>
      </div>
    </div>
  </nav>
</template>


<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      description: "",
      activeIndex: false,
      activeProfile: false,
      activeSetting: false
    };
  },
  //vuex `mapState` 方法
  computed: {
    ...mapState(["currentUser", "isAuthenticated"])
  },
  methods: {
    logout() {
      this.$store.commit("revokeAuthentication");
      this.$router.push("/signin");
    },
    /*  滑鼠經過hover效果  */
    mouseOverIndex() {
      this.activeIndex = true;
    },
    mouseOutIndex() {
      setTimeout(() => {
        this.activeIndex = false;
      }, 10);
    },
    mouseOverProfile() {
      this.activeProfile = !this.activeProfile;
    },
    mouseOutProfile() {
      setTimeout(() => {
        this.activeProfile = !this.activeProfile;
      }, 10);
    },
    mouseOverSetting() {
      this.activeSetting = !this.activeSetting;
    },
    mouseOutSetting() {
      setTimeout(() => {
        this.activeSetting = !this.activeSetting;
      }, 10);
    }
  }
};
</script>

<style scoped>
.nav {
  position: fixed;
  background: #ffffff;
  width: 25%;
}

.nav-list {
  height: 650px;
  width: 100%;
  margin-top: 14px;
  margin-left: 40px;
}

.nav-top {
  margin-bottom: 40px;
}
.nav-item {
  margin-top: 18px;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  color: #1c1c1c;
  vertical-align: middle;
}

.chat-icon {
  margin-left: -1.5px;
}

.nav-link {
  color: #1c1c1c;
}

.active-link {
  color: #ff6600;
}

.nav-link :hover,
:focus {
  color: #ff6600;
}

.btn-tweet {
  width: 210px;
  height: 45px;
  margin-top: 15px;
  background: #ff6600;
  border-radius: 100px;
  font-weight: 500;
  font-size: 18px;
  line-height: 18px;
  color: #ffffff;
}

.nav-bottom {
  width: 100%;
  margin-left: 55px;
}

.modal-mask {
  position: fixed;
  /* z-index: 9998; */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-body {
  height: 245px;
  display: flex;
  vertical-align: text-top;
}
.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
</style>

