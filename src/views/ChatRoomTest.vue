<template>
<div class="d-flex">
  <div>
    <NavBar />
  </div>

  <div class="container d-flex">
    <div class="main-content">
      <div class="chat-user"></div>
      <div class="chat-room">
        <title>💬 Real-Time Chat App with Socket.IO</title>
        <body>
          <h1>輸入名稱加入聊天</h1>
          <ul class="feed"></ul>

          <form class="messaging-form" action="#">
            <span class="feedback"></span>
            <div class="message-input">
              <span class="avatar">?</span>
              <input type="text" class="message-input-field name-input" placeholder="輸入暱稱" />
            </div>

            <button class="join">Join</button>
          </form>
        </body>
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
  /* width: 700px; */
  position: relative;
  border: 1px solid gray;
}

.main-content {
  height: 100%;
  width: 600px;
  position: absolute;
  left: 300px;
  display: flex;
}

.chat-user {
  /* position: absolute; */
  height: 100%;
  left: -100px;
  width: 200px;
  border: 1px solid #000;
}

.chat-room {
  /* position: absolute; */
  /* left: 200px; */
  height: 100%;
  width: 300px;
  border: 1px solid #000;
}

/* .container {
  width: 700px;
  height: 1000px;
  border: 1px solid gray;
} */
::placeholder {
  font-style: italic;
}

html {
  font-family: sans-serif;
}

body {
  margin: 30px;
}

ul {
  list-style: none;
  word-wrap: break-word;
}

li {
  margin-bottom: 20px;
}

h1 {
  position: absolute;
  /* top: 50%;
  left: 50%; */
  /* transform: translate(-50%, -50%); */
  font-size: 40px;
  text-align: center;
  color: #444444;
  margin: 0;
}

time {
  font-size: 90%;
}

p {
  margin: 10px 0 0;
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
  position: fixed;
  bottom: 30px;
  left: 30px;
  width: calc(100% - 60px);
  display: flex;
}

.message-input {
  position: relative;
  width: 50%;
  padding: 2px;
  border-radius: 40px;
  margin-left: 300px;
  background: #ffffff4f;
  border: 1px solid #f60;
}

.chat-user {
  width: 200px;
  height: 800px;
  border: 1px solid gray;
}

.avatar {
  width: 25px;
  height: 25px;
  border-radius: 100%;
  display: block;
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