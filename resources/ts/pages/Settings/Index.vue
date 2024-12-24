<script setup lang="ts">

import TollSVG from '@images/svg/settings/toll.svg';
import TrafficSVG from '@images/svg/settings/traffic.svg';
import BoxSVG from '@images/svg/settings/box.svg';
import ClockSVG from '@images/svg/settings/clock.svg';
import BalanceSVG from '@images/svg/settings/balance.svg';
import SequenceSVG from '@images/svg/settings/sequence.svg';
import MergeSVG from '@images/svg/settings/merge.svg';
import {router, useForm} from "@inertiajs/vue3";
import {requiredValidator} from "../../core/utils/validators";
import {countries} from "../../core/utils/general";
import {route} from "ziggy-js";
const props = defineProps({
    settings: Array
})

interface GeneralSettings {
    country: string | null;
    depot_address: string | null;
    distance_unit: string | null;
    time_format: string | null;
    default_stop_duration: number | null;
    avoid_tolls: boolean | null;
    traffic_settings: string | null;
    default_stop_type: boolean | null;
    max_route_duration: boolean | null;
    load_balancing: boolean | null;
    maintain_upload_sequence: boolean | null;
    merge_orders: boolean | null;
}

const arrayMarkerLabel = ref([
    { value: 0, label: 'Standard Traffic' },
    { value: 1, label: 'Heavy Traffic' },
    { value: 2, label: 'Gridlock' },

])
const countryOptions = ref(countries)
const isUpdateLoaderActive = ref(false)
const countryFilterFn = (val : any, update : any) => {
    if(val == '') countryOptions.value = countries
    update(() => {
        const needle = val.toLowerCase()
        countryOptions.value = countryOptions.value.filter((item : any) => {
            return (
                item.label.toLowerCase().indexOf(needle) > -1
            )
        })
    })
}

const form = useForm<GeneralSettings>({
    country : null,
    depot_address : null,
    distance_unit : null,
    time_format : null,
    default_stop_duration : null,
    avoid_tolls : null,
    traffic_settings : null,
    default_stop_type : null,
    max_route_duration : null,
    load_balancing : null,
    maintain_upload_sequence : null,
    merge_orders: null
})
const submit = async () => {


    isUpdateLoaderActive.value = true

    form.post(route('settings.update'), {
        preserveState: true,
        onFinish : () => {
            isUpdateLoaderActive.value = false
        }
    })
}

watchEffect(() => {
    Object.assign(form , {...props.settings})
})
</script>

