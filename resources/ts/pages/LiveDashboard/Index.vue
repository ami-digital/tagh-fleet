<script setup lang="ts">
import { ref, watch } from "vue";
import { Head } from "@inertiajs/vue3";
import { Dark } from "quasar";
import TeamsTable from "../../components/team-members/TeamsTable.vue";
import DashboardRoutesTable from "../../components/dashboard/DashboardRoutesTable.vue";

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
    <q-page class="  py-4 bg-[#F5F5F5]" id="teams-page">
        <section  class=" text-gray-app overflow-auto absolute transform top-0 bottom-0    bg-white  w-full    " >


            <section class="grid grid-cols-12">

                <div class="p-5 col-span-8">

                    <section class=" ">
                        <div class="p-4   flex flex-col  justify-center w-full  bg-blue-100     ">
                            <div class="flex justify-between">
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

                    <section class="mt-2">
                        <DashboardRoutesTable />
                    </section>
                </div>


                <div class="h-screen col-span-4">
                    <iframe
                        width="100%"
                        height="100%"
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3610.1715086696317!2d55.2794979!3d25.197438!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69adc43dc605%3A0x4704117ce7a04ff2!2sDubai%20Mall%20Zabeel%20Parking%20-%20Upper%20Level!5e0!3m2!1sen!2sae!4v1734420073903!5m2!1sen!2sae"
                        style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                </div>
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
