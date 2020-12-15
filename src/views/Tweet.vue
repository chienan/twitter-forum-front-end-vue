<template>
  <div>
    <div>
      <!--NavBar-->
      <NavBar />
    </div>

    <div>
      <!-- TweetsDetail -->
      <TweetsDetail />
    </div>

    <div>
      <!-- FollowRecommend -->
      <FollowRecommend />
    </div>

    <div style="display: none">
      <!-- RepliedContent -->
      <RepliedContent />
    </div>
  </div>
</template> 

<script>
import TweetsDetail from "../components/TweetsDetail.vue";
import RepliedContent from "../components/RepliedContent.vue";

export default {
  components: {
    TweetsDetail,
    RepliedContent,
  },
};
</script>


