<script setup lang="ts">

import TollSVG from '@images/svg/settings/toll.svg';
import TrafficSVG from '@images/svg/settings/traffic.svg';
import BoxSVG from '@images/svg/settings/box.svg';
import ClockSVG from '@images/svg/settings/clock.svg';
import BalanceSVG from '@images/svg/settings/balance.svg';
import SequenceSVG from '@images/svg/settings/sequence.svg';
import MergeSVG from '@images/svg/settings/merge.svg';

const greenModel = ref(0)
const arrayMarkerLabel = ref([
    { value: 0, label: 'Standard Traffic' },
    { value: 1, label: 'Heavy Traffic' },
    { value: 2, label: 'Gridlock' },

])
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
                    <div class="mb-8">
                        <div class="block text-[12px] font-medium text-gray-400 ">
                            <q-icon size="1.2rem" color="blue" class="mr-1" name="public"/>
                            Country
                        </div>
                        <q-input
                            dense
                            placeholder="Enter Country"
                            class="w-full h-1.5"
                        />
                    </div>

                    <!-- Depot Address -->
                    <div class="mb-8">
                        <div class="block text-[12px] font-medium text-gray-400 ">
                            <q-icon size="1.2rem" color="blue" class="mr-1" name="location_on"/>
                            Depot Address
                        </div>
                        <q-input
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
                            dense
                            :options="['Km', 'Miles']"

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

                            checked-icon="check"
                            color="red"
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
                                v-model="greenModel"
                                :marker-labels="arrayMarkerLabel"
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

                            checked-icon="check"
                            color="red"
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

                            checked-icon="check"
                            color="red"
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

                            checked-icon="check"
                            color="red"
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

                            checked-icon="check"
                            color="red"
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

                            checked-icon="check"
                            color="red"
                            unchecked-icon="clear"
                        />
                    </div>
                </div>

            </div>


                <div class="flex justify-end mt-6">
                    <q-btn
                        label="Cancel"
                        outline
                        color="red"
                        dense
                        size="md"
                        padding="4px 14px"
                        class="px-2 bg-white px-2  mr-3 rounded-md;"
                        style="font-weight: normal; border-radius: 6px;"
                    />
                    <q-btn
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

