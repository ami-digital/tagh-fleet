<script setup lang="ts">
import { ref, watch } from "vue";
import { Head } from "@inertiajs/vue3";
import { Dark } from "quasar";
import MainLayout from "../../layouts/MainLayout.vue";



const count = ref(0);
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

        <q-page class="column flex-center  ">

           asdasd
        </q-page>
    </MainLayout>

</template>

