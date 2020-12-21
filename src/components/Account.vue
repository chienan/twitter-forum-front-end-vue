<template>
  <div class="d-flex flex-row">
    <div class="bar col-3"></div>
    <div class="test2 col-9">
      <ul class="list-group rounded-0" style="width: 1063px; height: 1202px">
        <li class="list-group-item">帳戶設定</li>
        <div>
          <form class="account-form ml-3">
            <div class="mb-3 label-parents">
              <input
                type="text"
                class="form-control input1 input-space rounded-0"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="帳號"
                style="width: 642px; height: 48px"
              />

              <label for="exampleInputEmail1" class="form-label">帳號</label>
              <div id="emailHelp" class="form-text"></div>
            </div>

            <div class="label-parents">
              <input
                type="text"
                class="form-control input1 name rounded-0"
                id="exampleInputPassword1"
                placeholder="名稱"
                style="width: 642px; height: 48px"
              />

              <label for="exampleInputPassword1" class="form-label">名稱</label>
            </div>

            <div class="label-parents">
              <input
                type="email"
                class="form-control input1 email rounded-0"
                id="exampleInputPassword1"
                placeholder="Email"
                style="width: 642px; height: 48px"
              />

              <label for="exampleInputPassword1" class="form-label"
                >Email</label
              >
            </div>

            <div class="password label-parents">
              <input
                type="password"
                class="form-control input1 rounded-0"
                id="exampleInputPassword1"
                placeholder="密碼"
                style="width: 642px; height: 48px"
              />

              <label for="exampleInputPassword1" class="form-label">密碼</label>
            </div>

            <div class="mb-3 label-parents">
              <input
                type="password"
                class="form-control input1 rounded-0"
                id="exampleInputPassword1"
                placeholder="密碼確認"
                style="width: 642px; height: 48px"
              />

              <label for="exampleInputPassword1" class="form-label"
                >密碼確認</label
              >
            </div>
            <div class="d-flex justify-content-center">
              <button
                style="width: 122px; height: 50px"
                type="submit"
                class="btn bold mt-3"
              >
                儲存
              </button>
            </div>
          </form>
        </div>
      </ul>
    </div>
  </div>
</template>

<style scoped>
* {
  font-family: "Noto Sans TC";
}
.bar {
  border-right: 1px solid #e6ecf0;
}

.list-group {
  margin-left: -15px;
}
.list-group-item {
  border-right: none;
  border-left: none;
  border-top: none;
  border-color: #e6ecf0;
  height: 55px;
  font-family: Noto Sans TC;
  font-size: 20px;
  font-weight: 700;
  line-height: 28px;
  text-align: left;
}
.account-form {
  margin-top: 50px;
}
.name {
  margin-bottom: 50px;
}
.email {
  margin-bottom: 50px;
}
.password {
  margin-bottom: 50px;
}

button {
  background-color: #ff6600;
  color: white;
  border-radius: 35px;
  margin-right: -120px;
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
  margin-bottom: 50px;
}
</style>