<template>
  <div class="d-flex">
    <div>
      <NavBar />
    </div>

    <div class="main-content">
      <UserProfileDetail />
      <UserProfileNav />
      <UserProfileNavTabs />
    </div>

    <div>
      <FollowRecommend />
    </div>
  </div>
</template>

<script>
import NavBar from "../components/NavBar";
import FollowRecommend from "../components/FollowRecommend";
import UserProfileDetail from "../components/UserProfileDetail";
import UserProfileNav from "../components/UserProfileNav";
import UserProfileNavTabs from "../components/UserProfileNavTabs";
export default {
  components: {
    NavBar,
    FollowRecommend,
    UserProfileDetail,
    UserProfileNav,
    UserProfileNavTabs
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

/* style start */
/* .main-content {
  display: flex;
  flex-direction: column;
} */
</style>