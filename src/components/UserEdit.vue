<template>
  <Spinner v-if="isLoading" />
  <div class="container" v-else>
    <form class="d-flex justify-content-center" @submit.stop.prevent="handleSubmit">
      <div class="card" style="width: 600px; height: 654px">
        <div class="d-flex flex-row title">
          <router-link :to="{ name: 'user', params:{id: id}}">
            <div>
              <img src="https://i.imgur.com/pzaWlxn.png" alt class="cross" />
            </div>
          </router-link>
          <div>
            <p class="bold info" style="font-size: 19px">編輯個人資料</p>
          </div>

          <div class="d-flex justify-content-end">
            <button style="width: 64px; height: 30px" type="submit" class="btn bold mt-3">儲存</button>
          </div>
        </div>
        <div>
          <!--  user cover  -->
          <div class="photo-relative">
            <img
              v-if="cover"
              :src="cover"
              class="card-img-top cover-photo"
              alt
              style="height: 200px"
            />

            <label for="cover" class="upload-container">
              <input
                name="cover"
                type="file"
                accept="image/*"
                class="upload-input-cover"
                id="cover"
                @change="handleCoverChange"
              />
              <span class="upload-icon-cover">+</span>
            </label>

            <img
              src="https://i.imgur.com/gHVdVrY.png"
              class="card-img-top icon-delete"
              alt
              style="height: 15px; width: 15px"
              @click.stop.prevent="clearCover"
            />
          </div>

          <!-- user avatar -->
          <div class="circle-relative">
            <p class="circle"></p>
            <img v-if="avatar" :src="avatar" class="card-img-top user-avatar" alt />
            <label for="avatar" class="upload-container">
              <input
                type="file"
                accept="image/*"
                name="avatar"
                id="avatar"
                class="upload-input"
                @change="handleAvatarChange"
              />
              <span class="upload_icon">+</span>
            </label>
          </div>
        </div>
        <div class="card-body">
          <div class="mb-3 label-parents">
            <label for="name" class="form-label">名稱</label>
            <input
              name="name"
              type="text"
              v-model="name"
              class="form-control input1 input-space"
              id="name"
              placeholder="名稱"
              maxlength="50"
              style="width: 570px; height: 54px"
            />

            <!-- aria-describedby="emailHelp" -->

            <div id="name-count" class="form-text"></div>
          </div>
          <div class="number">
            <span>{{name ? name.length : '0'}}</span>/
            <span>50</span>
          </div>
          <div class="mb-3 label-parents">
            <label for="textarea" class="form-label">自我介紹</label>
            <input
              name="introduction"
              type="text"
              v-model="introduction"
              class="form-control input1 input-space"
              id="introduction"
              placeholder="自我介紹"
              maxlength="160"
              style="width: 570px; height: 150px"
            />
            <!-- aria-describedby="emailHelp" -->

            <div id="introduction-count" class="form-text"></div>
            <div class="number1">
              <span>{{introduction ? introduction.length : '0'}}</span>/
              <span>160</span>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapState } from "vuex";
import usersAPI from "./../apis/users";
import { Toast } from "./../utils/helpers";
import Spinner from "../components/Spinner";

export default {
  data() {
    return {
      name: "",
      id: 0,
      cover: "",
      avatar: "",
      introduction: "",
      isLoading: true,
      // newCover: "",
      // newAvatar: ""
      initialCover: ""
    };
  },
  components: {
    Spinner
  },
  computed: {
    ...mapState(["currentUser"])
  },
  watch: {
    currentUser(user) {
      if (user.id === -1) return;
      const { id } = this.$route.params;
      this.setUser(id);
    }
  },
  //防止使用者直接進入修改頁面
  created() {
    if (this.currentUser.id === -1) return;
    const { id } = this.$route.params;
    this.setUser(id);
  },
  //路由改變時重新抓取資料
  beforeRouteUpdate(to, from, next) {
    if (this.currentUser.id === -1) return;
    const { id } = to.params;
    this.setUser(id);
    next();
  },
  methods: {
    setUser(userId) {
      const { id, cover, avatar, name, introduction } = this.currentUser;
      if (id.toString() !== userId.toString()) {
        this.$router.push({ name: "not-found" });
        return;
      }
      this.id = id;
      this.cover = cover;
      this.avatar = avatar;
      this.name = name;
      this.introduction = introduction;
      this.isLoading = false;
      this.initialCover = this.cover;
    },
    async handleCoverChange(e) {
      try {
        const files = e.target.files;
        console.log("files", files);
        // if (!files.length) return;
        const coverURL = window.URL.createObjectURL(files[0]);
        this.cover = coverURL;
        console.log("this.cover:", this.cover);
      } catch (error) {
        console.error(error.message);

        Toast.fire({
          icon: "error",
          title: "無法更新圖片，請稍後再試"
        });
      }
    },
    async handleAvatarChange(e) {
      try {
        const files = e.target.files;
        console.log("files", files);
        const avatarURL = window.URL.createObjectURL(files[0]);
        this.avatar = avatarURL;
        console.log("this.avatar:", this.avatar);
      } catch (error) {
        console.error(error.message);

        Toast.fire({
          icon: "error",
          title: "無法更新圖片，請稍後再試"
        });
      }
    },
    async handleSubmit(e) {
      try {
        if (!this.name) {
          Toast.fire({
            icon: "warning",
            title: "您尚未填入資料"
          });
          return;
        }

        const form = e.target;
        const formData = new FormData(form);

        const { data } = await usersAPI.update({
          userId: this.id,
          formData
        });

        if (data.status === "error") {
          throw new Error(data.message);
        }

        console.log("formData:", formData);

        Toast.fire({
          icon: "success",
          title: "更新成功"
        });
        this.$router.push({ name: "user", params: { id: this.id } });
      } catch (error) {
        console.error(error.message);

        Toast.fire({
          icon: "error",
          title: "無法更新使用者資料，請稍後再試"
        });
      }
    },
    clearCover() {
      this.cover = this.initialCover;
    }
  }
};
</script>


