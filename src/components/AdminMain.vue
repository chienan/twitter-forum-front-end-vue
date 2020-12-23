<template>
  <div>
    <ul class="list-group rounded-0" style="width: 1063px; height: 1202px">
      <li class="list-group-item group-item-border bold">推文清單</li>

      <li
        class="list-group-item d-flex flex-row"
        v-for="admintweet in initialAdmintweets"
        :key="admintweet.id"
      >
        <div>
          <img
            :src="admintweet.User.avatar"
            alt=""
            class="circle"
            style="width: 50px; height: 50px"
          />
        </div>
        <div class="ml-3 apple">
          <div>
            <span class="bold">{{ admintweet.User.name }}</span
            ><span style="color: #657786"
              >@{{ admintweet.User.account }}・{{
                admintweet.createdAt | fromNow
              }}</span
            >

            <div>
              <button type="button" @click="deleteAdminTweet(admintweet.id)">
                <span class="d-flex justify-content-end cross1-relative">
                  <img
                    src="https://i.postimg.cc/d3tcy7N0/Vector-3.png"
                    alt=""
                    class="cross1"
                  />
                </span>
              </button>
            </div>
          </div>
          <p class="info1">
            {{ admintweet.description }}
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { fromNowFilter } from "../utils/mixins.js";
import AdminTweetsAPI from "../apis/admin.js";
import { Toast } from "../utils/helpers.js";
export default {
  mixins: [fromNowFilter],
  name: "AdminMain",
  props: {
    initialAdmintweets: {
      type: Array,
      required: true,
    },
  },
  // data() {
  //   return {
  //     Admintweets: {},
  //   };
  // },

  // created() {
  //   this.fetchAdmintweet();
  // },

  // watch: {
  //   initialAdmintweets(newValue, oldValue) {
  //     console.log("watch", { newValue, oldValue });
  //     this.initialAdmintweets = {
  //       ...newValue,
  //     };
  //   },
  // },

  methods: {
    async deleteAdminTweet(admintweetId) {
      try {
        const response = await AdminTweetsAPI.adminTweets.delete({
          admintweetId,
        });
        console.log(response);
        const { data } = response;
        if (data.status !== "success") {
          throw new Error(data.message);
        }
      } catch (error) {
        console.log("error", error);
        Toast.fire({
          icon: "error",
          title: "無法刪除推文，請稍後再試",
        });
      }
      // console.log(admintweetId);
      this.$emit("after-delete-admintweet", admintweetId);
    },

    // fetchAdmintweet() {
    //   this.Admintweets = {
    //     ...this.Admintweets,
    //     ...this.initialAdmintweets,
    //   };
    // },
  },
};
</script>

<style scoped>
.bold {
  font-weight: bold;
}
.list-group {
  height: 100%;
}
.list-group-item {
  /* border-left: none; */
}
.group-item-border {
  border-top: none;
  font-size: 18px;
}
.circle {
  margin-top: 5px;
  margin-left: -5px;
  border-radius: 50%;
}
.apple {
  margin-top: 3px;
}
.cross1-relative {
  position: relative;
}
.cross1 {
  position: absolute;
  top: -40px;
  right: -960px;
  height: 12px;
  width: 12px;
}
.info1 {
  margin-top: -20px;
}
</style>
