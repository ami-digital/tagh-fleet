<script setup>

</script>

<template>
    <div class="flex gap-3">
        <q-btn
            label="Add to Plan"
            unelevated
            dense
            filled
            text-color="white"
            size="md"
            padding="4px 14px"
            class="px-2 bg-primary "
            style="font-weight: normal; border-radius: 6px;"
        />
        <q-btn
            label="Delete Orders"
            unelevated
            outline
            dense
            filled
            text-color="negative"
            size="md"
            padding="4px 14px"
            class="px-2 "
            style="font-weight: normal; border-radius: 6px;"
        />
        <div>
            <q-btn-dropdown
                label="More"
                unelevated
                outline
                dense
                filled
                text-color="primary"
                size="md"
                padding="4px 14px"
                class="px-2 "
                menu-anchor="bottom start"
                menu-self="top left"
                dropdown-icon="keyboard_arrow_down"
                style="font-weight: normal; border-radius: 6px;">
                <q-list>
                    <q-item clickable v-close-popup @click="">
                        <q-item-section>
                            <q-item-label>Bulk Edits</q-item-label>
                        </q-item-section>
                    </q-item>

                    <q-item clickable v-close-popup @click="">
                        <q-item-section>
                            <q-item-label>Labels</q-item-label>
                        </q-item-section>
                    </q-item>

                    <q-item clickable v-close-popup @click="">
                        <q-item-section>
                            <q-item-label>Export 2 Rows</q-item-label>
                        </q-item-section>
                    </q-item>
                </q-list>
            </q-btn-dropdown>
        </div>
    </div>
</template>

<style scoped lang="scss">

</style>
