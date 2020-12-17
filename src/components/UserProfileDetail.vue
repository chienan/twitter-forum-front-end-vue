<template>
  <div class="container">
    <div class="main-content">
      <div class="cover-container">
        <img src="https://i.imgur.com/kTzPpZ3.png" class="cover-photo" alt />
        <div class="avatar-container"></div>
      </div>
      <div class="profile-container">
        <div class="edit-section">
          <a href class="btn-edit">編輯個人資料</a>
        </div>
        <div class="profile-section">
          <div class="user-name">John Doe</div>
          <div class="user-id">@heyjohn</div>
          <div
            class="user-intro"
          >Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</div>
        </div>
        <div class="follow-section">
          <a href class="following-section">
            <div class="following-number">34 個</div>跟隨中
          </a>
          <a href class="follower-section">
            <div class="follower-number">59 位</div>跟隨者
          </a>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
.container {
  height: 400px;
  width: 600px;
  position: absolute;
  top: 55px;
  left: 300px;
  background: #ffffff;
  /* border-left: 1px solid #e6ecf0;
  border-right: 1px solid #e6ecf0; */
}

* {
  letter-spacing: 0.3px;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.main-content {
  position: absolute;
  left: 0px;
  width: 600px;
  display: flex;
  flex-direction: column;
  padding-right: 8px;
}

.cover-container,
.profile-container {
  width: 600px;
  height: 200px;
}

.cover-container {
  z-index: 0;
  position: relative;
}

.avatar-container {
  z-index: 1;
  position: absolute;
  top: 125px;
  left: 15px;
  width: 140px;
  height: 140px;
  background: #c4c4c4;
  border: 4px solid #ffffff;
  border-radius: 50%;
}

.profile-container {
  border-left: 1px solid #e6ecf0;
  border-right: 1px solid #e6ecf0;
}

.profile-section,
.follow-section {
  padding-left: 15px;
  margin-top: 10px;
}

.edit-section {
  display: flex;
  flex-direction: row-reverse;
}

.btn-edit {
  width: 122px;
  height: 40px;
  border: 1px solid #ff6600;
  border-radius: 100px;
  font-weight: bold;
  font-size: 15px;
  line-height: 15px;
  color: #ff6600;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 15px;
}

.user-name {
  font-weight: 900;
  font-size: 19px;
  line-height: 28px;
  color: #1c1c1c;
}

.user-id {
  margin-top: -4px;
  font-weight: 500;
  font-size: 15px;
  line-height: 22px;
  color: #657786;
}

.user-intro {
  padding-top: 10px;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #000000;
}

.follow-section,
.following-section,
.follower-section {
  display: flex;
  font-weight: 450;
  font-size: 14px;
  line-height: 20px;
  color: #657786;
}

.following-number,
.follower-number {
  color: #000000;
}

.following-section {
  margin-right: 20px;
}
</style>
