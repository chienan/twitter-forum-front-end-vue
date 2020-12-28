<template>
<container>
  <head>
    <title>💬 Real-Time Chat App with Socket.IO</title>
    <meta charset="UTF-8" />
    <link rel="stylesheet" href="styles.css" />
  </head>
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

    <!-- <script src="https://cdn.socket.io/socket.io-1.2.0.js"></script> -->
    <!-- <script src="app.js"></script> -->
  </body>
</container>
</template>


<script>
import io from "socket.io";
// eslint-disable-next-line no-unused-vars
import cors from "cors";
const socket = io.connect("https://simple-twitter-socket.herokuapp.com/?#");
// const socket = io()

export default {
 mounted() {
  const s = document.createElement('script');
  s.type = 'text/javascript';
  s.src = '你的需要的js文件地址';
  document.body.appendChild(s);
 },
}

const dom = {
  nameInput: document.querySelector(".name-input"),
  joinButton: document.querySelector(".join"),
  inputAvatar: document.querySelector(".messaging-form .avatar"),
  welcomeMessage: document.querySelector("h1"),
  feed: document.querySelector(".feed"),
  feedback: document.querySelector(".feedback")
};

const user = {
  name: null,
  avatar: null
};

const getAvatar = () => {
  let num = Math.floor(Math.random() * 30);
  return `url(https://loremflickr.com/320/240/cats?random=${num})`;
};

const addEntry = ({ user, message }, you) => {
  const entry = document.createElement("li");
  const date = new Date();

  entry.classList = `message-entry${you ? " message-entry-own" : ""}`;
  entry.innerHTML = `
        <span class="avatar" style="background: ${
          user.avatar
        }; background-size: contain;"></span>
        <div class="message-body">
            <span class="user-name">${you ? "You" : user.name}</span>
            <time>- ${date.getHours()}:${date.getMinutes()}</time>
            <p>${message}</p>
        </div>
    `;

  dom.feed.appendChild(entry);
};

const addWelcomeMessage = (user, you) => {
  const welcomeMessage = document.createElement("li");
  const message = you
    ? "您已加入聊天"
    : `<span class="user-name">${user.name}</span> 加入聊天`;

  const avatar = you
    ? ""
    : `<span class="avatar" style="background: ${user.avatar}; background-size: contain;"></span>`;

  welcomeMessage.classList = "welcome-message";
  welcomeMessage.innerHTML = `
        <hr />
        <h2 class="welcome-message-text">
            ${avatar}
            ${message}
        </h2>
    `;

  dom.feed.appendChild(welcomeMessage);
};

const enterChannel = () => {
  const avatar = getAvatar();
  const name = dom.nameInput.value;

  dom.joinButton.remove();
  dom.welcomeMessage.remove();

  dom.nameInput.value = "";
  dom.nameInput.placeholder = "輸入您的訊息...";

  dom.inputAvatar.innerText = "";
  dom.inputAvatar.style.backgroundImage = avatar;
  dom.inputAvatar.style.backgroundSize = "contain";

  user.name = name;
  user.avatar = avatar;

  addWelcomeMessage({ avatar }, true);

  socket.emit("user connected", {
    name,
    avatar
  });
};

socket.on("user connected", payload => addWelcomeMessage(payload, false));

socket.on("user typing", ({ user, typers }) => {
  dom.feedback.innerHTML =
    typers > 1 ? "Several people are typing" : `<i>${user}</i> is typing`;
});

socket.on("user stopped typing", typers => {
  if (!typers) {
    dom.feedback.innerHTML = "";
  }
});

socket.on("send message", payload => {
  addEntry(payload);

  if (!payload.typers) {
    dom.feedback.innerHTML = "";
  }
});

dom.joinButton.onclick = e => {
  e.preventDefault();

  if (!dom.nameInput.value) {
    dom.nameInput.parentElement.classList.add("error");
  } else {
    enterChannel();

    dom.nameInput.onkeyup = e => {
      socket.emit("user typing");

      // If user presses enter
      if (e.keyCode === 13) {
        const message = e.target.value;

        socket.emit("send message", {
          message,
          user
        });

        addEntry({ user, message }, true);

        e.target.value = "";
      }

      if (e.target.value === "") {
        socket.emit("user stopped typing");
      }
    };
  }
};
</script>


<style scoped>
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
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
  width: 90%;
  padding: 2px;
  border-radius: 40px;
  margin-right: 20px;
  background: #ffffff4f;
  border: 1px solid #f60;
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