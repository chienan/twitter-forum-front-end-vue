<template>
  <div class="container">
    <a href class="tab-tweets">推文</a>
    <a href class="tab-replies">推文與回覆</a>
    <a href class="tab-liked">喜歡的內容</a>
  </div>
</template>

<script>
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
  /* border: 1px solid seagreen; */
}

.tab-tweets,
.tab-replies,
.tab-liked {
  width: 140px;
  height: 100%;
  /* border: 1px solid salmon; */
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 15px;
  line-height: 22px;
  color: #657786;
}

:focus {
  border-bottom: 2px solid #ff6600;
}

.tab-tweets {
  margin-left: -15px;
}
</style>