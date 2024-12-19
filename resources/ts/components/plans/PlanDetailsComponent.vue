<script setup>

</script>

<template>
    <div class="  mt-5 bg-white rounded-lg shadow-md flex flex-col gap-2 w-full   border">

        <div class="flex justify-between items-center p-2">

            <div class="flex items-center gap-2">

                <q-icon name="mdi-file-outline" color="teal" size="xs" />

                <h2 class="text-sm font-semibold text-gray-700">Plan 4</h2>

                <button class="text-teal-500 hover:text-teal-700">
                    <q-icon name="mdi-pencil-outline" size="xs" />
                </button>
            </div>

            <div class="flex items-center gap-2">

                <q-btn
                    style=" font-weight: normal; border-radius: 6px; "
                    unelevated
                    label="Delete Plan"
                    color="red"
                    outline
                    class="px-3 py-1"
                    no-caps
                />

                <q-btn
                    style=" font-weight: normal; border-radius: 6px;  "
                    unelevated
                    label="Open Plan"
                    color="teal"
                    class="px-3 py-1"
                    no-caps
                />
            </div>
        </div>

        <!-- Footer Details Section -->
        <div class="flex items-center gap-4 text-gray-500 text-sm mt-2 border-t p-2 bg-blue-100">

            <div class="flex items-center gap-1">
                <q-icon name="mdi-map-marker-outline" size="sm" />
                <span>0 stops</span>
            </div>

            <div class="flex items-center gap-1">
                <q-icon name="mdi-account-outline" size="sm" />
                <span>Aline Baxter</span>
            </div>

            <div class="flex items-center gap-1">
                <q-icon name="mdi-clock-time-four-outline" size="sm" />
                <span>10:39 AM December 17, 2024</span>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">

</style>
