<script setup lang="ts">
import { ref } from "vue"

import vehicle from '@images/svg/vehicle.svg';
import person from '@images/svg/person.svg';
import timer from '@images/svg/timer.svg';
import home from '@images/svg/home-icon.svg';
import coffee from '@images/svg/coffee_cup.svg';

import flag from '@images/svg/flag.svg';
import location from '@images/svg/location.svg';
import grid from '@images/svg/grid_box.svg';
import key from '@images/svg/key.svg';
import {router, useForm} from "@inertiajs/vue3";

import {useVehicles, VehicleForm} from "../../core/composable/useVehicles";

import {route} from "ziggy-js";
const emits = defineEmits<{
    (e : 'close'): void;
    (e : 'onSubmit'): void;
}>();


const model = defineModel({required : true, default: false});

const {skillsOptions , driversOptions,isCreateDrawerOpen ,isCreateLoaderActive  ,availabilityBtnGroup ,startLocationBtnGroup ,endLocationBtnGroup , defaultVehicleForm ,isOperationCreateMode} = useVehicles()


const form = useForm<VehicleForm>({...defaultVehicleForm.value})




watchEffect(() => {
    const values = JSON.parse(JSON.stringify({...defaultVehicleForm.value}))
    Object.assign(form , values)
})



const submit = async () => {


    isCreateLoaderActive.value = true
    if(form?.id && !isOperationCreateMode.value) {
        form.put(route('vehicles.update', { vehicle: form?.id}) , {
            preserveState: true,
            onSuccess :() =>{
                isCreateDrawerOpen.value = false

                router.visit(route('vehicles.index'))
            },

            onFinish : () => {
                isCreateLoaderActive.value = false
            }
        })


        return
    }
    form.post(route('vehicles.store'), {
        preserveState: true,
        onSuccess: () => {
            isCreateDrawerOpen.value = false
            router.visit(route('vehicles.index'))
        },

        onFinish : () => {
            isCreateLoaderActive.value = false
        }
    })
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

        <div class="px-6 py-4">

            <section class="grid grid-cols-3 gap-x-4">
                <q-card class="col-span-1  max-sm:col-span-3 px-6 py-4">
                    <q-card-section>
                        <div class="flex justify-between items-center">
                            <div>
                                <div class="">
                                    <q-btn round unelevated outline color="white" text-color="dark" size="sm" icon="keyboard_arrow_left" @click="() =>emits('close')" />
                                </div>
                            </div>

                            <span class="text-center font-semibold py-3 flex-1">
                                {{isOperationCreateMode ? 'Create' : 'Update'}} Vehicle
                            </span>

                            <q-btn
                                :label="isOperationCreateMode ? 'Save' : 'Update'"
                                @click.prevent="submit"
                                :loading="isCreateLoaderActive"
                                :disabled="isCreateLoaderActive"
                                color="primary"
                                unelevated

                                class="mx-2"
                            />
                        </div>
                    </q-card-section>

                    <q-card-section class="bg-[#e8f4fd] mx-3 mb-3" style="border-radius: 6px">
                        <div class="grid grid-cols-1 gap-4">
                            <div class="flex gap-x-2">

                                <div class="flex-1">
                                    <div class="mb-1 flex gap-2 text-accent">
                                        <q-icon :name=" `img:${person}`" color="primary" size="xs"/>
                                        <span>Name</span>
                                    </div>

                                    <div>
                                        <q-input
                                            v-model="form.name"
                                            :error="!!form.errors.name"  :error-message="form.errors.name"
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

                                            v-model="form.driver_id"
                                            :options="driversOptions"
                                            outlined
                                            dense
                                            map-options emit-value   option-label="name"
                                            option-value="id"
                                            :error="!!form.errors.driver_id"  :error-message="form.errors.driver_id"
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
                                               v-model="form.availability"
                                               :error="!!form.errors.availability"  :error-message="form.errors.availability"
                                               toggle-color="primary"
                                               :options="availabilityBtnGroup"
                                               color="white"
                                               text-color="black"
                                               unelevated
                                               class="border"
                                           />

                                           <div
                                               v-if="form.availability === 'SPECIFIC_TIMES'"
                                               class="grid grid-cols-2 gap-4 my-4"
                                           >
                                               <div>
                                                   <div class="mb-1 text-accent">
                                                       <label>Time Slot Start</label>
                                                   </div>

                                                   <div>
                                                       <q-input
                                                           v-model="form.slot_start"
                                                           :error="!!form.errors.slot_start"  :error-message="form.errors.slot_start"
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
                                                           v-model="form.slot_end"
                                                           :error="!!form.errors.slot_end"  :error-message="form.errors.slot_end"
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
                                           v-model="form.include_driver_break"
                                           :error="!!form.errors.include_driver_break"  :error-message="form.errors.include_driver_break"
                                           color="primary"
                                           label="Include Driver Break"
                                           left-label
                                           checked-icon="check"
                                           unchecked-icon="clear"
                                       />

                                       <div
                                           v-if="form.include_driver_break"
                                           class="grid grid-cols-2 gap-4 my-4"
                                       >
                                           <div>
                                               <div class="mb-1 text-accent">
                                                   <span class="text-negative">* </span>
                                                   <label>Earliest Break Start</label>
                                               </div>

                                               <div>
                                                   <q-input
                                                       v-model="form.break_start"
                                                       :error="!!form.errors.break_start"  :error-message="form.errors.break_start"
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
                                                       v-model="form.break_end"
                                                       :error="!!form.errors.break_end"  :error-message="form.errors.break_end"
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
                                                       v-model="form.break_length"
                                                       :error="!!form.errors.break_length"  :error-message="form.errors.break_length"
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

                                    <q-icon :name="form.start_location === 'OTHER' ? `img:${location}` : `img:${home}`" color="primary" size="xs"/>
                                    <div class="flex-1">
                                        <div class="mb-1 text-accent">
                                            <label>Start Location</label>
                                        </div>

                                        <div>
                                            <q-btn-toggle
                                                v-model="form.start_location"
                                                :error="!!form.errors.start_location"  :error-message="form.errors.start_location"
                                                toggle-color="primary"
                                                :options="startLocationBtnGroup"
                                                color="white"
                                                text-color="black"
                                                unelevated
                                                class="border"
                                            />
                                            <div
                                                v-if="form.start_location === 'OTHER'"
                                                class="my-4"
                                            >
                                                <div>
                                                    <div class="mb-1 text-accent">
                                                        <span class="text-negative">* </span>
                                                        <label>Start Address</label>
                                                    </div>

                                                    <div>
                                                        <q-input
                                                            v-model="form.start_location_address"
                                                            :error="!!form.errors.start_location_address"  :error-message="form.errors.start_location_address"
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
                                    <q-icon :name="form.end_location === 'OTHER' ? `img:${location}` : form.end_location === 'OTHER' ? `img:${flag}` : `img:${home}`" color="primary" size="xs"/>
                                    <div class="flex-1">
                                        <div class="mb-1 text-accent">
                                            <label>End Location</label>
                                        </div>

                                        <div>
                                            <q-btn-toggle
                                                v-model="form.end_location"
                                                toggle-color="primary"
                                                :options="endLocationBtnGroup"
                                                color="white"
                                                text-color="black"
                                                unelevated
                                                class="border"
                                            />
                                            <div
                                                v-if="form.end_location === 'OTHER'"
                                                class="my-4"
                                            >
                                                <div>
                                                    <div class="text-accent">
                                                        <span class="text-negative">* </span>
                                                        <label>End Address</label>
                                                    </div>

                                                    <div>
                                                        <q-input
                                                            v-model="form.end_location_address"
                                                            :error="!!form.errors.end_location_address"  :error-message="form.errors.end_location_address"
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
                                            v-model="form.skills"
                                            :options="skillsOptions"
                                            :error="!!form.errors.skills"  :error-message="form.errors.skills"
                                            options-selected-class="bg-[#E8F4FD] text-primary font-bold option-selected"

                                        />
                                    </div>
                                </div>
                            </div>

                            <div class="flex gap-x-2">
                                <q-icon :name="`img:${grid}`"  color="primary" size="xs"/>
                                <div class="flex-1">
                                    <div class="mb-1 text-accent">
                                        <label>Max Number of Stops</label>
                                    </div>

                                    <div>
                                        <q-input
                                            v-model="form.max_number_of_stops"
                                            :error="!!form.errors.max_number_of_stops"  :error-message="form.errors.max_number_of_stops"
                                            dense
                                            outlined
                                            type="number"
                                        >
                                            <template v-slot:append>

                                                <q-btn
                                                    unelevated
                                                    padding="4px"
                                                    size="sm"
                                                    text-color=""
                                                    @click.stop=""
                                                >
                                                    <div class="text-sm font-normal ">
                                                        <span>Default: <span class="text-dark font-semibold">15</span></span>
                                                    </div>
                                                    <q-menu anchor="bottom right" self="top right">
                                                        <q-item>
                                                            <div class="flex no-wrap search-input">
                                                                <div>
                                                                    <q-input v-model="form.max_number_of_stops"
                                                                             outlined
                                                                             dense
                                                                             class="text-gray-app min-w-[200px] bg-white"
                                                                             placeholder="Default Max Number of Stops"
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
                                                                />
                                                            </div>
                                                        </q-item>
                                                    </q-menu>
                                                </q-btn>
                                            </template>
                                        </q-input>
                                    </div>
                                </div>
                            </div>

                            <div class="flex gap-x-2">
                                <q-icon :name="`img:${grid}`"  color="primary" size="xs"/>
                                <div class="flex-1">
                                    <div class="mb-1 text-accent">
                                        <label>Capacity</label>
                                    </div>

                                    <div>
                                        <q-input
                                            v-model="form.capacity"
                                            :error="!!form.errors.capacity"  :error-message="form.errors.capacity"
                                            dense
                                            outlined
                                            type="number"
                                        >
                                            <template v-slot:append>

                                                    <q-btn
                                                        unelevated
                                                        padding="4px"
                                                        size="sm"
                                                        text-color=""
                                                        @click.stop=""
                                                    >
                                                        <div class="text-sm font-normal ">
                                                            <span>Default: <span class="text-dark font-semibold">15</span></span>
                                                        </div>
                                                        <q-menu anchor="bottom right" self="top right">
                                                            <q-item>
                                                                <div class="flex no-wrap search-input">
                                                                   <div>
                                                                       <q-input v-model="form.capacity"
                                                                                outlined
                                                                                dense
                                                                                class="text-gray-app min-w-[200px] bg-white"
                                                                                placeholder="Default Capacity"
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
                                                                    />
                                                                </div>
                                                            </q-item>
                                                        </q-menu>
                                                    </q-btn>
                                            </template>
                                        </q-input>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </q-card-section>

                </q-card>
                <q-card class="col-span-2 max-sm:col-span-3 ">
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

<!--    <q-dialog persistent v-model="addDriverDialog" v-if="driver.value === 'newDriver'">-->
<!--        <q-card class="sm:min-w-[800px] max-w-[70vh] q-px-md q-py-md rounded-md" >-->

<!--            <q-card-section class="flex justify-between items-center no-wrap q-py-none">-->
<!--                <div class="text-lg font-semibold">Add New Driver</div>-->
<!--                <q-btn-->
<!--                    flat-->
<!--                    round-->
<!--                    icon="close"-->
<!--                    class=" hover:text-red-700"-->
<!--                    @click="closeDialog"-->
<!--                    unelevated-->
<!--                >-->
<!--                </q-btn>-->
<!--            </q-card-section>-->

<!--            <q-card-section>-->
<!--                <div class="input-group grid grid-cols-12 gap-2 mb-6 items-center">-->
<!--                    <div class="col-span-2 text-right">-->
<!--                        <span class="text-negative">*</span>-->
<!--                        <label>Name :</label>-->
<!--                    </div>-->
<!--                    <div class="col-span-10">-->
<!--                        <q-input-->
<!--                            v-model="driverName"-->
<!--                            dense-->
<!--                            outlined-->
<!--                            placeholder="Driver Name"-->
<!--                        />-->
<!--                    </div>-->
<!--                </div>-->

<!--                <div class="input-group grid grid-cols-12 gap-2 mb-6 items-center">-->
<!--                    <div class="col-span-2 text-right">-->
<!--                        <span class="text-negative">*</span>-->
<!--                        <label>Email :</label>-->
<!--                    </div>-->
<!--                    <div class="col-span-10">-->
<!--                        <q-input-->
<!--                            v-model="driverEmail"-->
<!--                            dense-->
<!--                            outlined-->
<!--                            placeholder="Enter Email"-->
<!--                        />-->
<!--                    </div>-->
<!--                </div>-->

<!--                <div class="input-group grid grid-cols-12 gap-2 mb-6 items-center">-->
<!--                    <div class="col-span-2 text-right">-->
<!--                        <span class="text-negative">*</span>-->
<!--                        <label>Password :</label>-->
<!--                    </div>-->
<!--                    <div class="col-span-10">-->
<!--                        <q-input-->
<!--                            v-model="driverPassword"-->
<!--                            dense-->
<!--                            outlined-->
<!--                            placeholder="Password"-->
<!--                        />-->
<!--                    </div>-->
<!--                </div>-->

<!--                <div class="input-group grid grid-cols-12 gap-2 mb-6 items-center">-->
<!--                    <div class="col-span-2 text-right">-->
<!--                        <span class="text-negative">*</span>-->
<!--                        <label>Phone :</label>-->
<!--                    </div>-->
<!--                    <div class="col-span-10">-->
<!--                        <q-input-->
<!--                            v-model="driverPhone"-->
<!--                            dense-->
<!--                            outlined-->
<!--                            placeholder="Add Phone Number"-->
<!--                        />-->
<!--                    </div>-->
<!--                </div>-->


<!--                <div class="input-group grid grid-cols-12 gap-2 mb-6 items-center">-->
<!--                    <div class="col-span-2 text-right">-->
<!--                        <span class="text-negative">*</span>-->
<!--                        <label>Roles :</label>-->
<!--                    </div>-->
<!--                    <div class="col-span-10">-->
<!--                        <q-select-->
<!--                            v-model="driverRoles.value"-->
<!--                            dense-->
<!--                            outlined-->
<!--                            placeholder="Select Team Member's Roles"-->
<!--                            :options="driverRolesOptions"-->
<!--                            multiple-->
<!--                            use-chips-->
<!--                            options-selected-class="bg-[#E8F4FD] text-primary font-bold option-selected"-->
<!--                        />-->
<!--                    </div>-->
<!--                </div>-->

<!--                <div class="input-group grid grid-cols-12 gap-2 mb-6 items-center">-->
<!--                    <div class="col-span-2 text-right">-->
<!--                        <span class="text-negative">*</span>-->
<!--                        <label>Sat Nav :</label>-->
<!--                    </div>-->
<!--                    <div class="col-span-10">-->
<!--                        <q-select-->
<!--                            v-model="driverNav"-->
<!--                            dense-->
<!--                            outlined-->
<!--                            :options="driverNavOptions"-->
<!--                            options-selected-class="bg-[#E8F4FD] text-primary font-bold option-selected"-->
<!--                        />-->
<!--                    </div>-->
<!--                </div>-->
<!--            </q-card-section>-->

<!--            <q-card-actions align="right">-->
<!--                <q-btn-->
<!--                    outline-->
<!--                    size="md"-->
<!--                    padding="4px 14px"-->
<!--                    color="negative"-->
<!--                    label="Cancel"-->
<!--                    @click="closeDialog"-->
<!--                    style="font-weight: normal; border-radius: 6px; margin-right: 8px"-->
<!--                />-->
<!--                <q-btn-->
<!--                    label="Save"-->
<!--                    unelevated-->
<!--                    dense-->
<!--                    filled-->
<!--                    text-color="white"-->
<!--                    size="md"-->
<!--                    padding="4px 14px"-->
<!--                    class="  bg-primary "-->
<!--                    style="font-weight: normal; border-radius: 6px;"-->
<!--                    @click="addNewDriver"-->
<!--                />-->
<!--            </q-card-actions>-->
<!--        </q-card>-->
<!--    </q-dialog>-->
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
