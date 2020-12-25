<template>
  <div class="container">
    <div class="row main-content">
      <div class="icon-container">
        <router-link :to="{ name: 'user', params:{id: user.id}}">
          <img src="https://i.imgur.com/cyFMsT7.png" class="icon-back" alt />
        </router-link>
      </div>

      <div class="title">
        <div class="user-name">{{user.name}}</div>
        <div class="tweets-count">{{tweetsLength}}則推文</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    user: {},
    tweetsLength: {}
  }
};
</script>>
<style scoped>
.container {
  height: 55px;
  width: 600px;
  position: absolute;
  left: 300px;
  background: #ffffff;
  border: 1px solid #e6ecf0;
  border-bottom: none;
}

.main-content {
  height: 100%;
}

.icon-container {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px 19px 21px 19px;
}

.icon-back {
  width: 17px;
  height: 14px;
}

.title {
  height: 100%;

  margin: 9px auto 5px 19px;
}

.user-name {
  font-weight: 700;
  font-size: 19px;
  line-height: 18px;
  color: #1c1c1c;
}

.tweets-count {
  font-weight: 400;
  font-size: 13px;
  line-height: 19px;
  letter-spacing: 0.5px;
  color: #657786;
}
</style>
