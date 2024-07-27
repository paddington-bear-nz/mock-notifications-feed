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
                    <!--                    to easily check which notifications available_actions include  CREATE_TODO -->
                    <p class="mt-1 text-xs leading-5 text-white">{{ notification.available_actions }}</p>
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


    <NotificationGroup group="error">
      <div
          class="fixed inset-10 flex items-start justify-end p-6 px-4 py-6 pointer-events-none"
      >
        <div class="w-full max-w-sm">
          <Notification
              v-slot="{ notifications }"
              enter="transform ease-out duration-300 transition"
              enter-from="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-4"
              enter-to="translate-y-0 opacity-100 sm:translate-x-0"
              leave="transition ease-in duration-500"
              leave-from="opacity-100"
              leave-to="opacity-0"
              move="transition duration-500"
              move-delay="delay-300"
          >
            <div
                class="flex w-full max-w-sm mx-auto mt-4 overflow-hidden bg-white rounded-lg shadow-md"
                v-for="notification in notifications"
                :key="notification.id"
            >
              <div class="flex items-center justify-center w-12 bg-red-500">
                <svg class="w-6 h-6 text-white fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z"/>
                </svg>
              </div>

              <div class="px-4 py-2 -mx-3">
                <div class="mx-3"><span class="font-semibold text-red-500">{{ notification.title }}</span>
            <p class="text-sm text-gray-600">{{ notification.text }}</p>
                </div>
              </div>
            </div>
          </Notification>
        </div>
      </div>
    </NotificationGroup>

    <NotificationGroup group="generic">
  <div
    class="fixed inset-10 flex items-start justify-end p-6 px-4 py-6 pointer-events-none"
  >
    <div class="w-full max-w-sm">
      <Notification
        v-slot="{ notifications }"
        enter="transform ease-out duration-300 transition"
        enter-from="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-4"
        enter-to="translate-y-0 opacity-100 sm:translate-x-0"
        leave="transition ease-in duration-500"
        leave-from="opacity-100"
        leave-to="opacity-0"
        move="transition duration-500"
        move-delay="delay-300"
      >
        <div
          class="flex w-full max-w-sm mx-auto mt-4 overflow-hidden bg-white rounded-lg shadow-md"
          v-for="notification in notifications"
          :key="notification.id"
        >
          <div class="flex items-center justify-center w-12 bg-blue-500">
            <svg class="w-6 h-6 text-white fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21.6667 28.3333H18.3334V25H21.6667V28.3333ZM21.6667 21.6666H18.3334V11.6666H21.6667V21.6666Z"/>
            </svg>
          </div>

          <div class="px-4 py-2 -mx-3">
            <div class="mx-3">
              <span class="font-semibold text-blue-500">{{ notification.title }}</span>
              <p class="text-sm text-gray-600">{{ notification.text }}</p>
            </div>
          </div>
        </div>
      </Notification>
    </div>
  </div>
</NotificationGroup>

    <NotificationGroup group="success">
  <div
    class="fixed inset-10 flex items-start justify-end p-6 px-4 py-6 pointer-events-none"
  >
    <div class="w-full max-w-sm">
      <Notification
        v-slot="{ notifications }"
        enter="transform ease-out duration-300 transition"
        enter-from="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-4"
        enter-to="translate-y-0 opacity-100 sm:translate-x-0"
        leave="transition ease-in duration-500"
        leave-from="opacity-100"
        leave-to="opacity-0"
        move="transition duration-500"
        move-delay="delay-300"
      >
        <div
          class="flex w-full max-w-sm mx-auto mt-4 overflow-hidden bg-white rounded-lg shadow-md"
          v-for="notification in notifications"
          :key="notification.id"
        >
          <div class="flex items-center justify-center w-12 bg-green-500">
            <svg class="w-6 h-6 text-white fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z" />
            </svg>
          </div>

          <div class="px-4 py-2 -mx-3">
            <div class="mx-3">
              <span class="font-semibold text-green-500">{{ notification.title }}</span>
              <p class="text-sm text-gray-600">{{ notification.text }}</p>
            </div>
          </div>
        </div>
      </Notification>
    </div>
  </div>
</NotificationGroup>

  </div>

</template>

<script>
import axios from "axios";
import Avatar from "vue3-avatar";
import {Notification, NotificationGroup} from 'notiwind'


export default {
  name: "Notifications",
  components: {
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
      }
      else {
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


