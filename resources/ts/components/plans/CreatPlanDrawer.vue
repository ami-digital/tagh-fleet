<script setup lang="ts">
import { ref } from "vue"

import vehicle from '@images/svg/vehicle.svg';
import person from '@images/svg/person.svg';
import timer from '@images/svg/timer.svg';
import home from '@images/svg/home-icon.svg';
import coffee from '@images/svg/coffee_cup.svg';
import book from '@images/svg/book.svg';
import flag from '@images/svg/flag.svg';
import location from '@images/svg/location.svg';
import grid from '@images/svg/grid_box.svg';
import key from '@images/svg/key.svg';

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

const name = ref('')
const skills = ref('')
const maxNumberOfStop = ref('')
const capacity = ref('')
const startTime = ref('')
const endTime = ref('')
const startAddress = ref('')
const endAddress = ref('')
const defalult = ref('')

const breakStart = ref('')
const breakEnd = ref('')
const breakLength = ref('')
const IncludeBreak = ref(false)

const driverName = ref('')
const driverEmail = ref('')
const driverPassword = ref('')
const driverPhone = ref('')
const driverRoles = ref([{label:'', value: ''}])
const driverNav = ref({label:'Google Maps', value: 'googleMaps'})

const driverRolesOptions = ref([
    {label:'Test', value: 'test'},
    {label:'Test2', value: 'test2'},
    {label:'Test3', value: 'test3'},
])

const driverNavOptions = ref([
    {label:'Google Maps', value: 'googleMaps'},
    {label:'Waze', value: 'Waze'},
    {label:'Apple Maps', value: 'appleMap'},
])



const availability = ref('fullDay')
const startLocation = ref('depot')
const endLocation = ref('depot')

const availabilityBtnGroup = ref([
    {label: 'Full Day', value: 'fullDay'},
    {label: 'Specific Times', value: 'specificTimes'},
    {label: 'Start Now', value: 'startNow'}
])
const startLocationBtnGroup = ref([
    {label: 'Depot', value: 'depot'},
    {label: 'Other', value: 'other'},
    {label: 'App Location', value: 'appLocation', disabled:true}
])
const endLocationBtnGroup = ref([
    {label: 'Depot', value: 'depot'},
    {label: 'Other', value: 'other'},
    {label: 'Last Stop', value: 'lastStop'}
])
const skillsList = ref([
    {label: 'No Skills Found', value: 'empty',},
])

const driver = ref({label:'(No Driver)', value: 'noDriver'},)

const driverList = ref([
    {label:'(Add New Driver)', value: 'newDriver'},
    {label:'(No Driver)', value: 'noDriver'},
    {label:'Haseeb', value: 'haseeb'},
])

watch(driver, (newValue) => {
    if (newValue.value === 'newDriver') {
        addDriverDialog.value = true;
    }
});

const addDriverDialog = ref(false)

