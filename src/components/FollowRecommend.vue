<template>
  <div class="container mt-3">
    <div class="list-group-container d-flex justify-content-center">
      <ul class="list-group list-group-flush">
        <li class="list-group-item list-title">跟隨誰</li>
        <li class="list-group-item">
          <div class="item d-flex row justify-content-between align-items-center">
            <div class="li-front-part row">
              <div class="image-container">
                <!--recommend image-->
                <a href>
                  <div class="circle"></div>
                </a>
              </div>
              <div class="recommend-title d-flex flex-column">
                <!--recommend name-->
                <a href class="recommend-name">Pizza hut</a>

                <!--recommend id-->
                <a href class="recommend-id">@pizzahut</a>
              </div>
            </div>

            <div class="btn-follow">
              <!--v-if: isfollowed-->
              <button class="delete-follow">正在跟隨</button>
            </div>
          </div>
        </li>
        <li class="list-group-item">
          <div class="item d-flex row justify-content-between align-items-center">
            <div class="li-front-part row">
              <div class="image-container">
                <!--recommend image-->
                <a href>
                  <div class="circle"></div>
                </a>
              </div>
              <div class="recommend-title d-flex flex-column">
                <!--recommend name-->
                <a href class="recommend-name">Pizza hut</a>

                <!--recommend id-->
                <a href class="recommend-id">@pizzahut</a>
              </div>
            </div>

            <div class="btn-follow">
              <!--v-else-->
              <button class="follow">跟隨</button>
            </div>
          </div>
        </li>

        <div class="recommend-bottom">
          <a href class="show-more">顯示更多</a>
        </div>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.list-group-container {
  position: relative;
}

.list-group {
  position: fixed;
  background-color: #f5f8fa;
  width: 300px;
  right: 50px;
  top: 15px;
  border-radius: 14px;
}

.list-group-item {
  background-color: #f5f8fa;
}

.list-title {
  font-weight: bold;
  font-size: 18px;
  line-height: 26px;
  height: 45px;
  color: #1c1c1c;
}

.item {
  margin: 0 10px;
  width: 100%;
}

.image-container {
  margin-right: 10px;
}

.circle {
  background: #c4c4c4;
  border-radius: 50%;
  width: 50px;
  height: 50px;
}

.recommend-title {
  display: flex;
  align-items: left;
  justify-content: center;
}

.recommend-name {
  font-weight: 550;
  font-size: 15px;
  line-height: 15px;
  color: #1c1c1c;
}

.recommend-id {
  font-weight: 550;
  font-size: 15px;
  line-height: 15px;

  color: #657786;
}

.follow {
  width: 62px;
  height: 30px;
  border: 1px solid #ff6600;
  border-radius: 100px;
  color: #ff6600;
  font-size: 15px;
  font-weight: 550;
  line-height: 15px;
}

.delete-follow {
  width: 92px;
  height: 30px;
  background: #ff6600;
  border: 1px solid #ff6600;
  border-radius: 100px;
  font-weight: 550;
  font-size: 15px;
  line-height: 15px;
  color: #ffffff;
}

.recommend-bottom {
  height: 50px;
}

.show-more {
  display: flex;
  align-items: center;
  margin-left: 15px;
  height: 50px;
  font-size: 15px;
  line-height: 22px;
  color: #ff6600;
}
</style>
