<script setup lang="ts">
import { ref, watch } from "vue";
import { Head } from "@inertiajs/vue3";
import { Dark } from "quasar";
import MainLayout from "../../layouts/MainLayout.vue";
import LocationsGoogleMap from "../../core/component/LocationsGoogleMap.vue";



const current = ref(1);
const min = -5;
const max = 5;

const darkMode = ref(Dark.isActive);
watch(darkMode, (value) => {
    Dark.set(value);
});
</script>

<template>
    <Head>
        <title>Index</title>
    </Head>


    <MainLayout   >

        <q-page >

<!--           <p class="text-center font-semibold text-[24px]">Customers</p>-->

<!--            <section class="flex items-center justify-between  ">-->

<!--                    &lt;!&ndash; Search Input Field &ndash;&gt;-->
<!--                    <div class="relative ">-->
<!--                        <input-->
<!--                            type="text"-->
<!--                            placeholder="Search Customers"-->
<!--                            class="block w-full pl-4 pr-12 py-2 text-gray-500 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"-->
<!--                        />-->

<!--                        <button-->
<!--                            class="absolute inset-y-0 right-0 flex items-center justify-center w-12 bg-teal-500 rounded-r-md text-white hover:bg-teal-600 focus:outline-none"-->
<!--                        >-->
<!--                            <q-icon name="search" />-->
<!--                        </button>-->
<!--                    </div>-->
<!--                    <div class="flex items-center space-x-2 mt-4">-->

<!--                        <q-btn-->
<!--                            unelevated-->
<!--                              class="bg-white border border-sky-500   text-[14px] text-[#fff]"-->
<!--                            icon="sell"-->
<!--                            label="Tags"-->
<!--                        />-->


<!--                        <q-btn-->

<!--                            unelevated-->
<!--                            class=" bg-white  text-gray px-4 py-2  border   hover:bg-gray-100"-->
<!--                            no-caps-->
<!--                         >-->
<!--                            <q-icon name="add"  class="mr-2 text-gray-600" />-->
<!--                            <span class="text-gray-600">Create Customer</span>-->
<!--                        </q-btn>-->

<!--                        <q-btn-->
<!--                            unelevated-->
<!--                            class=" px-4 py-2 bg-teal text-white  "-->
<!--                            icon="cloud_upload"-->
<!--                            label="Upload"-->
<!--                        />-->

<!--                    </div>-->


<!--            </section>-->

<!--            <section class="flex items-center justify-between">-->

<!--                <div class="flex items-center space-x-2 mt-4">-->

<!--                    <q-btn-->

<!--                        unelevated-->
<!--                        class="   text-gray px-4 py-2  bg-teal   hover:bg-gray-100"-->
<!--                        no-caps-->
<!--                    >-->
<!--                        <q-icon name="filter_alt" size="medium"  class="mr-2 text-white" />-->
<!--                        <span class="text-white text-[12px]">Filters</span>-->
<!--                    </q-btn>-->

<!--                </div>-->





<!--            </section>-->


            <section>
                <LocationsGoogleMap />
            </section>
        </q-page>
    </MainLayout>

</template>