<style scoped>
.card {
  position: relative;
  border-radius: 14px;
  margin-bottom: 72px;
}
.cross {
  width: 15px;
  height: 15px;
  margin-top: 19px;
  margin-left: 17px;
}
.info {
  margin-top: 11px;
  margin-left: 35px;
}
.title {
  height: 55px;
}
form {
  margin-top: 55px;
}
button {
  background-color: #ff6600;
  color: white;
  border-radius: 35px;
  margin-right: -475px;
  text-align: center;
  font-size: 18px;
  position: absolute;
  top: -4px;
  left: 518px;
  padding: 0px 2px 20px 2px;
}
button:hover {
  color: white;
}
button:focus {
  /* outline: 0; */
  border-color: #ccc;
  outline: none;
  box-shadow: none;
}
.bold {
  font-weight: bold;
}

.cover-photo {
  padding: 0px 1px 0px 1px;
}
.circle-relative {
  position: relative;
}
.circle {
  /* border: 1px solid red; */
  background-color: white;
  width: 121px;
  height: 121px;
  border-radius: 50%;
  position: absolute;
  top: -60px;
  left: 13px;
}
.user-avatar {
  height: 120px;
  width: 120px;
  position: absolute;
  top: -60px;
  left: 13px;
  border-radius: 50%;
  border: 4px solid #ffffff;
}
.icon-upload-photo1 {
  position: absolute;
  bottom: 385px;
  left: 65px;
}
.photo-relative {
  position: relative;
}
.icon-upload-photo2 {
  position: absolute;
  top: 90px;
  right: 313px;
}
.icon-delete {
  position: absolute;
  top: 90px;
  right: 260px;
}
.card-body {
  margin-top: 55px;
  padding: 0px 15px 0px 15px;
}

#user-avatar {
  border-radius: 50%;
  border: 2px solid #ffffff;
}

input,
textarea {
  /* position: relative; */
  background-color: #f5f8fa;
  /* border-top: none;
  border-right: none;
  border-left: none;
  border-color: #657786;
  border-width: 2px; */
  border: none;
  border-bottom: 2px solid #657786;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
  font-size: 19px;
  font-weight: 700;
  padding-top: 27px;
}
input.form-control:focus {
  border-color: #ccc;
  outline: none;
  box-shadow: none;
  background-color: #f5f8fa;
  border-color: #657786;
}
.input1:placeholder-shown::placeholder {
  color: transparent;
}
.label-parents {
  position: relative;
  margin-top: 25px;
  /* margin-bottom: 50px; */
}
.input1:placeholder-shown ~ label {
  display: block;
}
.input1:not(:placeholder-shown) ~ label {
  display: block;
}

label {
  position: absolute;
  top: 3px;
  left: 12px;
  font-size: 15px;
  font-weight: bold;
  color: #657786;
}
.input-space {
  margin-bottom: 35px;
}
.number {
  margin-top: -40px;
  text-align: end;
  color: #657786;
}
.number1 {
  margin-top: -40px;
  text-align: end;
  color: #657786;
}

.upload-container {
  position: relative;
}

.upload-input-cover {
  width: 25px;
  height: 25px;
  position: absolute;
  bottom: 110px;
  left: 200px;
  display: none;
}

.upload-icon-cover {
  color: #ffffff;
  font-size: 34px;
  position: absolute;
  left: 200px;
  bottom: 92px;
}

.upload-icon-cover:hover {
  cursor: pointer;
}

.upload-container {
  /* border: 1px solid black; */
  position: relative;
}

.upload-input {
  position: absolute;
  bottom: 70px;
  left: 15px;
  width: 25px;
  height: 25px;
  display: none;
}

.upload_icon {
  color: #ffffff;
  font-weight: bold;
  font-size: 180%;
  position: absolute;
  left: 50px;
  bottom: -5px;
}

.upload_icon:hover {
  cursor: pointer;
}

.icon-delete:hover {
  cursor: pointer;
}

#upload-avatar {
  position: absolute;
}
/* 
#user-avatar {
} */
</style>