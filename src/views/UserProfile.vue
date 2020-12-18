<template>
  <div class="d-flex">
    <div>
      <NavBar />
    </div>

    <div class="main-content">
      <UserProfileNav />
      <UserProfileDetail />

      <UserProfileNavTabs />
      <!-- <UserProfileTweets /> -->
      <!-- <UserProfileReplied /> -->
      <UserProfileLiked />
    </div>

    <div>
      <FollowRecommend />
    </div>
  </div>
</template>

<script>
import NavBar from "../components/NavBar";
import FollowRecommend from "../components/FollowRecommend";
import UserProfileNav from "../components/UserProfileNav";
import UserProfileDetail from "../components/UserProfileDetail";

import UserProfileNavTabs from "../components/UserProfileNavTabs";
// import UserProfileTweets from "../components/UserProfileTweets";
// import UserProfileReplied from "../components/UserProfileReplied";
import UserProfileLiked from "../components/UserProfileLiked";

export default {
  components: {
    NavBar,
    FollowRecommend,
    UserProfileNav,
    UserProfileDetail,

    UserProfileNavTabs,
    // UserProfileTweets,
    // UserProfileReplied,
    UserProfileLiked
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