<script setup>

</script>

<template>
    <div class="  mt-5 bg-white rounded-lg shadow-md flex flex-col gap-2 w-full   border">
        <!-- Header Section -->
        <div class="flex justify-between items-center p-2">
            <!-- Plan Title -->
            <div class="flex items-center gap-2">
                <!-- QIcon for Document -->
                <q-icon name="mdi-file-outline" color="primary" size="xs" />
                <!-- Plan Name -->
                <h2 class="text-sm font-semibold text-gray-700">Plan 4</h2>
                <!-- Edit QIcon -->
                <button class="text-primary hover:text-primary">
                    <q-icon name="mdi-pencil-outline" size="xs" />
                </button>
            </div>
            <!-- Action Buttons -->
            <div class="flex items-center gap-2">
                <!-- Delete Button -->
                <q-btn
                    style=" font-weight: normal; border-radius: 6px; "
                    unelevated
                    label="Delete Plan"
                    color="red"
                    outline
                    class="px-3 py-1"
                    no-caps
                />
                <!-- Open Plan Button -->
                <q-btn
                    style=" font-weight: normal; border-radius: 6px;  "
                    unelevated
                    label="Open Plan"
                    color="primary"
                    class="px-3 py-1"
                    no-caps
                />
            </div>
        </div>

        <!-- Footer Details Section -->
        <div class="flex items-center gap-4 text-gray-500 text-sm mt-2 border-t p-2 bg-blue-100">
            <!-- Stops Icon -->
            <div class="flex items-center gap-1">
                <q-icon name="mdi-map-marker-outline" size="sm" />
                <span>0 stops</span>
            </div>
            <!-- User Icon -->
            <div class="flex items-center gap-1">
                <q-icon name="mdi-account-outline" size="sm" />
                <span>Aline Baxter</span>
            </div>
            <!-- Date and Time -->
            <div class="flex items-center gap-1">
                <q-icon name="mdi-clock-time-four-outline" size="sm" />
                <span>10:39 AM December 17, 2024</span>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">

</style>
