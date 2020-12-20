<template>
  <div>
    <form class="d-flex justify-content-center">
      <div class="card" style="width: 600px; height: 654px">
        <div class="d-flex flex-row title">
          <div>
            <img
              src="https://i.postimg.cc/3JLWjBwj/icon-close.png"
              alt=""
              class="cross"
            />
          </div>
          <div>
            <p class="bold info" style="font-size: 19px">編輯個人資料</p>
          </div>

          <div class="d-flex justify-content-end">
            <button
              style="width: 64px; height: 30px"
              type="submit"
              class="btn bold mt-3"
            >
              儲存
            </button>
          </div>
        </div>
        <div>
          <div class="photo-relative">
            <!-- https://i.postimg.cc/zGr93SJ5/Cover-Photo.png -->
            <img
              src="https://i.postimg.cc/3RFy5ZJR/Cover-Photo.png"
              class="card-img-top cover-photo"
              alt=""
              style="height: 200px"
            />
            <img
              src="https://i.postimg.cc/8cst7cYh/icon-upload-Photo.png"
              class="card-img-top icon-upload-photo2"
              alt=""
              style="height: 24px; width: 24px"
            />

            <img
              src="https://i.postimg.cc/02S2SfDB/icon-delete.png"
              class="card-img-top icon-delete"
              alt=""
              style="height: 24px; width: 24px"
            />
          </div>
          <div class="circle-relative">
            <p class="circle"></p>
            <img
              src="https://i.postimg.cc/NjPGXzLm/Photo.png"
              class="card-img-top thumbnail"
              alt=""
              style="height: 120px; width: 120px"
            />
          </div>

          <img
            src="https://i.postimg.cc/8cst7cYh/icon-upload-Photo.png"
            class="card-img-top icon-upload-photo1"
            alt=""
            style="height: 24px; width: 24px"
          />
        </div>
        <div class="card-body">
          <div class="mb-3 label-parents">
            <input
              type="text"
              class="form-control input1 input-space rounded-0"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="名稱"
              style="width: 570px; height: 54px"
            />

            <label for="exampleInputEmail1" class="form-label">名稱</label>
            <div id="emailHelp" class="form-text"></div>
          </div>
          <div class="number"><span>8</span>/<span>50</span></div>
          <div class="mb-3 label-parents">
            <input
              type="text"
              class="form-control input1 input-space rounded-0"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="自我介紹"
              style="width: 570px; height: 150px"
            />

            <label for="exampleInputEmail1" class="form-label">自我介紹</label>
            <div id="emailHelp" class="form-text"></div>
            <div class="number1"><span>0</span>/<span>160</span></div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>



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
</style>