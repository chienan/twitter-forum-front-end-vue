<template>
  <div class="d-flex justify-content-center signin">
    <div class="logo">
      <div class="d-flex justify-content-center">
        <img class="alpha-logo" src="https://i.imgur.com/JqDOAUX.png" alt />
      </div>
      <div class="bold Admin">後台登入</div>
    </div>
    <div class="form1">
      <form @submit.stop.prevent="handleSubmit">
        <div class="mb-3 label-parents">
          <input
            ref="email"
            type="email"
            class="form-control input1 input-space"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="帳號"
            style="width: 540px; height: 50px"
            v-model="email"
            required
          />

          <label for="exampleInputEmail1" class="form-label">e-mail</label>
          <div id="emailHelp" class="form-text"></div>
        </div>

        <div class="mb-3 label-parents">
          <input
            type="password"
            class="form-control input1"
            id="exampleInputPassword1"
            placeholder="密碼"
            style="width: 540px; height: 50px"
            v-model="password"
            required
          />

          <label for="exampleInputPassword1" class="form-label">密碼</label>
        </div>

        <button
          style="width: 540px; height: 50px"
          type="submit"
          class="btn bold mt-3"
          :disabled="isProcessing"
        >{{ isProcessing ? "處理中，請稍後" : "登入" }}</button>
      </form>

      <div class="signup-alphitter d-flex justify-content-end">
        <router-link to="/signin" class="bold" href="#" style="color: #0099ff; font-size: 18px">前台登入</router-link>
      </div>
    </div>
  </div>
</template>


<script>
import authorizationAPI from "../apis/authorization.js";
import { Toast } from "../utils/helpers.js";

export default {
  name: "AdminSignIn",
  data() {
    return {
      email: "",
      password: "",
      isProcessing: false
    };
  },
  created() {
    setTimeout(() => {
      this.$refs.email.focus();
    });
  },
  methods: {
    async handleSubmit() {
      try {
        if (!this.email || !this.password) {
          Toast.fire({
            icon: "warning",
            title: "請填入 email 和 password"
          });
          return;
        }
        this.isProcessing = true;
        const response = await authorizationAPI.authorization.AdminSignIn({
          email: this.email,
          password: this.password
        });
        console.log(response);
        const { data } = response;
        if (data.status !== "success") {
          throw new Error(data.message);
        }

        localStorage.setItem("token1", data.token);
        this.$router.push("/admin/tweets");
      } catch (error) {
        console.log("error", error);
        this.password = "";
        this.isProcessing = false;
        Toast.fire({
          icon: "warning",
          title: "請確認您輸入了正確的帳號密碼"
        });
      }
    }
  }
};
</script>







<style scoped>
.signin {
  margin-top: 100px;
  position: relative;
}

.alpha-logo {
  width: 40px;
  height: 40px;
}

.logo {
  margin-top: -53px;
  position: absolute;
}
.form1 {
  margin-top: 65px;
}
button {
  background-color: #ff6600;
  color: white;
  border-radius: 35px;
  font-size: 18px;
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
.Admin {
  font-size: 25px;
  margin-top: 30px;
}
.form-control {
  margin-top: -20px;
}

input {
  background-color: #f5f8fa;
  border: none;
  border-bottom: 2px solid #657786;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
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
  margin-top: 30px;
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
  margin-bottom: 39px;
}

.signup-alphitter {
  margin-top: 40px;
  /* border-bottom: 1px solid #0099ff;
  width: 70px; */
  text-decoration: none;
}
a {
  text-decoration: none;
  position: relative;
}
a::after {
  content: "";
  position: absolute;
  background-color: #0099ff;
  width: 72px;
  height: 1px;
  bottom: 3px;
  left: 0px;
}
</style>
