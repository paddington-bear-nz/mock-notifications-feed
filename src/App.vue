<template>

  <div>

    <header class="border-b-2 border-white border-opacity-50 py-5 sticky top-0 bg-ask-nicely-header-purple z-50">
      <h2 class="text-xl font-semibold text-white text-center">Notifications</h2>
    </header>

    <div class="bg-gradient-to-b from-ask-nicely-purple to-ask-nicely-blue min-h-screen flex flex-col">


      <div>
        <ul role="list" class="divide-y divide-gray-500 divide-opacity-50">
          <li v-for="notification in notifications" :key="notification.id" class="flex justify-between p-4 md:p-5">
            <div class="flex flex-col gap-x-4 w-full md:w-3/4 mx-auto cursor-pointer"
                 @click="handleCreateToDo(notification)">
              <div class="flex items-center relative">
             <span v-if="notification.read === false"
                   class="absolute top-1/2 -translate-y-1/2 left-[-10px] flex-shrink-0 h-1 w-1 bg-gray-300 rounded-full"></span>
                <avatar :name="notification.author" :border="false"></avatar>
                <div class="flex-auto ml-2">
                  <p class="text-xs md:text-sm font-semibold leading-6 text-white">{{ notification.title }}</p>
                  <div class="col-span-2">
                    <p class="mt-1 text-xs leading-5 text-white">{{ notification.preview_text }}</p>
                  </div>
                  <div class="col-span-2">
                    <p class="mt-1 text-xs leading-5 text-ask-nicely-light-gray">
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
    <footer class="bg-ask-nicely-gray-dark sticky bottom-0">
      <div class="md:w-1/2 mx-auto p-3">
        <ul class="flex flex-wrap items-center justify-between text-sm font-medium text-white">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#" class="text-ask-nicely-light-gray">Notifications</a>
          </li>
          <li>
            <a href="#">Logout</a>
          </li>
        </ul>
      </div>
    </footer>

    <notification-alert/>
  </div>

</template>

<script>
import axios from "axios";
import Avatar from "vue3-avatar";
import {Notification, NotificationGroup} from 'notiwind'
import NotificationAlert from "./components/NotificationAlert.vue";


export default {
  name: "Notifications",
  components: {
    NotificationAlert,
    NotificationGroup,
    Notification,
    Avatar,
  },
  data() {
    return {
      notifications: [],

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
          this.$notify({
            group: "success",
            title: "Success",
            text: "This notification has been submitted successfully",
          }, 4000);

        } catch (error) {
          this.$notify({
            group: "error",
            title: "Error",
            text: "Unable to submit notification data",
          }, 4000);
        }
      } else {
        this.$notify({
          group: "generic",
          title: "Information",
          text: "This notification does not qualify for submission",
        }, 2000);
      }
    },

  },

  async mounted() {
    try {
      let response = await axios.get("https://testau.asknice.ly/api/v1/candidate-test/mock-notifications");
      this.notifications = response.data.data;
    } catch (error) {
      alert('Error fetching data')
      console.error("Error fetching data:", error);
    }
  },


};
</script>


