<script setup lang="ts">
import { ref } from "vue"
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
const name = ref('')
const driver = ref('')
const skills = ref('')
const maxNumberOfStop = ref('')
const capacity = ref('')
const selectedTab = ref('addresses')

const toggleTab = (tab: string) => {
    selectedTab.value = tab;
};


const toggleDetails = () => {
  showDetails.value = !showDetails.value;
};


</script>

<template>
  <transition name="slide-up">
    <section v-if="model" class="side-drawer text-gray-app overflow-auto absolute transform top-0 bottom-0 left-0 bg-[#F6F6F6] w-full h-[calc(100vh-60px)]   " >

        <div class="w-full fixed z-top">
            <div class="absolute right-3 top-3">
                <q-btn round color="white" text-color="dark" icon="close" @click="() =>emits('close')" />
            </div>
        </div>

        <div class="px-6 py-4">

            <section class="grid grid-cols-3 gap-x-4">
                <q-card class="px-6 py-4">
                    <q-card-section>
                        <div class="flex justify-between">
                            <div >
                                <div class="">
                                    <q-btn round unelevated outline color="white" text-color="dark" size="sm" icon="keyboard_arrow_left" @click="() =>emits('close')" />
                                </div>
                            </div>

                            <span class="text-center py-3 flex-1">
                                Create Vehicle
                            </span>

                            <q-btn
                                unelevated
                                dense
                                icon="menu_book"
                                text-color="primary"
                                size="md"
                                padding="4px 14px"
                                class="px-2 bg-white mr-3 mb-2 rounded-md border-primary"
                                style=" font-weight: normal; border-radius: 20px; border:1px solid;"
                            />
                        </div>
                    </q-card-section>

                    <q-card-section>
                        <div class="mb-4 grid grid-cols-1 gap-4">
                            <div>
                                <div class="mb-1 text-accent">
                                    <label>Name</label>
                                </div>

                                <div>
                                    <q-input
                                        v-model="name"
                                        dense
                                        outlined
                                    />
                                </div>
                            </div>

                            <div>
                                <div class="mb-1 text-accent">
                                    <label>Driver</label>
                                </div>

                                <div>
                                    <q-input
                                        v-model="driver"
                                        dense
                                        outlined
                                    />
                                </div>
                            </div>
                        </div>

                    </q-card-section>


                    <q-card-section class="bg-[#e8f4fd] mx-3" style="border-radius: 6px">
                        <div class="mb-4 grid grid-cols-1 gap-4">
                            <div>
                                <div class="mb-1 text-accent">

                                    <label>Skills</label>
                                </div>

                                <div>
                                    <q-input
                                        v-model="skills"
                                        dense
                                        outlined
                                    />
                                </div>
                            </div>

                            <div>
                                <div class="mb-1 text-accent">

                                    <label>Max Number of Stops</label>
                                </div>

                                <div>
                                    <q-input
                                        v-model="maxNumberOfStop"
                                        dense
                                        outlined
                                    />
                                </div>
                            </div>

                            <div>
                                <div class="mb-1 text-accent">

                                    <label>Capacity</label>
                                </div>

                                <div>
                                    <q-input
                                        v-model="capacity"
                                        dense
                                        outlined
                                    />
                                </div>
                            </div>
                        </div>

                    </q-card-section>

                </q-card>
                <q-card class="col-span-2">
                    <q-card-section style="padding: 0;">
                        <div class=" h-[calc(100vh-100px)] w-full">
                            <iframe
                                width="100%"
                                height="100%"
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3610.1715086696317!2d55.2794979!3d25.197438!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69adc43dc605%3A0x4704117ce7a04ff2!2sDubai%20Mall%20Zabeel%20Parking%20-%20Upper%20Level!5e0!3m2!1sen!2sae!4v1734420073903!5m2!1sen!2sae"
                                style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </q-card-section>


                </q-card>
            </section>
        </div>

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
