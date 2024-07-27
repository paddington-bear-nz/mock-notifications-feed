<template>
  <div class="bg-gradient-to-b from-[#6b097a] to-[#274bdb] min-h-screen flex flex-col">

    <header class="border-b-2 border-white border-opacity-50 py-5 sticky top-0">
      <h2 class="text-xl font-semibold text-white text-center">Notifications</h2>
    </header>
    <div>
      <ul role="list" class="divide-y divide-gray-500 divide-opacity-50">
        <li v-for="notification in notifications" :key="notification.id" class="flex justify-between p-5">
          <div class="flex flex-col gap-x-4 w-1/2 mx-auto cursor-pointer" @click="handleCreateToDo(notification)">
            <div class="flex items-center">
              <span v-if="notification.read === false"
                    class="inline-block h-1.5 w-1.5 bg-gray-300 rounded-full mr-2"></span>
              <avatar :name="notification.author" :border="false"></avatar>
              <div class="flex-auto ml-2">
                <p class="text-sm font-semibold leading-6 text-white">{{ notification.title }}</p>
                <div class="col-span-2">
                  <p class="mt-1 text-xs leading-5 text-white">{{ notification.preview_text }}</p>
                  <p class="mt-1 text-xs leading-5 text-white">{{ notification.available_actions }}</p>
                </div>
                <div class="col-span-2">
                  <p class="mt-1 text-xs leading-5 text-[#FFFFFF99]">
                    {{ notification.author }}
                    <span class="float-right">{{ notification.created }}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>

  </div>
  <footer class="bg-[#2f384c] opacity-75 sticky bottom-0">
    <div class="w-1/2 mx-auto p-3">
      <ul class="flex flex-wrap items-center justify-between text-sm font-medium text-gray-400">
        <li>
          <a href="#" class="hover:text-white">Home</a>
        </li>
        <li>
          <a href="#" class="text-white">Notifications</a>
        </li>
        <li>
          <a href="#" class="hover:text-white">Logout</a>
        </li>
      </ul>
    </div>
  </footer>


</template>

<script>
import axios from "axios";
import Avatar from "vue3-avatar";

export default {
  name: "Notifications",
  components: {
    Avatar,
  },
  data() {
    return {
      notifications: []
    };
  },
  methods: {

    async handleCreateToDo(notification) {
      if (notification.available_actions.includes("CREATE_TODO")) {
        try {
          let submission = await axios.post("https://testau.asknice.ly/api/v1/candidate-test/mock-action", {
            id: notification.id,
            action: "TODO"
          });
          console.log(submission.data);
        } catch (error) {
          alert('Error submitting data')
          console.error("Error submitting data:", error);
        }
      }
    }
  },

  async mounted() {
    try {
      let response = await axios.get("https://testau.asknice.ly/api/v1/candidate-test/mock-notifications");
      this.notifications = response.data.data;
    } catch (error) {
      alert('Error fetching data')
      console.error("Error fetching data:", error);
    }
  }

};
</script>


