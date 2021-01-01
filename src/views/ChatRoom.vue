<template>
  <div class="d-flex">
    <div>
      <NavBar />
    </div>
    <div class="container">
      <div class="main-content">
        <div class="chat-user">
          <div class="chat-header">
            <div class="chat-title">上線使用者 (5)</div>
          </div>
          <div class="chat-user-item">
            <div class="item">
              <div class="item-content">
                <div class="circle"></div>
                <div class="user-name">Apple</div>
                <div class="user-account">@apple</div>
              </div>
            </div>
          </div>
          <div class="chat-user-item">
            <div class="item">
              <div class="item-content">
                <div class="circle"></div>
                <div class="user-name">Jane Cooper</div>
                <div class="user-account">@Jan3coo</div>
              </div>
            </div>
          </div>
          <div class="chat-user-item">
            <div class="item">
              <div class="item-content">
                <div class="circle"></div>
                <div class="user-name">Wade Warren</div>
                <div class="user-account">@vvvvrren</div>
              </div>
            </div>
          </div>
          <div class="chat-user-item">
            <div class="item">
              <div class="item-content">
                <div class="circle"></div>
                <div class="user-name">小熊維尼</div>
                <div class="user-account">@pooh</div>
              </div>
            </div>
          </div>
          <div class="chat-user-item">
            <div class="item">
              <div class="item-content">
                <div class="circle"></div>
                <div class="user-name">Ralph Edwards</div>
                <div class="user-account">@Rafed</div>
              </div>
            </div>
          </div>
        </div>
        <div class="chat-room">
          <div class="chat-header">
            <div class="chat-title">公開聊天室</div>
          </div>
          <div class="chat-room-container">
            <div class="chat-room-title">輸入名稱加入聊天</div>
            <ul class="feed"></ul>

            <form class="messaging-form" action="#">
              <span class="feedback"></span>
              <div class="message-input">
                <span class="avatar">?</span>
                <input type="text" class="message-input-field name-input" placeholder="輸入暱稱" />
              </div>

              <button class="join">Join</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "../components/NavBar";

export default {
  components: {
    NavBar
  }
};
</script>

<style scoped>
/* CSS reset  */
body {
  margin: 0;
  padding: 0;
}
h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0px;
  padding: 0px;
}
/* style start */
.container {
  position: relative;
}
.main-content {
  height: 720px;
  width: 950px;
  position: absolute;
  left: 220px;
  border: 1px solid #e6ecf0;
  display: flex;
}

.chat-user {
  width: 320px;
  border-right: 1px solid #e6ecf0;
}
.chat-room {
  flex: 1;
}

.chat-header {
  height: 50px;
  border-bottom: 1px solid #e6ecf0;
  display: flex;
  align-items: center;
  font-weight: 650;
  font-size: 17px;
  line-height: 15px;
  color: #1c1c1c;
}

.chat-title {
  margin-left: 20px;
}

.item {
  border-bottom: 1px solid #e6ecf0;
  height: 65px;
}

.item-content {
  display: flex;
  align-items: center;
  padding: 7px 0px 8px 15px;
}

.circle {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #e6ecf0;
}

.user-name,
.user-account {
  margin-left: 6px;
}

.user-name {
  font-weight: 550;
  font-size: 15px;
  line-height: 15px;
  color: #1c1c1c;
}

.user-account {
  font-weight: 550;
  font-size: 15px;
  line-height: 15px;
  color: #657786;
}

.chat-room-container {
  width: 100%;
  height: 670px;
  /* border: 1px solid gray; */
  position: relative;
}

.chat-room-title {
  position: absolute;
  top: 250px;
  left: 200px;
  font-size: 30px;
}

hr {
  border: 0;
  margin: 0 0 10px;
  text-align: center;
}

hr:after {
  content: "...";
  font-size: 38px;
  letter-spacing: 8px;
  font-weight: bold;
}

.messaging-form {
  position: absolute;
  bottom: 40px;
  display: flex;
}

.message-input {
  position: relative;
  width: 400px;
  padding: 2px;
  border-radius: 40px;
  margin-left: 90px;
  margin-right: 10px;
  background: #ffffff4f;
  border: 1px solid #f60;
}

.message-input .avatar {
  position: absolute;
  left: 8px;
  top: 49%;
  transform: translateY(-50%);
  background: #fff;
  text-align: center;
  line-height: 25px;
  font-weight: bold;
}

.message-input-field {
  border-radius: 30px;
  width: 100%;
  box-sizing: border-box;
  padding: 12px 12px 12px 42px;
  border: 0;
  background: #ffffff4f;
  color: #444;
  outline: none;
}

.message-input.error {
  background: rgba(255, 151, 132, 0.795);
}
.message-input.error {
  color: #fff;
}

.messaging-form .message-input-field:focus {
  background: #0000000c;
}

.join {
  background: #f60;
  border: 0;
  color: #fff;
  font-weight: bold;
  padding: 5px 20px;
  border-radius: 100px;
  cursor: pointer;
  box-shadow: 0px 5px 8px 0px #00000027;
}

.welcome-message {
  text-align: center;
  color: #f60;
  margin: 40px 0;
}

.welcome-message-text {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
}

.welcome-message-text .avatar {
  margin-right: 10px;
}

.welcome-message-text .user-name {
  color: #e6bb46;
  margin-right: 10px;
}

.feedback {
  position: absolute;
  top: -25px;
  left: 25px;
  color: #444;
  font-style: italic;
  font-size: 16px;
}

.feedback i {
  color: #e6bb46;
}

.message-entry {
  max-width: 350px;
  display: flex;
}

.message-entry .avatar {
  margin-right: 20px;
}

.message-body {
  color: #444;
}

.user-name {
  color: #444;
  font-weight: bold;
}

.message-entry-own {
  max-width: initial;
  flex-direction: row-reverse;
}

.message-entry-own .avatar {
  margin-right: 0;
  margin-left: 20px;
}

.message-entry-own .message-body {
  text-align: right;
}

.message-entry-own .user-name {
  color: #f40;
}
</style>