const addNewDriver = () => {
    if (driverName.value) {
        const newDriver = { label: driverName.value, value: driverName.value.toLowerCase() };
        driverList.value.push(newDriver);
        driver.value = newDriver;
        driverName.value = '';
        addDriverDialog.value = false;
    }
};
const closeDialog = () => {
    if (!name.value) {
        driver.value = { label: '(No Driver)', value: 'noDriver' };
    }
    addDriverDialog.value = false;
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

        <div class="px-4 py-4">

            <section class="grid grid-cols-4 gap-x-4">
                <q-card class="p-2">

                    <section class="h-[42vh] overflow-y-auto border-b">
                        <q-card-section>
                            <div class="">
                                <div class="font-semibold text-[16px]">
                                    Stops
                                    <span class="bg-primary text-white text-center rounded-full px-1.5 py-0.5 w-7 inline-block font-normal">0</span>
                                </div>
                            </div>
                        </q-card-section>

                        <q-card-section style="padding-top: 0">
                            <div class="text-accent">
                                Add stops to your plan to get started
                            </div>

                            <div>
                                <q-card
                                    bordered
                                    padding="14px 24px"
                                    v-ripple
                                    class="w-full bg-primary cursor-pointer  text-white px-6 py-3 my-4"
                                    @click="console.log('')"
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

    <q-dialog persistent v-model="addDriverDialog" v-if="driver.value === 'newDriver'">
        <q-card class="sm:min-w-[800px] max-w-[70vh] q-px-md q-py-md rounded-md" >

            <q-card-section class="flex justify-between items-center no-wrap q-py-none">
                <div class="text-lg font-semibold">Add New Driver</div>
                <q-btn
                    flat
                    round
                    icon="close"
                    class=" hover:text-red-700"
                    @click="closeDialog"
                    unelevated
                >
                </q-btn>
            </q-card-section>

            <q-card-section>
                <div class="input-group grid grid-cols-12 gap-2 mb-6 items-center">
                    <div class="col-span-2 text-right">
                        <span class="text-negative">*</span>
                        <label>Name :</label>
                    </div>
                    <div class="col-span-10">
                        <q-input
                            v-model="driverName"
                            dense
                            outlined
                            placeholder="Driver Name"
                        />
                    </div>
                </div>

                <div class="input-group grid grid-cols-12 gap-2 mb-6 items-center">
                    <div class="col-span-2 text-right">
                        <span class="text-negative">*</span>
                        <label>Email :</label>
                    </div>
                    <div class="col-span-10">
                        <q-input
                            v-model="driverEmail"
                            dense
                            outlined
                            placeholder="Enter Email"
                        />
                    </div>
                </div>

                <div class="input-group grid grid-cols-12 gap-2 mb-6 items-center">
                    <div class="col-span-2 text-right">
                        <span class="text-negative">*</span>
                        <label>Password :</label>
                    </div>
                    <div class="col-span-10">
                        <q-input
                            v-model="driverPassword"
                            dense
                            outlined
                            placeholder="Password"
                        />
                    </div>
                </div>

                <div class="input-group grid grid-cols-12 gap-2 mb-6 items-center">
                    <div class="col-span-2 text-right">
                        <span class="text-negative">*</span>
                        <label>Phone :</label>
                    </div>
                    <div class="col-span-10">
                        <q-input
                            v-model="driverPhone"
                            dense
                            outlined
                            placeholder="Add Phone Number"
                        />
                    </div>
                </div>


                <div class="input-group grid grid-cols-12 gap-2 mb-6 items-center">
                    <div class="col-span-2 text-right">
                        <span class="text-negative">*</span>
                        <label>Roles :</label>
                    </div>
                    <div class="col-span-10">
                        <q-select
                            v-model="driverRoles.value"
                            dense
                            outlined
                            placeholder="Select Team Member's Roles"
                            :options="driverRolesOptions"
                            multiple
                            use-chips
                            options-selected-class="bg-[#E8F4FD] text-primary font-bold option-selected"
                        />
                    </div>
                </div>

                <div class="input-group grid grid-cols-12 gap-2 mb-6 items-center">
                    <div class="col-span-2 text-right">
                        <span class="text-negative">*</span>
                        <label>Sat Nav :</label>
                    </div>
                    <div class="col-span-10">
                        <q-select
                            v-model="driverNav"
                            dense
                            outlined
                            :options="driverNavOptions"
                            options-selected-class="bg-[#E8F4FD] text-primary font-bold option-selected"
                        />
                    </div>
                </div>
            </q-card-section>

            <q-card-actions align="right">
                <q-btn
                    outline
                    size="md"
                    padding="4px 14px"
                    color="negative"
                    label="Cancel"
                    @click="closeDialog"
                    style="font-weight: normal; border-radius: 6px; margin-right: 8px"
                />
                <q-btn
                    label="Save"
                    unelevated
                    dense
                    filled
                    text-color="white"
                    size="md"
                    padding="4px 14px"
                    class="  bg-primary "
                    style="font-weight: normal; border-radius: 6px;"
                    @click="addNewDriver"
                />
            </q-card-actions>
        </q-card>
    </q-dialog>
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
