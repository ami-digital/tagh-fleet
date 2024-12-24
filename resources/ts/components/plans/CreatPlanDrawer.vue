<script setup lang="ts">
import { ref } from "vue"


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

const planName = ref('Plan 1');
const routeDate = ref('24/12/2024');

const menageStops = ref(false);

const  addStopManually = () => {
    menageStops.value = true;
}

</script>

<template>
  <transition name="slide-up">
    <section v-if="model" class="side-drawer text-gray-app overflow-auto absolute transform top-0 bottom-0 left-0 bg-[#F6F6F6] w-full h-[calc(100vh-60px)]   " >

        <div class="w-full fixed z-top">
            <div class="absolute right-3 top-3">
                <q-btn round color="white" text-color="dark" icon="close" @click="() =>emits('close')" />
            </div>
        </div>

        <div class="px-4 py-4">

            <section class="grid grid-cols-4 gap-x-4">
                <q-card class="p-2">

                    <section>
                        <q-card-section class="q-pb-none">
                            <div class="grid grid-cols-2 gap-x-2" >
                                <div>
                                    <div class="">
                                        <div class="mb-4 flex gap-2 text-accent">
                                            <span>Plan Name:</span>
                                        </div>
                                        <div>
                                            <span>
                                                {{planName}}
                                                 <q-btn
                                                     unelevated
                                                     padding="4px"
                                                     size="xs"
                                                     text-color="primary"
                                                     @click.stop=""
                                                     icon="border_color"
                                                 >

                                                <q-menu anchor="bottom right" self="top right">
                                                    <q-item>
                                                        <div class="flex no-wrap search-input">
                                                            <div>
                                                                <q-input
                                                                     v-model="planName"
                                                                     outlined
                                                                     dense
                                                                     class="text-gray-app min-w-[200px] bg-white"
                                                                     placeholder="Type Plan Name"
                                                                >
                                                                </q-input>
                                                            </div>

                                                            <q-btn
                                                                label="Save"
                                                                dense
                                                                color="primary"
                                                                unelevated
                                                                size=""
                                                                padding="8px 14px"
                                                                class="mx-2"
                                                                v-close-popup
                                                            />
                                                        </div>
                                                    </q-item>
                                                </q-menu>
                                            </q-btn>
                                            </span>
                                        </div>

                                    </div>
                                </div>

                                <div>
                                    <div class="">
                                        <div class="mb-1 flex gap-2 text-accent">
                                            <span>Route Date:</span>
                                        </div>
                                        <div>
                                            <q-input dense v-model="routeDate" mask="date" :rules="['date']">
                                                <template v-slot:append>
                                                    <q-icon name="event" class="cursor-pointer">
                                                        <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                                                            <q-date v-model="routeDate">
                                                                <div class="row items-center justify-end">
                                                                    <q-btn v-close-popup label="Close" color="primary" flat />
                                                                </div>
                                                            </q-date>
                                                        </q-popup-proxy>
                                                    </q-icon>
                                                </template>
                                            </q-input>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </q-card-section>
                        <q-separator />
                    </section>

                    <section class="h-[42vh] overflow-y-auto border-b">
                        <q-card-section>
                            <div class="flex justify-between">
                                <div class="font-semibold text-[16px]">
                                    {{menageStops ? 'Manage Stops' : 'Stops'}}
                                    <span class="bg-primary text-white text-center rounded-full px-1.5 py-0.5 w-7 inline-block font-normal">0</span>
                                </div>
                                <div v-if="menageStops">
                                    <q-btn
                                        label="Done"
                                        color="primary"
                                        unelevated
                                        dense
                                        icon="check"
                                        padding="4px 6px"
                                        size="sm"
                                        @click="menageStops = false"
                                    />
                                </div>
                            </div>
                        </q-card-section>

                        <q-card-section v-if="!menageStops" style="padding-top: 0">
                            <div class="text-accent">
                                Add stops to your plan to get started
                            </div>

                            <div>
                                <q-card
                                    bordered
                                    padding="14px 24px"
                                    v-ripple
                                    class="w-full bg-primary cursor-pointer  text-white px-6 py-3 my-4"
                                    @click="addStopManually"
                                >
                                    <q-card-section class="flex items-center q-pa-none">
                                        <q-icon
                                            name="note_add"
                                            color="white"
                                            size="sm"
                                            class="bg-[#1529514a] p-3 rounded-full mr-4"
                                        />

                                        <div>
                                            <p class="p-0 m-0 font-semibold text-lg">Manually</p>
                                            <span class="text-xs">
                                            Add stops one by one
                                        </span>
                                        </div>
                                    </q-card-section>
                                </q-card>
                            </div>
<!--                            <div>-->
<!--                                <q-card-->
<!--                                    bordered-->
<!--                                    padding="14px 24px"-->
<!--                                    v-ripple-->
<!--                                    class="w-full bg-white cursor-pointer  text-accent group:plan-card px-6 py-3 my-4"-->
<!--                                    @click="() =>emits('onCreat')"-->
<!--                                >-->
<!--                                    <q-card-section class="flex items-center q-pa-none">-->
<!--                                        <q-icon-->
<!--                                            name="upload_file"-->
<!--                                            color="white"-->
<!--                                            size="sm"-->
<!--                                            class="bg-[#1529514a] p-3 rounded-full mr-4"-->
<!--                                        />-->
<!--                                        <div>-->
<!--                                            <p class="p-0 m-0 font-semibold text-lg">Upload</p>-->
<!--                                            <span class="text-xs">Upload an Excel/Cdv of your data</span>-->
<!--                                        </div>-->
<!--                                    </q-card-section>-->
<!--                                </q-card>-->
<!--                            </div>-->
                        </q-card-section>
                    </section>

                    <section class="h-[42vh] overflow-y-auto ">
                        <q-card-section>
                            <div class="">
                                <div class="font-semibold text-[16px]">
                                    Vehicles
                                    <span class="bg-primary text-white text-center rounded-full px-1.5 py-0.5 w-7 inline-block font-normal">1</span>
                                </div>
                            </div>
                        </q-card-section>

                        <q-card-section>
                            <q-btn
                                label="Manage Vehicles"
                                unelevated
                                outline
                                color="primary"
                                style="width: 100%"
                                icon="directions_car"
                                dense
                            />
                        </q-card-section>
                    </section>


                </q-card>
                <q-card class="col-span-3">
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

.input-group {
    font-size: 14px;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.88);
}

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
