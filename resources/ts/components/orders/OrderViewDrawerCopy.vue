<script setup lang="ts">
import {onMounted, ref} from "vue";
import CustomerStops from "./CustomerStops.vue";
import CustomerInfo from "./CustomerInfo.vue";
import OrderHistory from "./OrderHistory.vue";

const model = defineModel({required : true, default: false});
const tab = ref('edit');
const splitterModel = ref(20);

interface Props {
  isLoaderActive?: boolean;
  isCreateLoaderActive?: boolean;
}

withDefaults(defineProps<Props>() , {isLoaderActive : true ,isCreateLoaderActive : false });

const emits = defineEmits<{
  (e : 'close'): void;
  (e : 'onSubmit'): void;

}>();

</script>

<template>
  <transition name="slide-up">
    <section v-if="model" class="side-drawer  text-gray-app overflow-auto absolute transform top-0 bottom-0    bg-[#F6F6F6]  w-full    " >
        <div>
            <div class="flex h-[calc(100vh-60px)] ">
                <div class="w-full fixed z-top">
                    <div class="absolute right-3 top-3">
                        <q-btn round  icon="close" @click="() =>emits('close')" />
                    </div>
                </div>

                <!-- Sidebar Tabs -->
                <div class="w-[200px]  shadow-md">
                    <q-tabs
                        v-model="tab"
                        vertical
                        active-color="primary"
                        class="vertical-tabs"
                        content-class="tab-content"
                    >
                        <q-tab name="info" label="Customer Info"></q-tab>
                        <q-tab name="stops" label="Customer Stops" />
                        <q-tab name="history" label="Order History" />
                        <q-tab name="edit" label="Edit Order" />
                    </q-tabs>
                </div>

                <!-- Main Content -->
                <div class="flex-1 p-4 ">

                    <q-tab-panels v-model="tab" >
                        <q-tab-panel name="info" class="bg-[#F6F6F6]">
                            <CustomerInfo />
                        </q-tab-panel>
                        <q-tab-panel name="stops" class="bg-[#F6F6F6]">
                            <CustomerStops />
                        </q-tab-panel>
                        <q-tab-panel name="history" class="bg-[#F6F6F6]">
                            <OrderHistory />
                        </q-tab-panel>
                        <q-tab-panel name="edit" class="bg-[#F6F6F6]">
                            <div>Edit Order Content</div>
                            <section class="grid grid-cols-2">

                                <div class="p-5  " >
                                    <div class="grid grid-cols-6 ">


                                        <div class=" text-[12px] font-medium text-gray-400 flex items-center ">
                                            <q-icon size="1.2rem" color="blue" class="mr-1" name="public"/>
                                            <span class="line-clamp-1 w-9/12">south london/south coast</span>

                                        </div>

                                        <div class=" text-[12px] font-medium text-gray-400  flex items-center  ">
                                            <q-icon size="1.2rem" color="blue" class="mr-1" name="local_shipping"/>
                                            <span class="line-clamp-1 w-9/12">KX68 XKD</span>

                                        </div>
                                        <div class=" text-[12px] font-medium text-gray-400  flex items-center">
                                            <q-icon size="1.2rem" color="blue" class="mr-1" name="person"/>
                                            <span class="line-clamp-1 w-9/12">Bilal Hussain</span>

                                        </div>
                                        <div class=" text-[12px] font-medium text-gray-400  flex items-center">
                                            <q-icon size="1.2rem" color="blue" class="mr-1" name="calendar_today"/>
                                            <span class="line-clamp-1 w-9/12">December 21</span>

                                        </div>
                                        <div class="col-span-2 flex items-center justify-end space-x-2">
                                            <q-btn
                                                label="Edit Route"
                                                unelevated
                                                dense
                                                icon="edit"
                                                color="blue"
                                                size="md"
                                                padding="4px 14px"
                                                style=" font-weight: normal; border-radius: 6px "
                                            />

                                            <q-btn
                                                outline
                                                padding="xs"
                                                color="blue"
                                                icon="print"
                                            />
                                            <q-btn
                                                outline
                                                padding="xs"
                                                color="blue"
                                                icon="download"
                                            />

                                        </div>
                                    </div>
                                </div>

                                <div class="h-screen w-full">
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3610.1715086696317!2d55.2794979!3d25.197438!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69adc43dc605%3A0x4704117ce7a04ff2!2sDubai%20Mall%20Zabeel%20Parking%20-%20Upper%20Level!5e0!3m2!1sen!2sae!4v1734420073903!5m2!1sen!2sae"
                                        style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                                </div>
                            </section>
                        </q-tab-panel>
                    </q-tab-panels>
                </div>
            </div>
            </div>


    </section>

  </transition>
</template>

<style scoped lang="scss">
.vertical-tabs {
    border-right: 1px solid #f0f0f0;
    .q-tab {
        justify-content: start;
    }
    //.tab-content .q-tab__label {
    //    font-weight: 400 !important;
    //}
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
