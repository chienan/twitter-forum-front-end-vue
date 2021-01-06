<template>
  <div class="container">
    <div class="main-content"></div>
  </div>
</template>

<script>
export default {
  mounted() {
    const s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "https://simple-twitter-socket.herokuapp.com/?#";
    document.body.appendChild(s);
  }
};
</script>

<style scoped>
.container {
  width: 600px;
  height: 600px;
}

.main-content {
  width: 500px;
  height: 500px;
}
</style>
