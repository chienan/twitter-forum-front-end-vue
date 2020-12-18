<template>
  <div class="container">
    <div class="main-content">
      <!-- tweet-list -->
      <div class="tweet-list">
        <!--tweet item start-->
        <div class="tweet-item">
          <a href class="item-left">
            <div class="circle"></div>
          </a>

          <div class="item-right">
            <div class="item-user-info d-flex">
              <!-- UserName -->
              <a href class="user-name">Apple</a>

              <!-- UserId -->
              <a href class="user-id">@apple</a>

              <!-- time -->
              <div class="time">・3 小時</div>
            </div>

            <!-- description -->
            <a
              href
              class="item-content"
            >Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</a>
            <div class="item-interaction">
              <!--reply-->
              <a href class="tweet-reply">
                <img src="https://i.imgur.com/I3DHrNy.png" id="icon-reply" alt />
                <p class="reply-count">13</p>
              </a>

              <!-- like -->
              <a href class="tweet-like">
                <img src="https://i.imgur.com/gCFSWst.png" id="icon-like" alt />
                <p class="like-count">76</p>
              </a>
            </div>
          </div>
        </div>
        <!-- tweet-item-test -->
        <div class="tweet-item">
          <a href class="item-left">
            <div class="circle"></div>
          </a>

          <div class="item-right">
            <div class="item-user-info d-flex">
              <a href class="user-name">John Doe</a>
              <!-- <div class="user-name">Apple</div> -->
              <a href class="user-id">@heyjohn</a>
              <!-- <div class="user-id">@apple</div> -->

              <div class="time">・3 小時</div>
            </div>
            <a
              href
              class="item-content"
            >Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</a>
            <div class="item-interaction">
              <a href class="tweet-reply">
                <img src="https://i.imgur.com/I3DHrNy.png" id="icon-reply" alt />
                <p class="reply-count">13</p>
              </a>

              <a href class="tweet-like">
                <img src="https://i.imgur.com/gCFSWst.png" id="icon-like" alt />
                <p class="like-count">76</p>
              </a>
            </div>
          </div>
        </div>
        <div class="tweet-item">
          <a href class="item-left">
            <div class="circle"></div>
          </a>

          <div class="item-right">
            <div class="item-user-info d-flex">
              <a href class="user-name">John Doe</a>
              <!-- <div class="user-name">Apple</div> -->
              <a href class="user-id">@heyjohn</a>
              <!-- <div class="user-id">@apple</div> -->

              <div class="time">・3 小時</div>
            </div>
            <a
              href
              class="item-content"
            >Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</a>
            <div class="item-interaction">
              <a href class="tweet-reply">
                <img src="https://i.imgur.com/I3DHrNy.png" id="icon-reply" alt />
                <p class="reply-count">13</p>
              </a>

              <a href class="tweet-like">
                <img src="https://i.imgur.com/gCFSWst.png" id="icon-like" alt />
                <p class="like-count">76</p>
              </a>
            </div>
          </div>
        </div>
        <div class="tweet-item">
          <a href class="item-left">
            <div class="circle"></div>
          </a>

          <div class="item-right">
            <div class="item-user-info d-flex">
              <a href class="user-name">John Doe</a>
              <!-- <div class="user-name">Apple</div> -->
              <a href class="user-id">@heyjohn</a>
              <!-- <div class="user-id">@apple</div> -->

              <div class="time">・3 小時</div>
            </div>
            <a
              href
              class="item-content"
            >Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</a>
            <div class="item-interaction">
              <a href class="tweet-reply">
                <img src="https://i.imgur.com/I3DHrNy.png" id="icon-reply" alt />
                <p class="reply-count">13</p>
              </a>

              <a href class="tweet-like">
                <img src="https://i.imgur.com/gCFSWst.png" id="icon-like" alt />
                <p class="like-count">76</p>
              </a>
            </div>
          </div>
        </div>

        <!-- tweet-item-test-end -->
      </div>
    </div>
  </div>
</template>


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
  width: 100%;
  position: absolute;
  top: 495px;
  left: 300px;
  background: #ffffff;
  display: flex;
}

.main-content {
  height: 100%;
  width: 600px;
  margin-left: -15px;
}

.user-image {
  height: 100%;
  width: 10%;
}

.circle {
  background: #c4c4c4;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin: 9px 10px auto 15px;
}

.tweet-item {
  border: 1px solid #e6ecf0;
  background: #ffffff;
  border-top: none;
  display: flex;
  flex-direction: row;
  padding: 2px 0px;
}

.item-user-info {
  margin: 5px auto 0px auto;
}

.user-name {
  font-weight: bold;
  font-size: 15px;
  line-height: 22px;
  color: #1c1c1c;
  order: 0;
  flex-grow: 0;
  margin: 5px 5px 5px 0px;
}

.user-id,
.time {
  font-weight: 400;
  font-size: 15px;
  line-height: 22px;
  color: #657786;
  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 5px 0px;
}

.item-content {
  font-weight: 400;
  font-size: 15px;
  line-height: 22px;
  color: #1c1c1c;
  text-align: left;
  text-justify: inter-ideograph;
}

.item-interaction {
  margin: 12px 0px;
}

.item-interaction,
.tweet-reply,
.tweet-like {
  display: flex;
  vertical-align: middle;
}

.tweet-reply,
.tweet-like {
  font-weight: 400;
  font-size: 13px;
  line-height: 13px;
  color: #657786;
}

.tweet-reply {
  width: 20%;
}

.tweet-like {
  width: 80%;
}

#icon-reply {
  width: 12.34px;
  height: 12.34px;
  margin-right: 11.35px;
}

#icon-like {
  height: 11.82px;
  width: 12.56px;
  margin-right: 11.35px;
}
</style>
