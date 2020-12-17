<template>
  <div class="container">
    <a href="./users" class="tab-tweets" :class="{choose : true}" @click="ChooseBack">推文</a>
    <a href="./users" class="tab-replies" @click="alterChoose">推文與回覆</a>
    <a href="./users" class="tab-liked" @click="alterChoose">喜歡的內容</a>
  </div>
</template>

<script>
export default {};
</script>


<style scoped>
.container {
  height: 40px;
  width: 600px;
  position: absolute;
  top: 455px;
  left: 300px;
  background: #ffffff;
  border-left: 1px solid #e6ecf0;
  border-right: 1px solid #e6ecf0;
  display: flex;
  justify-content: start;
  border-bottom: 1px solid #e6ecf0;
}

.tab-tweets,
.tab-replies,
.tab-liked {
  width: 140px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 15px;
  line-height: 22px;
  color: #657786;
  border-bottom: 1px solid #ffffff;
  padding-bottom: 10px;
}

:focus {
  border-bottom: 2px solid #ff6600;
}

.tab-tweets {
  margin-left: -15px;
}

.choose {
  border-bottom: 2px solid #ff6600;
}
</style>