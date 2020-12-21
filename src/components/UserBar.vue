<template >
  <div>
    <div class="bar" style="height: 1310px; width: 337px">
      <div>
        <div class="content">
          <div>
            <img src="https://i.postimg.cc/YST4m6x2/Icon.png" alt="" />
          </div>
          <div class="d-flex flex-row">
            <div>
              <img
                src="https://i.postimg.cc/T2K8VKr5/Vector.png"
                alt=""
                class="icon-index mr-4"
              />
            </div>
            <div>
              <p class="bold icon-index" style="font-size: 18px">推文清單</p>
            </div>
          </div>
          <div class="d-flex flex-row">
            <div>
              <img
                src="https://i.postimg.cc/zvrnGbN2/Vector.png"
                alt=""
                class="icon-user mr-4"
              />
            </div>
            <div>
              <p class="bold icon-user" style="font-size: 18px; color: #ff6600">
                使用者列表
              </p>
            </div>
          </div>
          <div class="d-flex flex-row">
            <div>
              <img
                src="https://i.postimg.cc/NjJDSnQN/icon-logout.png"
                alt=""
                class="icon-logout mr-4"
              />
            </div>
            <div>
              <p class="bold icon-logout" style="font-size: 18px">登出</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  font-family: "Noto Sans TC";
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
.icon-index {
  margin-top: 54px;
}
.icon-user {
  margin-top: 13px;
}
.icon1 {
  display: flex;
  flex-direction: column;
  align-items: end;
}
.icon-logout {
  margin-top: 1100px;
}
</style>
