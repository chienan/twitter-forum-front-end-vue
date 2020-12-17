<template>
  <div class="d-flex justify-content-center signin">
    <div class="logo">
      <div class="d-flex justify-content-center">
        <img src="https://i.postimg.cc/LsddLPp9/Logo.png" alt="" />
      </div>
      <div class="bold signup">建立你的帳號</div>
    </div>
    <div class="form1">
      <form>
        <div class="mb-3 label-parents">
          <input
            type="email"
            class="form-control input1 input-space"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="帳號"
            style="width: 500px; height: 45px"
          />

          <label for="exampleInputEmail1" class="form-label">帳號</label>
          <div id="emailHelp" class="form-text"></div>
        </div>

        <div class="label-parents">
          <input
            type="text"
            class="form-control input1 name"
            id="exampleInputPassword1"
            placeholder="名稱"
            style="width: 500px; height: 45px"
          />

          <label for="exampleInputPassword1" class="form-label">名稱</label>
        </div>

        <div class="label-parents">
          <input
            type="email"
            class="form-control input1 email"
            id="exampleInputPassword1"
            placeholder="Email"
            style="width: 500px; height: 45px"
          />

          <label for="exampleInputPassword1" class="form-label">Email</label>
        </div>

        <div class="password label-parents">
          <input
            type="password"
            class="form-control input1"
            id="exampleInputPassword1"
            placeholder="密碼"
            style="width: 500px; height: 45px"
          />

          <label for="exampleInputPassword1" class="form-label">密碼</label>
        </div>

        <div class="mb-3 label-parents">
          <input
            type="password"
            class="form-control input1"
            id="exampleInputPassword1"
            placeholder="密碼確認"
            style="width: 500px; height: 45px"
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
        <a class="bold" href="#" style="color: #0099ff">取消</a>
      </div>
    </div>
  </div>
</template>

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
  font-size: 11px;
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