<template>
    <Head>
        <title>Index</title>
    </Head>


    <q-page class="p-5">


        <section class="w-1/2 mx-auto   bg-white shadow shadow-lg rounded p-5">
            <h6 class="text-black mb-4 ">General Settings</h6>

            <div class="p-6 bg-blue-50 mb-10 rounded-md shadow-md w-full    ">
                <!-- Header -->
                <p class="text-[16px]   text-black mb-4">Basic Settings</p>

                <!-- Form Grid -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <!-- Country -->
                    <div class="">
                        <div class="block text-[12px] font-medium text-gray-400 ">
                            <q-icon size="1.2rem" color="blue" class="mr-1" name="public"/>
                            Country
                        </div>
                        <q-select
                            dense
                            v-model="form.country"
                            :options="countryOptions"
                            :rules="[requiredValidator]"
                            @filter="countryFilterFn"
                            use-input
                            input-debounce="0"
                            option-label="label"
                            option-value="value"
                            map-options
                            emit-value
                            color="gray"
                            placeholder="Enter Country"
                            options-selected-class="primary"
                            dropdown-icon="keyboard_arrow_down"
                            class="text-gray-app height-50"
                            :error="!!form.errors.country"  :error-message="form.errors.country"
                        >

                        </q-select>

                    </div>

                    <!-- Depot Address -->
                    <div class="">
                        <div class="block text-[12px] font-medium text-gray-400 ">
                            <q-icon size="1.2rem" color="blue" class="mr-1" name="location_on"/>
                            Depot Address
                        </div>
                        <q-input
                            v-model="form.depot_address"
                            :error="!!form.errors.depot_address"  :error-message="form.errors.depot_address"
                            dense
                            placeholder="Enter Depot Address"
                            class="w-full h-1.5"
                        />
                    </div>
                    <div class=" ">
                        <div class="block text-[12px] font-medium text-gray-400 ">
                            <q-icon size="1.2rem" color="blue" class="mr-1" name="straighten"/>
                            Distance Unit (Km/Miles)
                        </div>
                        <q-select
                            v-model="form.distance_unit"
                            :error="!!form.errors.distance_unit"  :error-message="form.errors.distance_unit"
                            dense
                            :options="['Km', 'Miles']"

                            placeholder="Select Distance Unit"
                            class="w-full"/>
                    </div>

                    <div class=" ">
                        <div class="block text-[12px] font-medium text-gray-400 ">
                            <q-icon size="1.2rem" color="blue" class="mr-1" name="schedule"/>
                            Default Stop Duration (minutes)
                        </div>
                                                    <q-input
                                                        v-model="form.default_stop_duration"
                                                        :error="!!form.errors.default_stop_duration"  :error-message="form.errors.default_stop_duration"
                                                        type="number"
                                                        dense
                                                        placeholder="Enter Duration"
                                                        class="w-full"
                                                    />
                    </div>

                    <div class=" ">
                        <div class="block text-[12px] font-medium text-gray-400 ">
                            <q-icon size="1.2rem" color="blue" class="mr-1" name="schedule"/>
                            Time Format
                        </div>
                        <q-select
                            v-model="form.time_format"
                            :error="!!form.errors.time_format"  :error-message="form.errors.time_format"
                            dense
                            :options="['24h', '12h']"

                            placeholder="Select Distance Unit"
                            class="w-full"/>
                    </div>

                </div>
            </div>


            <div class="p-6 bg-blue-50 rounded-md shadow-md w-full mb-10   ">
                <!-- Header -->
                <p class="text-[16px]   text-black mb-4">Traffic/Road Settings</p>

                <div class="grid grid-cols-3  ">

                    <div class=" flex items-center ">
                        <div class="block text-[12px] font-medium text-gray-400 ">
                            <q-icon
                                :name="`img:${TollSVG}`"
                                class="p-0 text-grey"
                                size="18px"
                            />
                            <span class="ml-1"> Avoid Tolls</span>

                        </div>
                    </div>
                    <div>
                        <q-toggle
                            v-model="form.avoid_tolls"
                            :error="!!form.errors.avoid_tolls"  :error-message="form.errors.avoid_tolls"
                            checked-icon="check"
                            color="#2196f3"
                            unchecked-icon="clear"
                        />
                    </div>
                </div>
                <div  >

                    <div  >
                        <div class="block text-[12px] font-medium text-gray-400 ">
                            <q-icon
                                :name="`img:${TrafficSVG}`"
                                class="p-0 ml-1 text-grey"
                                size="18px"
                            />

                            Traffic Settings
                        </div>
                        <div class="px-3  text-center  w-auto mt-4">
                            <q-slider

                                class="max-w-xl"
                                v-model="form.traffic_settings"
                                :marker-labels="arrayMarkerLabel"
                                :error="!!form.errors.traffic_settings"  :error-message="form.errors.traffic_settings"
                                color="blue"
                                markers
                                snap
                                :min="0"
                                :max="2"
                            />
                        </div>
                    </div>

                </div>
            </div>

            <div class="p-6 bg-blue-50 rounded-md shadow-md w-full   ">
                <!-- Header -->
                <p class="text-[16px]   text-black mb-4">Route Creation</p>

                <div class="grid grid-cols-3  ">

                    <div class=" flex items-center ">
                        <div class="block text-[12px] font-medium text-gray-400 ">
                            <q-icon
                                :name="`img:${BoxSVG}`"
                                class="p-0 text-grey"
                                size="18px"
                            />
                            <span class="ml-1"> Default Stop Type</span>


                        </div>
                    </div>
                    <div>
                        <q-toggle
                            v-model="form.default_stop_type"
                            :error="!!form.errors.default_stop_type"  :error-message="form.errors.default_stop_type"
                            checked-icon="check"
                            color="#2196f3"
                            unchecked-icon="clear"
                        />
                    </div>
                </div>
                <div class="grid grid-cols-3  ">

                    <div class=" flex items-center ">
                        <div class="block text-[12px] font-medium text-gray-400 ">
                            <q-icon
                                :name="`img:${ClockSVG}`"
                                class="p-0 text-grey"
                                size="18px"
                            />
                            <span class="ml-1"> Max Allowed Route Duration</span>



                        </div>
                    </div>
                    <div>
                        <q-toggle
                            v-model="form.max_route_duration"
                            :error="!!form.errors.max_route_duration"  :error-message="form.errors.max_route_duration"
                            checked-icon="check"
                            color="#2196f3"
                            unchecked-icon="clear"
                        />
                    </div>
                </div>



                <div class="grid grid-cols-3  ">

                    <div class=" flex items-center ">
                        <div class="block text-[12px] font-medium text-gray-400 ">
                            <q-icon
                                :name="`img:${BalanceSVG}`"
                                class="p-0 text-grey"
                                size="18px"
                            />
                            <span class="ml-1"> Load Balancing</span>



                        </div>
                    </div>
                    <div>
                        <q-toggle
                            v-model="form.load_balancing"
                            :error="!!form.errors.load_balancing"  :error-message="form.errors.load_balancing"
                            checked-icon="check"
                            color="#2196f3"
                            unchecked-icon="clear"
                        />
                    </div>
                </div>

                <div class="grid grid-cols-3  ">

                    <div class=" flex items-center ">
                        <div class="block text-[12px] font-medium text-gray-400 ">
                            <q-icon
                                :name="`img:${SequenceSVG}`"
                                class="p-0 text-grey"
                                size="18px"
                            />
                            <span class="ml-1"> Maintain Upload Sequence</span>




                        </div>
                    </div>
                    <div>
                        <q-toggle
                            v-model="form.maintain_upload_sequence"
                            :error="!!form.errors.maintain_upload_sequence"  :error-message="form.errors.maintain_upload_sequence"
                            checked-icon="check"
                            color="#2196f3"
                            unchecked-icon="clear"
                        />
                    </div>
                </div>

                <div class="grid grid-cols-3  ">

                    <div class=" flex items-center ">
                        <div class="block text-[12px] font-medium text-gray-400 ">
                            <q-icon
                                :name="`img:${MergeSVG}`"
                                class="p-0 text-grey"
                                size="18px"
                            />
                            <span class="ml-1"> Merge Orders into Single Stop</span>




                        </div>
                    </div>
                    <div>
                        <q-toggle
                            v-model="form.merge_orders"
                            :error="!!form.errors.merge_orders"  :error-message="form.errors.merge_orders"
                            checked-icon="check"
                            color="#2196f3"
                            unchecked-icon="clear"
                        />
                    </div>
                </div>

            </div>


                <div class="flex justify-end mt-6">
                    <q-btn
                        label="Cancel"
                        outline
                        color="#2196f3"
                        dense
                        size="md"
                        padding="4px 14px"
                        class="px-2 bg-white px-2  mr-3 rounded-md;"
                        style="font-weight: normal; border-radius: 6px;"
                    />
                    <q-btn
                        @click.prevent="submit"
                        label="Save"
                        unelevated
                        dense
                        filled
                        text-color="white"

                        size="md"
                        padding="4px 14px"
                        class="px-2 bg-primary "
                        style="font-weight: normal; border-radius: 6px;"
                    />
                </div>

        </section>

    </q-page>


</template>

