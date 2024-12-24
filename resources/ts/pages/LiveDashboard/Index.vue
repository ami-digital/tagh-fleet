<script setup lang="ts">
import { ref, watch, computed } from "vue";
import { Head } from "@inertiajs/vue3";
import { Dark } from "quasar";
import TeamsTable from "../../components/team-members/TeamsTable.vue";
import DashboardRoutesTable from "../../components/dashboard/DashboardRoutesTable.vue";
import OrderViewDrawer from "../../components/orders/OrderViewDrawer.vue";
import RoutesDetailsDrawer from "../../components/routes/RoutesDetailsDrawer.vue";

const darkMode = ref(Dark.isActive);
watch(darkMode, (value) => {
    Dark.set(value);
});

const search = ref('');
const showModal = ref(false);
const routeStatus = ref(false);

const pageLayouts = [
    { left: 'col-span-10', right: 'col-span-2' },
    { left: 'col-span-9', right: 'col-span-3' },
    { left: 'col-span-8', right: 'col-span-4' },
    { left: 'col-span-7', right: 'col-span-5' },
    { left: 'col-span-6', right: 'col-span-6' },
    { left: 'col-span-5', right: 'col-span-7' },
    { left: 'col-span-4', right: 'col-span-8' },
    { left: 'col-span-3', right: 'col-span-9' },
    { left: 'col-span-2', right: 'col-span-10' },
];

const pageLayoutIndex = ref(4);

const gridLayout = ref({
    left: pageLayouts[pageLayoutIndex.value].left,
    right: pageLayouts[pageLayoutIndex.value].right,
});

const cycleLayout = (direction: 'left' | 'right') => {
    const delta = direction === 'left' ? 1 : -1;
    pageLayoutIndex.value = (pageLayoutIndex.value + delta + pageLayouts.length) % pageLayouts.length;
    const { left, right } = pageLayouts[pageLayoutIndex.value];
    gridLayout.value = { left, right };
};

const setFullLayout = (position: 'left' | 'right') => {
    const index = position === 'left' ? 8 : 0;
    const { left, right } = pageLayouts[index];
    gridLayout.value = { left, right };
    pageLayoutIndex.value = index;
};

const isLeftButtonDisabled = computed(() => pageLayoutIndex.value === pageLayouts.length - 1);
const isRightButtonDisabled = computed(() => pageLayoutIndex.value === 0);

</script>

<template>
    <Head>
        <title>Index</title>
    </Head>
    <q-page class="py-4 bg-[#F5F5F5]" id="teams-page">
        <section class="text-gray-app overflow-auto absolute transform top-0 bottom-0 bg-white w-full">

            <!-- Main Grid -->
            <section class="grid grid-cols-1 lg:grid-cols-12">
                <!-- Left Section -->
                <div class="p-5 col-span-12 lg:col-span-8" :class="gridLayout.left">
                    <!-- Statistics Section -->
                    <section>
                        <div class="p-4 flex flex-col justify-center w-full bg-blue-100 rounded-md">
                            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                <div>
                                    <p class="mb-0">Completed: <span class="font-medium text-black">0/11</span></p>
                                </div>
                                <div>
                                    <p class="mb-0">Failed: <span class="font-medium text-black">0/11</span></p>
                                </div>
                                <div>
                                    <p class="mb-0">Outstanding: <span class="font-medium text-black">0/11</span></p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <!-- Dashboard Routes Table -->
                    <section class="mt-2">
                        <DashboardRoutesTable @view="showModal = true" />
                    </section>
                </div>

                <!-- Right Section -->
                <div class="h-[300px] lg:h-screen col-span-12 lg:col-span-4 mt-4 lg:mt-0 relative"  :class="gridLayout.right">
                    <iframe
                        width="100%"
                        height="100%"
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3610.1715086696317!2d55.2794979!3d25.197438!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69adc43dc605%3A0x4704117ce7a04ff2!2sDubai%20Mall%20Zabeel%20Parking%20-%20Upper%20Level!5e0!3m2!1sen!2sae!4v1734420073903!5m2!1sen!2sae"
                        style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                        class="rounded-md shadow-md"></iframe>



                    <div class="absolute top-9 left-0 flex flex-col">
                        <q-btn
                            icon="keyboard_double_arrow_left"
                            color="primary"
                            class="mb-3"
                            dense
                            padding="6px"
                            @click="setFullLayout('left')"
                            :disable="isLeftButtonDisabled"
                        />

                        <q-btn
                            icon="keyboard_arrow_left"
                            color="primary"
                            class="mb-3"
                            padding="6px"
                            @click="() => cycleLayout('left')"
                            :disable="isLeftButtonDisabled"
                        />

                        <q-btn
                            icon="keyboard_arrow_right"
                            color="primary"
                            class="mb-3"
                            padding="6px"
                            @click="() => cycleLayout('right')"
                            :disable="isRightButtonDisabled"
                        />

                        <q-btn
                            icon="keyboard_double_arrow_right"
                            color="primary"
                            class="mb-3"
                            dense
                            padding="6px"
                            @click="setFullLayout('right')"
                            :disable="isRightButtonDisabled"
                        />
                    </div>
                </div>
            </section>
        </section>

        <!-- Modals -->
        <OrderViewDrawer @close="showModal = false" @view="() => routeStatus = true" v-model="showModal" />
        <RoutesDetailsDrawer @close="routeStatus = false" v-model="routeStatus" />
    </q-page>
</template>

<style lang="scss">
#teams-page {
    .search-input {
        .q-field__control {
            border-radius: 6px 0 0 6px;
            height: 32px;
        }
    }
}
</style>
