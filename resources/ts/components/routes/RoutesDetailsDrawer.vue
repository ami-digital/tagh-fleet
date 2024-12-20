<script setup lang="ts">

import DashboardRoutesTable from "../dashboard/DashboardRoutesTable.vue";
import RoutsOrderItemsTable from "./RoutsOrderItemsTable.vue";
import RoutesDetailsOrderInfoSection from "./RoutesDetailsOrderInfoSection.vue";
import RoutesDetailsOrderDeliverySection from "./RoutesDetailsOrderDeliverySection.vue";

const model = defineModel({required: true, default: false});

interface Props {
    isLoaderActive?: boolean;
    isCreateLoaderActive?: boolean;
}


withDefaults(defineProps<Props>(), {isLoaderActive: true, isCreateLoaderActive: false});

const emits = defineEmits<{
    (e: 'close'): void;
    (e: 'onSubmit'): void;


}>();


const showDetails = ref(false);


const showUpdatedETA = ref(false);


const toggleDetails = () => {
    showDetails.value = !showDetails.value;
};


</script>

<template>
    <transition name="slide-up">
        <section v-if="model"
                 class="side-drawer  text-gray-app overflow-auto absolute transform top-0 bottom-0    bg-white  w-full    ">

            <div class="w-full relative">
                <div class="absolute right-3 z-fullscreen top-3">
                    <q-btn round color="blue" icon="close" @click="() =>emits('close')"/>

                </div>
            </div>

            <section class="grid grid-cols-2 h-full overflow-y-auto relative">

                <div class="p-5">
                    <RoutesDetailsOrderDeliverySection/>
                    <RoutesDetailsOrderInfoSection/>
                </div>


                <div class="  w-full p-5">
                    <div class="h-[30vh]">
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3610.1715086696317!2d55.2794979!3d25.197438!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69adc43dc605%3A0x4704117ce7a04ff2!2sDubai%20Mall%20Zabeel%20Parking%20-%20Upper%20Level!5e0!3m2!1sen!2sae!4v1734420073903!5m2!1sen!2sae"
                            style="border:0;" allowfullscreen="" loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>


                    <div class="mt-5">
                        <p class="text-center text-xl">Tracking Portal</p>
                        <div class="flex items-center justify-center">
                            <div
                                class="border px-3  py-1 rounded-tl-lg rounded-bl-lg border-blue-500 text-blue-500   border-r-0">
                                https://tracksr.io/5TzbVA
                                <button
                                    class="text-gray-500 hover:text-gray-700"
                                >
                                    📋
                                </button>
                            </div>
                            <div
                                class="border px-3  py-1 rounded-tr-lg rounded-br-lg border-blue-500 bg-blue-500   text-white  cursor-pointer hover:bg-blue-600  border-l-0">
                                View Tracking Portal
                            </div>
                        </div>
                    </div>

                    <div class="mt-5">
                        <p class="text-center text-xl">Notifications</p>
                        <div class="bg-blue-100 shadow rounded-lg p-4">

                            <div class="text-sm text-gray-600">

                                <div class="flex items-center justify-between">
                                    <p class="mb-1 text-black text-md">On Start Route SMS</p>
                                    <div>
                                        <p class="mb-0 text-xs text-right   ">Delivered</p>
                                        <p class="mb-0 font-semibold  text-xs">07:38, December 20</p>
                                    </div>
                                </div>
                                <textarea
                                    readonly
                                    rows="3"
                                    class="w-full border border-gray-300 rounded px-3 py-2"
                                >Hi, Your Driver is on the way with your order and will be delivered today.</textarea>
                            </div>
                        </div>
                    </div>


                </div>

                <section class="absolute bottom-0 w-full    p-3">
                    <div class="flex items-center justify-between">
                        <div class="space-x-3">
                            <q-btn
                                dense
                                outline
                                color="secondary"

                            >
                                <div  class="px-2">
                                    <q-icon size="1rem" name="print" />
                                    <span class="text-[12px] ml-1">
                              Print
                           </span>
                                </div>


                            </q-btn>

                            <q-btn
                                dense
                                outline
                                color="secondary"
                            >
                                <div  class="px-2">
                                    <q-icon size="1rem" name="print" />
                                    <span class="text-[12px] ml-1">
                              Packing Slip
                           </span>
                                </div>


                            </q-btn>

                            <q-btn
                                dense
                                outline
                                color="secondary"
                            >
                                <div  class="px-2">
                                    <q-icon size="1rem" name="print" />
                                    <span class="text-[12px] ml-1">
                              Print Label
                           </span>
                                </div>
                            </q-btn>
                            <q-btn
                                dense
                                unelevated

                                color="secondary"
                            >
                                <div  class="px-2">
                                    <q-icon size="1rem" name="edit" />
                                    <span class="text-[12px] ml-1">
                              Edit Stop
                           </span>
                                </div>
                            </q-btn>
                        </div>

                        <div class="space-x-3">
                            <q-btn
                                dense
                                outline
                                color="red"
                                style=" font-weight: normal "
                            >
                                <div  class="px-2">

                                    <span class="text-[12px] ml-1">
                              Close
                           </span>
                                </div>


                            </q-btn>
                            <q-btn
                                dense
                                unelevated
                                color="secondary"
                            >
                                <div  class="px-2">

                                    <span class="text-[12px] ml-1">
                              Prev
                           </span>
                                </div>


                            </q-btn>
                            <q-btn
                                dense
                                unelevated
                                color="secondary"
                            >
                                <div  class="px-2">

                                    <span class="text-[12px] ml-1">
                              Next
                           </span>
                                </div>


                            </q-btn>

                        </div>
                    </div>

                </section>
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
