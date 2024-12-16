<script setup lang="ts">

import { Head } from "@inertiajs/vue3";

import MainLayout from "../../layouts/MainLayout.vue";

import RoutesGoogleMap from "../../core/component/RoutesGoogleMap.vue";

</script>

<template>
    <Head>
        <title>Index</title>
    </Head>


    <MainLayout   >

        <q-page >



            <section>
                <RoutesGoogleMap />
            </section>
        </q-page>
    </MainLayout>

</template>

