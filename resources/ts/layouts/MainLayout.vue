<template>
    <q-layout view="lHh LpR  lfr">

        <AppHorizontalNav/>
        <MainSidebar/>

        <q-page-container  class="bg-[#F6F6F6]" >
            <slot name="secondNav" />

            <slot name="default"/>
        </q-page-container>



    </q-layout>
</template>

<script setup>

import AppHorizontalNav from "../core/component/layouts/HorizontalNav.vue";
import MainSidebar from "../core/component/layouts/MainSidebar.vue";
</script>



<style scoped>

</style>
