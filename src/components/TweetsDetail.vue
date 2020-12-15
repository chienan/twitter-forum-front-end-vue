<template>
  <div class="d-flex justify-content-center" id="tweets-detail">
    <ul class="list-group rounded-0" style="width: 450px; height: 700px">
      <li class="list-group-item" style="height: 50px; border-top: none">
        <div class="d-flex flex-row">
          <div>
            <img src="https://i.postimg.cc/4N8M37VK/Vector-1.png" alt="" />
          </div>
          <div>
            <h6 class="bold ml-5 mt-1">推文</h6>
          </div>
        </div>
      </li>
      <li class="list-group-item" style="border-bottom: none">
        <div class="d-flex flex-row">
          <div>
            <img
              src="https://i.postimg.cc/cHxqRxr2/Post-Photo.png"
              alt=""
              class="Photo"
            />
          </div>
          <div>
            <p class="bold">Apple</p>
            <p class="color-gray">@apple</p>
          </div>
        </div>

        <div class="bold text">
          Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco
          cillum dolor. Voluptate exercitation incididunt aliquip deserunt
          reprehenderit elit laborum.
        </div>
        <small class="color-gray time">上午 10:05・2020年6月10日 </small>
        <hr />
      </li>
      <li class="list-group-item" style="border-bottom: none">
        <div class="d-flex flex-row tset">
          <div>
            <!-- class="tset" -->
            <span class="bold">34</span
            ><span class="color-gray bold"> 回覆</span>
          </div>
          <div>
            <span class="bold">808</span
            ><span class="color-gray bold"> 喜歡次數</span>
          </div>
        </div>
        <hr />
      </li>

      <li class="list-group-item">
        <img src="https://i.postimg.cc/XvZcgXrz/Vector.png" alt="" />
        <img src="https://i.postimg.cc/MpShN275/Vector.png" alt="" />
      </li>

      <li class="list-group-item d-flex flex-row">
        <div>
          <img src="https://i.postimg.cc/htX7k6KJ/Photo.png" alt="" />
        </div>
        <div>
          <span class="bold">Mary Jane</span>
          <span class="color-gray">@mjjane・13 小時</span>
          <div>
            <span class="color-gray bold"> 回覆 </span>
            <span style="color: #ff6600">@apple</span>
          </div>

          <p>Great~</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.bold {
  font-weight: bold;
}
.color-gray {
  color: #657786;
}
.Photo {
  margin-left: -6px;
}
.text {
  margin-left: -3px;
}
.time {
  margin-left: -3px;
}
hr {
  margin-left: -6px;
}
.tset {
  padding-top: -60px;
}
</style>