<template>
  <div>
    <form class="d-flex justify-content-center">
      <div class="card" style="width: 600px; height: 654px">
        <div class="d-flex flex-row title">
          <div>
            <img src="https://i.postimg.cc/3JLWjBwj/icon-close.png" alt class="cross" />
          </div>
          <div>
            <p class="bold info" style="font-size: 19px">編輯個人資料</p>
          </div>

          <div class="d-flex justify-content-end">
            <button style="width: 64px; height: 30px" type="submit" class="btn bold mt-3">儲存</button>
          </div>
        </div>
        <div>
          <div class="photo-relative">
            <!-- https://i.postimg.cc/zGr93SJ5/Cover-Photo.png -->
            <!-- <img
              src="https://i.postimg.cc/3RFy5ZJR/Cover-Photo.png"
              class="card-img-top cover-photo"
              alt
              style="height: 200px"
            />-->
            <img :src="cover" class="card-img-top cover-photo" alt style="height: 200px" />

            <img
              src="https://i.postimg.cc/8cst7cYh/icon-upload-Photo.png"
              class="card-img-top icon-upload-photo2"
              alt
              style="height: 24px; width: 24px"
              @change="handleFileChange"
            />

            <a href>
              <img
                src="https://i.postimg.cc/02S2SfDB/icon-delete.png"
                class="card-img-top icon-delete"
                alt
                style="height: 24px; width: 24px"
              />
            </a>
          </div>
          <div class="circle-relative">
            <p class="circle"></p>
            <img
              :src="avatar"
              class="card-img-top thumbnail"
              id="user-avatar"
              alt
              style="height: 120px; width: 120px"
            />
          </div>
          <label class="upload-container">
            <input
              type="file"
              name="image"
              accept="image/*"
              class="upload-input"
              @change="handleFileChange"
            />
            <span class="upload_icon">+</span>
            <!-- <img
              src="https://i.postimg.cc/8cst7cYh/icon-upload-Photo.png"
              class="card-img-top icon-upload-photo1"
              id="upload-avatar"
              alt
              style="height: 24px; width: 24px"
            />-->
          </label>
        </div>
        <div class="card-body">
          <div class="mb-3 label-parents">
            <input
              type="text"
              v-model="name"
              class="form-control input1 input-space rounded-0"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="名稱"
              style="width: 570px; height: 54px"
            />

            <label for="exampleInputEmail1" class="form-label">名稱</label>
            <div id="emailHelp" class="form-text"></div>
          </div>
          <div class="number">
            <span>8</span>/
            <span>50</span>
          </div>
          <div class="mb-3 label-parents">
            <input
              type="text"
              v-model="introduction"
              class="form-control input1 input-space rounded-0"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="自我介紹"
              style="width: 570px; height: 150px"
            />

            <label for="exampleInputEmail1" class="form-label">自我介紹</label>
            <div id="emailHelp" class="form-text"></div>
            <div class="number1">
              <span>0</span>/
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

export default {
  data() {
    return {
      id: 0,
      cover: "",
      avatar: "",
      introduction: "",
      isProcessing: false
    };
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
    },
    handleFileChange(e) {
      const files = e.target.files;
      if (!files.length) return;
      const imageURL = window.URL.createObjectURL(files[0]);
      this.image = imageURL;
    },

    async handleSubmit(e) {
      try {
        if (!this.name) {
          Toast.fire({
            icon: "warning",
            title: "您尚未填寫姓名"
          });
          return;
        }
        const form = e.target;
        const formData = new FormData(form);
        this.isProcessing = true;
        const { data } = await usersAPI.update({
          userId: this.id,
          formData
        });
        if (data.status === "error") {
          throw new Error(data.message);
        }
        this.$router.push({ name: "user", params: { id: this.id } });
      } catch (error) {
        console.error(error.message);
        this.isProcessing = false;
        Toast.fire({
          icon: "error",
          title: "無法更新使用者資料，請稍後再試"
        });
      }
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
  margin-top: 14px;
  margin-left: 11px;
}
.info {
  margin-top: 11px;
  margin-left: 35px;
}
.title {
  /* border: 1px solid black; */
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
.thumbnail {
  position: absolute;
  top: -60px;
  left: 13px;
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

input {
  /* position: relative; */
  background-color: #f5f8fa;
  border-top: none;
  border-right: none;
  border-left: none;
  border-color: #657786;
  border-width: 2px;
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
  /* width: 100%;
  top: 10px; */
  bottom: -5px;
}

#upload-avatar {
  position: absolute;
}

#user-avatar {
}
</style>