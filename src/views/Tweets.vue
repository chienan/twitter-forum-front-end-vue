<template>
  <div>
    <h1>Tweets</h1>

    <div>
      <NavBar />
    </div>

    <div>
      <MainTweets />
    </div>

    <div>
      <FollowRecommend />
    </div>
  </div>
</template>

<script>
import NavBar from "../components/NavBar";
import MainTweets from "../components/MainTweets";
import FollowRecommend from "../components/FollowRecommend";

export default {
  components: {
    NavBar,
    MainTweets,
    FollowRecommend
  }
};
</script>