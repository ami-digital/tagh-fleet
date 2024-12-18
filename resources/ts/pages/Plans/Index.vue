<script setup lang="ts">
import { ref, watch } from "vue";
import { Head } from "@inertiajs/vue3";
import { Dark } from "quasar";
import TeamsTable from "../../components/team-members/TeamsTable.vue";
import CalendarComponent from "../../components/plans/CalendarComponent.vue";
import PlanDetailsComponent from "../../components/plans/PlanDetailsComponent.vue";

const darkMode = ref(Dark.isActive);
watch(darkMode, (value) => {
    Dark.set(value);
});

const search = ref('')
</script>

<template>
    <Head>
        <title>Index</title>
    </Head>
    <q-page class="px-6  bg-[#F5F5F5]" id="teams-page">

        <section class="grid grid-cols-2 gap-x-4  ">

            <div>
                <CalendarComponent />
            </div>
            <div class="h-[50vh] py-4">
                <div class="flex items-center">
                    <q-separator  class=" flex-1" />
                    <div class="h-10 ml-4 w-10 bg-white rounded-md flex text-center    justify-center items-center">
                        <span class="text-[13px] font-semibold">17 DEC</span>
                    </div>
                    <p class="mb-1 q-px-md text-xl font-normal">Continue with a draft plan</p>
                    <q-separator  class="flex-1" />
                </div>

                <section class="h-[42vh] overflow-y-scroll" >
                    <PlanDetailsComponent v-for="i in 5" :key="i" />
                </section>

            </div>

            <section>
            </section>

        </section>




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
