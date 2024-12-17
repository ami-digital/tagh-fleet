<script setup lang="ts">

import DashboardRoutesTable from "../routes/DashboardRoutesTable.vue";

const model = defineModel({required : true, default: false});

interface Props {
  isLoaderActive?: boolean;
  isCreateLoaderActive?: boolean;
}



withDefaults(defineProps<Props>() , {isLoaderActive : true ,isCreateLoaderActive : false });

const emits = defineEmits<{
  (e : 'close'): void;
  (e : 'onSubmit'): void;


}>();



const showDetails = ref(false);


const showUpdatedETA = ref(false);


const toggleDetails = () => {
  showDetails.value = !showDetails.value;
};


</script>

<template>
  <transition name="slide-up">
    <section v-if="model" class="side-drawer  text-gray-app overflow-auto absolute transform top-0 bottom-0    bg-white  w-full    " >

      <div class="w-full relative">
        <div class="absolute right-3 top-3">
          <q-btn round color="blue" icon="close" @click="() =>emits('close')" />

        </div>
      </div>

      <section class="grid grid-cols-2">

        <div class="p-5">
          <div class="grid grid-cols-1 md:grid-cols-6 gap-y-4 md:gap-0 items-center">

            <!-- Location -->
            <div class="text-[12px] font-medium text-gray-400 flex items-center">
              <q-icon size="1.2rem" color="blue" class="mr-1" name="public" />
              <span class="line-clamp-1 w-full md:w-9/12">south london/south coast</span>
            </div>

            <!-- Vehicle -->
            <div class="text-[12px] font-medium text-gray-400 flex items-center">
              <q-icon size="1.2rem" color="blue" class="mr-1" name="local_shipping" />
              <span class="line-clamp-1 w-full md:w-9/12">KX68 XKD</span>
            </div>

            <!-- Driver -->
            <div class="text-[12px] font-medium text-gray-400 flex items-center">
              <q-icon size="1.2rem" color="blue" class="mr-1" name="person" />
              <span class="line-clamp-1 w-full md:w-9/12">Bilal Hussain</span>
            </div>

            <!-- Date -->
            <div class="text-[12px] font-medium text-gray-400 flex items-center">
              <q-icon size="1.2rem" color="blue" class="mr-1" name="calendar_today" />
              <span class="line-clamp-1 w-full md:w-9/12">December 21</span>
            </div>

            <!-- Buttons -->
            <div class="col-span-1 md:col-span-2 flex flex-wrap justify-end gap-2">
              <q-btn
                  label="Edit Route"
                  unelevated
                  dense
                  icon="edit"
                  color="blue"
                  size="md"
                  padding="4px 14px"
                  class="rounded-md"
              />

              <q-btn
                  outline
                  padding="xs"
                  color="blue"
                  icon="print"
                  class="rounded-md"
              />

              <q-btn
                  outline
                  padding="xs"
                  color="blue"
                  icon="download"
                  class="rounded-md"
              />
            </div>
          </div>


          <section class="mt-3">
            <div class="p-4 border border-gray-200 rounded-md shadow-md">
              <!-- Summary Information -->
              <div class=" grid grid-cols-2 text-sm text-gray-500   ">

                <div class="flex ">
                  <p>Completed: <span class="font-medium">0/11</span></p>
                  <p>Failed: <span class="font-medium">0/11</span></p>
                  <p>Outstanding: <span class="font-medium">0/11</span></p>
                </div>



                <!-- Action Buttons -->
                <div class="flex justify-end space-x-2">
                  <q-icon name="edit" class="text-blue-500 cursor-pointer" size="1.2rem" />
                  <q-icon name="delete" class="text-red-500 cursor-pointer" size="1.2rem" />
                  <q-icon name="check" class="text-green-500 cursor-pointer" size="1.2rem" />
                  <div>
                    <q-btn
                        unelevated
                        dense
                        icon="keyboard_arrow_down"
                        color="blue"
                        size="sm"
                        class="rounded-md"
                        @click="toggleDetails"
                    />
                  </div>

                </div>
              </div>


              <div v-if="showDetails" class="mt-4 bg-blue-50 p-3 rounded-md">
                <div class="grid grid-cols-2 gap-4 text-gray-600 text-sm">
                  <div>
                    <p>Started Time: <span class="font-semibold">Not Started</span></p>
                    <p>Completed Time: <span class="font-semibold">Not Completed</span></p>
                    <p>Sequence: <span class="font-semibold">Not Completed</span></p>
                  </div>
                  <div>
                    <p>Planned Distance: <span class="font-semibold">580.98 Miles</span></p>
                    <p>Actual Distance: <span class="font-semibold">-</span></p>
                    <div class="flex items-center space-x-2">
                      <span>Show Updated ETA:</span>
                      <q-toggle v-model="showUpdatedETA" color="blue" />
                    </div>
                  </div>
                </div>
                <div class="flex justify-center mt-3">
                  <q-btn
                      unelevated
                      dense

                      icon="keyboard_arrow_up"
                      color="blue"
                      size="sm"
                      class="rounded-md"
                      @click="toggleDetails"
                  />
                </div>
              </div>
            </div>
          </section>

          <section class="mt-2">
            <DashboardRoutesTable />
          </section>
        </div>


        <div class="h-screen w-full">
          <iframe
              width="100%"
              height="100%"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3610.1715086696317!2d55.2794979!3d25.197438!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69adc43dc605%3A0x4704117ce7a04ff2!2sDubai%20Mall%20Zabeel%20Parking%20-%20Upper%20Level!5e0!3m2!1sen!2sae!4v1734420073903!5m2!1sen!2sae"
              style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

        </div>
      </section>


    </section>

  </transition>
</template>

<style scoped>
.side-drawer {
  box-shadow: rgba(17, 17, 26, 0.1) 0 4px 16px, rgba(17, 17, 26, 0.1) 0 8px 24px, rgba(17, 17, 26, 0.1) 0 16px 56px;
}

.drawer-body {
  max-height: calc(100vh - 160px);
}

/* Slide up transition with delay */
.side-drawer-enter-active, .side-drawer-leave-active {
  transition: transform 0.5s ease, opacity 0.5s ease;
  transition-delay: 0.2s; /* Add delay for entry */
}

.side-drawer-enter, .side-drawer-leave-to {
  transform: translateY(100%);
  opacity: 0; /* Make it invisible when leaving */
}

.side-drawer-enter-to, .side-drawer-leave {
  transform: translateY(0);
  opacity: 1; /* Ensure it becomes visible when entering */
}
</style>
