<script setup lang="ts">


const emits = defineEmits<{
(e : 'onCreat'): void;
}>();

</script>

<template>
<!--    <q-card-->
<!--    bordered-->
<!--    padding="14px 24px"-->
<!--    v-ripple-->
<!--    class="w-full bg-primary cursor-pointer  text-white px-6 py-3 my-4"-->
<!--    @click="console.log('')"-->
<!--    >-->
<!--        <q-card-section class="flex items-center q-pa-none">-->
<!--            <q-icon-->
<!--                name="note_add"-->
<!--                color="white"-->
<!--                size="sm"-->
<!--                class="bg-[#1529514a] p-3 rounded-full mr-4"-->
<!--            />-->

<!--            <div>-->
<!--                <p class="p-0 m-0 font-semibold text-lg">Create new plan from spreadsheet</p>-->
<!--                <span class="text-xs">-->
<!--            Upload an Excel/CSV of your data-->
<!--        </span>-->
<!--            </div>-->
<!--        </q-card-section>-->
<!--    </q-card>-->

    <q-card
        bordered
        padding="14px 24px"
        v-ripple
        class=" w-2/6   bg-white cursor-pointer  text-accent group:plan-card px-6 py-3 my-4"
        @click="() =>emits('onCreat')"
    >
        <q-card-section class="flex items-center q-pa-none">
            <q-icon
                name="add"
                color="white"
                size="sm"
                class="bg-[#1529514a] p-3 rounded-full mr-4"
            />
            <div>
                <p class="p-0 m-0 font-semibold text-lg">Create plan manually</p>
                <span class="text-xs">Add stops one at a time </span>
            </div>
        </q-card-section>
    </q-card>
</template>

<style scoped lang="scss">

</style>
