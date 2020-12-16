<template>
  <div class="d-flex justify-content-center signin">
    <div class="logo">
      <div class="d-flex justify-content-center">
        <img src="https://i.postimg.cc/LsddLPp9/Logo.png" alt="" />
      </div>
      <div class="bold Alphitter">登入Alphitter</div>
    </div>
    <div class="form1">
      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label"></label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="帳號"
            style="width: 500px; height: 45px"
          />
          <div id="emailHelp" class="form-text"></div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label"></label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="密碼"
            style="width: 500px; height: 45px"
          />
        </div>

        <button
          style="width: 500px; height: 45px"
          type="submit"
          class="btn bold mt-2"
        >
          登入
        </button>
      </form>

      <div class="signup-alphitter d-flex justify-content-end">
        <div>
          <a class="bold mr-1" href="#" style="color: #0099ff">註冊 Alphitter</a
          ><span class="bold mr-1" style="color: #0099ff">·</span>
          <a class="bold" href="#" style="color: #0099ff">後台登入</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
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
.Alphitter {
  font-size: 23px;
  margin-top: 30px;
}
.form-control {
  margin-top: -20px;
}
input {
  position: relative;
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

::placeholder {
  color: #657786;
  position: absolute;
  right: 30px;
}
::-webkit-input-placeholder {
  /* Chrome, Safari */
  color: #657786;
  position: absolute;
  right: 30px;
}

::-ms-input-placeholder {
  /* IE 10+ */
  color: #657786;
}

::-moz-placeholder {
  /* Firefox 19+ */
  color: #657786;
}
.signup-alphitter {
  margin-top: 35px;
}
</style>
