<script setup>

const name = ref('')
const accNumber = ref('')
const address = ref('')
const Email = ref('')
const Phone = ref('')
const Duration = ref('')
const Capacity = ref('')
const startTime = ref('')
const endTime = ref('')
const Notes = ref('')
const Skils = ref('')
const Tags = ref('')
</script>

<template>
    <section class="grid grid-cols-3 gap-4">
        <q-card >
            <q-card-section>
                <div class="flex justify-between">

<!--                    <q-btn-->
<!--                        label="Creat Order From Customer"-->
<!--                        unelevated-->
<!--                        dense-->
<!--                        icon="add_circle_outline"-->
<!--                        text-color="primary"-->
<!--                        size="md"-->
<!--                        padding="4px 14px"-->
<!--                        class="px-2 bg-white mr-3 mb-2 rounded-md border-primary"-->
<!--                        style=" font-weight: normal; border-radius: 6px; border:1px solid;"-->
<!--                    />-->
                </div>
                <span>
                    BODYLINE FITNESS AND GYM, LEKKI, LAGOS, Adenike Wole Ajibode Street, Lekki, Nigeria
                </span>

                <div class="mt-6">
                    <q-separator />
                </div>
            </q-card-section>

            <q-card-section>
                <div class="mb-4 grid grid-cols-2 gap-4">
                    <div>
                        <div class="mb-1 text-accent">
                            <span class="text-negative">* </span>
                            <label>Name</label>
                        </div>

                        <div>
                            <q-input
                                v-model="name"
                                dense
                                outlined
                            />
                        </div>
                    </div>

                    <div>
                        <div class="mb-1 text-accent">
                            <label>Account Number</label>
                        </div>

                        <div>
                            <q-input
                                v-model="accNumber"
                                dense
                                outlined
                            />
                        </div>
                    </div>

                    <div class="col-span-full">
                        <div class="mb-1 text-accent">
                            <span class="text-negative">* </span>
                            <label>Address</label>
                        </div>

                        <div>
                            <q-input
                                v-model="address"
                                dense
                                outlined
                            />
                        </div>
                    </div>


                    <div>
                        <div class="mb-1 text-accent">
                            <label>Phone</label>
                        </div>

                        <div>
                            <q-input
                                v-model="Phone"
                                dense
                                outlined
                            />
                        </div>
                    </div>

                    <div>
                        <div class="mb-1 text-accent">
                            <label>Email</label>
                        </div>

                        <div>
                            <q-input
                                v-model="Email"
                                dense
                                outlined
                            />
                        </div>
                    </div>

                    <div>
                        <div class="mb-1 text-accent">
                            <label>Duration</label>
                        </div>

                        <div>
                            <q-input
                                v-model="Duration"
                                dense
                                outlined
                            />
                        </div>
                    </div>

                    <div>
                        <div class="mb-1 text-accent">
                            <label>Capacity 0</label>
                        </div>

                        <div>
                            <q-input
                                v-model="Capacity"
                                dense
                                outlined

                            />
                        </div>
                    </div>

                    <div>
                        <div class="mb-1 text-accent">
                            <label>Time Slot Start</label>
                        </div>

                        <div>
                            <q-input
                                v-model="startTime"
                                dense
                                outlined
                                type="time"
                            />
                        </div>
                    </div>

                    <div>
                        <div class="mb-1 text-accent">
                            <label>Time Slot End</label>
                        </div>

                        <div>
                            <q-input
                                v-model="endTime"
                                dense
                                outlined
                                type="time"
                                placeholder="test"
                            />
                        </div>
                    </div>

                    <div class="col-span-full">
                        <div class="mb-1 text-accent">
                            <label>Notes</label>
                        </div>

                        <div>
                            <q-input
                                v-model="Notes"
                                dense
                                outlined

                            />
                        </div>
                    </div>

                    <div class="col-span-full">
                        <div class="mb-1 text-accent">
                            <label>Skills</label>
                        </div>

                        <div>
                            <q-input
                                v-model="Skils"
                                dense
                                outlined
                            />
                        </div>
                    </div>

                    <div class="col-span-full">
                        <div class="mb-1 text-accent">
                            <label>Tags</label>
                        </div>

                        <div>
                            <q-input
                                v-model="Tags"
                                dense
                                outlined
                            />
                        </div>
                    </div>
                </div>

                <div class="flex justify-between items-center" >
                    <div>
                        <q-btn
                            label="Delete Customer"
                            unelevated
                            dense
                            color="negative"
                            size="md"
                            padding="5px 14px"
                            class="px-2  rounded-md border-primary"
                            style=" font-weight: normal; border-radius: 6px;"
                        />
                    </div>
                    <div>
                        <q-btn
                            label="Cancel"
                            unelevated
                            dense
                            text-color="negative"
                            size="md"
                            padding="4px 14px"
                            class="px-2 bg-white mr-3 rounded-md border-primary"
                            style=" font-weight: normal; border-radius: 6px; border:1px solid;"
                        />
                        <q-btn
                            label="Save"
                            unelevated
                            dense
                            color="primary"
                            size="md"
                            padding="5px 14px"
                            class="px-2  rounded-md border-primary"
                            style=" font-weight: normal; border-radius: 6px;"
                        />
                    </div>
                </div>

            </q-card-section>

        </q-card>
        <q-card class="col-span-2">
            <q-card-section>
                <div class="h-[calc(100vh-180px)]  ">
                    <iframe
                        width="100%"
                        height="100%"
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3610.1715086696317!2d55.2794979!3d25.197438!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69adc43dc605%3A0x4704117ce7a04ff2!2sDubai%20Mall%20Zabeel%20Parking%20-%20Upper%20Level!5e0!3m2!1sen!2sae!4v1734420073903!5m2!1sen!2sae"
                        style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                </div>
            </q-card-section>



        </q-card>
    </section>

</template>

<style scoped lang="scss">

</style>
