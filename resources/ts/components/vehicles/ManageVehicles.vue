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

const addVehicleSideModal = ref(false)
const orderSelected = ref([]);
const search = ref('');


const columns = ref([
    { name: "vehicle", label: "Vehicle", field: "vehicle", align: 'left'},
    { name: "driver", label: "Driver", field: "driver", align: 'left', sortable: true},
    { name: "availability", label: "Availability", field: "driver", align: 'left'},
]);

const rows = ref([
    {
        id: 1,
        vehicle: "#2023",
        driver: "Jessica",
        availability: "After 9 : 00 AM",

    },
]);



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
<section class="">

    <div>
        <div class="flex search-input mb-2">
            <q-input
                v-model="search"
                outlined
                dense
                class="text-gray-app bg-white flex-1"
                placeholder="Search Vehicles"
            ></q-input>
            <div class="h-8 w-12 bg-primary flex items-center justify-center cursor-pointer"
                 style="border-radius: 0 6px 6px 0">
                <q-icon size="xs" class="text-gray-app inline-block" color="white" name="search" />
            </div>
        </div>
    </div>

    <div>
        <q-table
            :rows="rows"
            :columns="columns"
            row-key="id"
            flat
            selection="multiple"
            color="primary"
            hide-pagination
            v-model:selected="orderSelected"
            class="rounded-lg shadow-sm bg-white text-[#61646A]"
            table-header-class="bg-[#e8f4fd] font-semibold text-left"
        >
        </q-table>
    </div>

    <q-separator />

    <div class="text-center my-4" >
        <q-btn
            label="Add Vehicle"
            color="primary"
            outline
            unelevated
            dense
            icon="add"
            padding="4px 14px"
            style="border-radius: 16px"
            size="md"
            @click="addVehicleSideModal = true"
        />
    </div>

    <section v-if="addVehicleSideModal" >
        <q-card class="p-4">
            <div class="text-right">
                <q-btn
                    icon="close"
                    @click="addVehicleSideModal = false"
                />
            </div>

            <div>
                <q-card-section class="mx-3 mb-3">
                    <div class="grid grid-cols-1 gap-4">
                        <div class="flex gap-x-2">

                            <div class="flex-1">
                                <div class="mb-1 flex gap-2 text-accent">
                                    <q-icon :name=" `img:${person}`" color="primary" size="xs"/>
                                    <span>Name</span>
                                </div>

                                <div>
                                    <q-input
                                        v-model="name"
                                        dense
                                        outlined
                                    />
                                </div>
                            </div>
                        </div>

                        <div class="flex gap-x-2">

                            <div class="flex-1">

                                <div class="mb-1 flex gap-2 text-accent">
                                    <q-icon :name=" `img:${vehicle}`" color="primary" size="xs"/>
                                    <span>Driver</span>
                                </div>

                                <div>
                                    <q-select
                                        outlined
                                        dense
                                        v-model="driver"
                                        :options="driverList"
                                        options-selected-class="bg-[#E8F4FD] text-primary font-bold option-selected"
                                    />
                                </div>
                            </div>
                        </div>

                    </div>

                </q-card-section>


                <q-card-section class="bg-[#e8f4fd] mx-3" style="border-radius: 6px">
                    <div>

                        <div class="flex gap-x-2">
                            <q-icon :name="`img:${timer}`" color="primary" size="xs"/>
                            <div class="flex-1">
                                <div class="mb-1 text-accent">
                                    <label>Availability</label>
                                </div>

                                <div>
                                    <q-btn-toggle
                                        v-model="availability"
                                        toggle-color="primary"
                                        :options="availabilityBtnGroup"
                                        color="white"
                                        text-color="black"
                                        unelevated
                                        class="border"
                                    />
                                    <div
                                        v-if="availability === 'specificTimes'"
                                        class="grid grid-cols-2 gap-4 my-4"
                                    >
                                        <div>
                                            <div class="mb-1 text-accent">
                                                <label>Time Slot Start</label>
                                            </div>

                                            <div>
                                                <q-input
                                                    v-model="startTime"
                                                    dense
                                                    outlined
                                                    type="time"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <div class="mb-1 text-accent">
                                                <label>Time Slot End</label>
                                            </div>

                                            <div>
                                                <q-input
                                                    v-model="endTime"
                                                    dense
                                                    outlined
                                                    type="time"
                                                    placeholder="test"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="flex gap-x-2 mt-4">
                            <q-icon :name="`img:${coffee}`" color="primary" size="xs" class="mt-2"/>

                            <div class="flex-1">
                                <q-toggle
                                    v-model="IncludeBreak"
                                    color="primary"
                                    label="Include Driver Break"
                                    left-label
                                    checked-icon="check"
                                    unchecked-icon="clear"
                                />

                                <div
                                    v-if="IncludeBreak"
                                    class="grid grid-cols-2 gap-4 my-4"
                                >
                                    <div>
                                        <div class="mb-1 text-accent">
                                            <span class="text-negative">* </span>
                                            <label>Earliest Break Start</label>
                                        </div>

                                        <div>
                                            <q-input
                                                v-model="breakStart"
                                                dense
                                                outlined
                                                type="time"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <div class="mb-1 text-accent">
                                            <span class="text-negative">* </span>
                                            <label>Latest Break End</label>
                                        </div>

                                        <div>
                                            <q-input
                                                v-model="breakEnd"
                                                dense
                                                outlined
                                                type="time"
                                                placeholder="test"
                                            />
                                        </div>
                                    </div>

                                    <div class="col-span-full">
                                        <div class="mb-1 text-accent">
                                            <span class="text-negative">* </span>
                                            <label>
                                                Length of Break (minutes)
                                            </label>
                                        </div>

                                        <div>
                                            <q-input
                                                v-model="breakLength"
                                                dense
                                                outlined
                                                type="number"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                </q-card-section>

                <q-card-section class="bg-[#e8f4fd] m-3" style="border-radius: 6px">
                    <div>
                        <div>

                            <div class="flex gap-x-2">

                                <q-icon :name="startLocation === 'other' ? `img:${location}` : `img:${home}`" color="primary" size="xs"/>
                                <div class="flex-1">
                                    <div class="mb-1 text-accent">
                                        <label>Start Location</label>
                                    </div>

                                    <div>
                                        <q-btn-toggle
                                            v-model="startLocation"
                                            toggle-color="primary"
                                            :options="startLocationBtnGroup"
                                            color="white"
                                            text-color="black"
                                            unelevated
                                            class="border"
                                        />
                                        <div
                                            v-if="startLocation === 'other'"
                                            class="my-4"
                                        >
                                            <div>
                                                <div class="mb-1 text-accent">
                                                    <span class="text-negative">* </span>
                                                    <label>Start Address</label>
                                                </div>

                                                <div>
                                                    <q-input
                                                        v-model="startAddress"
                                                        dense
                                                        outlined
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="flex gap-x-2 mt-4">
                                <q-icon :name="endLocation === 'other' ? `img:${location}` : endLocation === 'lastStop' ? `img:${flag}` : `img:${home}`" color="primary" size="xs"/>
                                <div class="flex-1">
                                    <div class="mb-1 text-accent">
                                        <label>End Location</label>
                                    </div>

                                    <div>
                                        <q-btn-toggle
                                            v-model="endLocation"
                                            toggle-color="primary"
                                            :options="endLocationBtnGroup"
                                            color="white"
                                            text-color="black"
                                            unelevated
                                            class="border"
                                        />
                                        <div
                                            v-if="endLocation === 'other'"
                                            class="my-4"
                                        >
                                            <div>
                                                <div class="text-accent">
                                                    <span class="text-negative">* </span>
                                                    <label>End Address</label>
                                                </div>

                                                <div>
                                                    <q-input
                                                        v-model="endAddress"
                                                        dense
                                                        outlined
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </q-card-section>


                <q-card-section class="bg-[#e8f4fd] mx-3" style="border-radius: 6px">
                    <div class="mb-4 grid grid-cols-1 gap-4">

                        <div class="flex gap-x-2">
                            <q-icon :name="`img:${key}`" color="primary" size="xs"/>
                            <div class="flex-1">
                                <div class="mb-1 text-accent">
                                    <label>Skills</label>
                                </div>

                                <div>
                                    <q-select
                                        outlined
                                        dense
                                        v-model="skills"
                                        :options="skillsList"
                                        options-selected-class="bg-[#E8F4FD] text-primary font-bold option-selected"

                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </q-card-section>
            </div>

        </q-card>
    </section>
</section>

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

<style scoped lang="scss">

</style>
