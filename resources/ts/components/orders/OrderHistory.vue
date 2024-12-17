<script setup>

</script>

<template>
<q-card class="w-[1000px] max-w-full mx-auto p-8">
    <q-card-section>
        <h5>
            2
        </h5>
        <span>
            Sadafy Lounge, Eket, Nigeria
        </span>

        <div class="my-6">
            <q-separator />
        </div>

        <div>
            <q-markup-table
                style="box-shadow: none"
                bordered
            >
                <thead>



                <tr style="background: #fafafa; font-weight: bold">
                    <th></th>
                    <th class="text-left">Order</th>
                    <th class="text-left font-bold">Contact Name</th>
                    <th class="text-left font-bold">Date</th>
                    <th class="text-left font-bold">Status</th>
                    <th class="text-left font-bold"></th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>
                        <q-btn
                            color="black"
                            round
                            size="6px"
                            outline
                            icon="add" />
                    </td>
                    <td class="text-left">1</td>
                    <td class="text-left">adasaas</td>
                    <td class="text-left">12/12/2024</td>
                    <td class="text-left">Open</td>
                    <td class="text-right">
                        <q-btn
                            label="Edit Order"
                            unelevated
                            dense
                            color="primary"
                            size="sm"
                            icon="border_color"
                            padding="5px 14px"
                            class="px-2 mr-3 rounded-md border-primary"
                            style=" font-weight: normal; border-radius: 6px;"
                        />

                        <q-btn
                            label="View Audit Log"
                            unelevated
                            dense
                            color="primary"
                            size="sm"
                            icon="description"
                            padding="5px 14px"
                            class="px-2 mr-3 rounded-md border-primary"
                            style=" font-weight: normal; border-radius: 6px;"
                        />
                    </td>
                </tr>
                </tbody>
            </q-markup-table>
        </div>
    </q-card-section>

    <q-card-section>

    </q-card-section>

</q-card>
</template>

<style scoped lang="scss">

</style>
