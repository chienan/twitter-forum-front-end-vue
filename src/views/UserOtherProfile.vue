<template>
  <div class="d-flex">
    <div>
      <NavBar />
    </div>

    <div class="main-content">
      <UserOtherNav />
      <UserOtherDetail />
      <UserOtherNavTabs />
      <!-- main contents -->
      <!-- <UserOtherTweets /> -->
      <!-- <UserOtherReplies /> -->
      <UserOtherLiked />
    </div>

    <div>
      <FollowRecommend />
    </div>
  </div>
</template>

<script>
import NavBar from "../components/NavBar";
import FollowRecommend from "../components/FollowRecommend";
import UserOtherNav from "../components/UserOtherNav";
import UserOtherDetail from "../components/UserOtherDetail";
import UserOtherNavTabs from "../components/UserOtherNavTabs";
// import UserOtherTweets from "../components/UserOtherTweets";
// import UserOtherReplies from "../components/UserOtherReplies";
import UserOtherLiked from "../components/UserOtherLiked";

export default {
  components: {
    NavBar,
    FollowRecommend,
    UserOtherNav,
    UserOtherDetail,
    UserOtherNavTabs,
    // UserOtherTweets,
    // UserOtherReplies,
    UserOtherLiked
  }
};
</script>


<style scoped>
/* CSS reset  */
body {
  margin: 0;
  padding: 0;
  display: block;
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
</style>