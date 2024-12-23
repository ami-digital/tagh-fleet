<script setup lang="ts">
import { ref, watch } from "vue";
import { Head } from "@inertiajs/vue3";
import { Dark } from "quasar";
import TeamsTable from "../../components/team-members/TeamsTable.vue";
import CalendarComponent from "../../components/plans/CalendarComponent.vue";
import PlanDetailsComponent from "../../components/plans/PlanDetailsComponent.vue";
import CreatePlan from "../../components/plans/CreatePlan.vue";
import RoutsSentToDriversTable from "../../components/plans/RoutsSentToDriversTable.vue";
import OrderViewDrawer from "../../components/orders/OrderViewDrawer.vue";
import CreatPlanDrawer from "../../components/plans/CreatPlanDrawer.vue";

const darkMode = ref(Dark.isActive);
watch(darkMode, (value) => {
    Dark.set(value);
});

const search = ref('');
const showModal = ref(false);
</script>

<template>
    <Head>
        <title>Index</title>
    </Head>
    <q-page class="px-4 md:px-6 bg-[#F5F5F5]" id="teams-page">
        <section class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
                <CalendarComponent />
            </div>
            <div class="md:h-[40vh] py-4 md:col-span-2">
                <div class="flex flex-col md:flex-row items-center">
                    <q-separator class="flex-1  " />
                    <div class="h-10 w-10 bg-white rounded-md flex justify-center items-center mb-2 md:mb-0 mr-4  ">
                        <span class="text-[13px] font-semibold text-center">17 DEC</span>
                    </div>
                    <p class="text-center text-[12px] md:text-left mb-1 md:text-xl font-normal">
                        Continue with a draft plan
                    </p>
                    <q-separator class="flex-1  " />
                </div>
                <section class="md:h-[40vh]">
                    <CreatePlan @onCreat="showModal = true" />
                    <PlanDetailsComponent />
                </section>
            </div>

            <section class="col-span-full">
                <div class="flex flex-col md:flex-row items-center mb-5">
                    <q-separator class="flex-1 " />
                    <div class="h-10 w-10 bg-white rounded-md flex justify-center items-center mb-2 md:mb-0 mr-4">
                        <span class="text-[13px] text-center font-semibold">17 DEC</span>
                    </div>
                    <p class="text-center text-[12px] md:text-left mb-1 md:text-xl font-normal">
                        Routes sent to drivers
                    </p>
                    <q-separator class="flex-1 " />
                </div>
                <RoutsSentToDriversTable />
            </section>
        </section>

        <CreatPlanDrawer @close="showModal = false" v-model="showModal" />
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
