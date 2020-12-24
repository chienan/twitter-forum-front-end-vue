<template>
  <div class="d-flex justify-content-center signin">
    <div class="logo">
      <div class="d-flex justify-content-center">
        <img src="https://i.postimg.cc/LsddLPp9/Logo.png" alt="" />
      </div>
      <div class="bold signup">建立你的帳號</div>
    </div>
    <div class="form1">
      <form @submit.stop.prevent="handleSignUp">
        <div class="mb-3 label-parents">
          <input
            type="email"
            class="form-control input1 input-space"
            id="account"
            aria-describedby="emailHelp"
            placeholder="帳號"
            style="width: 500px; height: 45px"
            v-model="account"
          />

          <label for="exampleInputEmail1" class="form-label">帳號</label>
          <div id="emailHelp" class="form-text"></div>
        </div>

        <div class="label-parents">
          <input
            type="text"
            class="form-control input1 name"
            id="name"
            placeholder="名稱"
            style="width: 500px; height: 45px"
            v-model="name"
          />

          <label for="exampleInputPassword1" class="form-label">名稱</label>
        </div>

        <div class="label-parents">
          <input
            type="email"
            class="form-control input1 email"
            id="email"
            placeholder="Email"
            style="width: 500px; height: 45px"
            v-model="email"
          />

          <label for="exampleInputPassword1" class="form-label">Email</label>
        </div>

        <div class="password label-parents">
          <input
            type="password"
            class="form-control input1"
            id="password"
            placeholder="密碼"
            style="width: 500px; height: 45px"
            v-model="password"
          />

          <label for="exampleInputPassword1" class="form-label">密碼</label>
        </div>

        <div class="mb-3 label-parents">
          <input
            type="password"
            class="form-control input1"
            id="passwordCheck"
            placeholder="密碼確認"
            style="width: 500px; height: 45px"
            v-model="passwordCheck"
          />

          <label for="exampleInputPassword1" class="form-label">密碼確認</label>
        </div>

        <button
          style="width: 500px; height: 45px"
          type="submit"
          class="btn bold mt-2"
        >
          註冊
        </button>
      </form>

      <div class="signup-alphitter d-flex justify-content-center">
        <router-link
          to="/signin"
          @click.stop.prevent="cancel"
          class="bold"
          href="#"
          style="color: #0099ff"
          >取消</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import signupAPI from "../apis/signUp.js";
import { Toast } from "../utils/helpers.js";
export default {
  name: "SignUp",
  data() {
    return {
      account: "",
      name: "",
      email: "",
      password: "",
      passwordCheck: "",
    };
  },

  methods: {
    async handleSignUp() {
      try {
        const data1 = {
          account: this.account,
          name: this.name,
          email: this.email,
          password: this.password,
          checkPassword: this.passwordCheck,
        };

        if (!this.account) {
          Toast.fire({
            icon: "warning",
            title: "請輸入帳號，謝謝!",
          });
          return;
        }

        if (!this.name) {
          Toast.fire({
            icon: "warning",
            title: "請輸入姓名，謝謝!",
          });
          return;
        }

        if (!this.email) {
          Toast.fire({
            icon: "warning",
            title: "請輸入email，謝謝!",
          });
          return;
        }

        if (!this.password || !this.passwordCheck) {
          Toast.fire({
            icon: "warning",
            title: "請輸密碼，謝謝!",
          });
          return;
        }

        const response = await signupAPI.create({ data1 });
        console.log(response);
        const { data } = response;
        if (data.status !== "success") {
          throw new Error(data.status);
        }
        this.$router.push({ name: "sign-in" });
      } catch (error) {
        console.log("error", error);
        Toast.fire({
          icon: "error",
          title: "目前無法註冊，請稍後再試",
        });
      }
    },
  },
};
</script>

<style scoped>
* {
  font-family: "Noto Sans TC";
}
.signin {
  margin-top: 100px;
  position: relative;
}
.logo {
  margin-top: -60px;
  position: absolute;
}
.form1 {
  margin-top: 65px;
}

.name {
  margin-bottom: 35px;
}
.email {
  margin-bottom: 35px;
}
.password {
  margin-bottom: 35px;
}

button {
  background-color: #ff6600;
  color: white;
  border-radius: 35px;
  /* /* outline: none; */
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
.signup {
  font-size: 23px;
  margin-top: 30px;
  font-family: Noto Sans TC;
}
.form-control {
  margin-top: -20px;
}

input {
  /* position: relative; */
  background-color: #f5f8fa;
  border-top: none;
  border-right: none;
  border-left: none;
  border-color: #657786;
  border-width: 2px;
  border-radius: 0;
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
  display: none;
}

label {
  position: absolute;
  top: 2px;
  left: 12px;
  font-size: 15px;
  font-weight: bold;
  color: #657786;
}
.input-space {
  margin-bottom: 35px;
}

.signup-alphitter {
  margin-top: 35px;
  /* border-bottom: 1px solid #0099ff;
  width: 70px; */
  text-decoration: none;
  margin-bottom: 200px;
}
a {
  text-decoration: none;
  position: relative;
  margin-top: -15px;
}
a::after {
  content: "";
  position: absolute;
  background-color: #0099ff;
  width: 32px;
  height: 1px;
  bottom: 3px;
  left: 0px;
}
</style>
