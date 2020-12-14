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

    <div>
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
    TweetsDetail: TweetsDetail,
    RepliedContent,
  },
};
</script>


