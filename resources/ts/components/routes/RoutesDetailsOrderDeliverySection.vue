<script setup>


</script>

<template>
    <section  >
        <q-card class="mb-5" >
            <!-- Status -->
            <q-card-section class="bg-gray-200 p-4  rounded-md  ">
                <div class="flex  space-x-2  justify-center items-center  ">
                    <div class="text-sm   font-semibold text-gray-600">
                        <q-icon  class="text-gray-400" size="1.5rem"   name="local_shipping" />
                    </div>
                    <div  >
                        <p class="mb-0 text-xs text-gray-400 ">Status</p>
                        <p class="mb-0 font-semibold  text-xs" >Out for delivery</p>
                    </div>
                </div>

            </q-card-section>
            <q-card-section  style="padding: 0" >
                <div class="w-full flex flex-col  ">
                    <div class="grid grid-cols-12 p-3">
                        <div class="col-span-7">
                            <div class="flex no-wrap space-x-2">
                                <span class="h-8 w-8 text-bold text-white  rounded-md flex items-center justify-center bg-light-blue-9 ">2</span>
                                <div >
                                    <p class="mb-0 font-semibold  text-xs">Runita Virdee</p>
                                    <p class="mb-0 text-xs line-clamp-1 " >74 Woodcote Way, Caversham, Reading, England, United Kingdom, RG4 7HL</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-span-3 flex justify-center">
                            <div class="flex space-x-2">
                                <q-icon  class="text-light-blue-9" size="1.5rem"   name="local_shipping" />
                                <div  >
                                    <p class="mb-0 text-xs text-gray-400 ">Vehicle</p>
                                    <p class="mb-0 font-semibold  text-xs" >KL19 ZXB</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-span-2 flex justify-center">
                            <div class="flex space-x-2">
                                <q-icon  class="text-light-blue-9" size="1.5rem"   name="person" />
                                <div  >
                                    <p class="mb-0 text-xs text-gray-400 ">Vehicle</p>
                                    <p class="mb-0 font-semibold  text-xs" >KL19 ZXB</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="grid grid-cols-2 bg-gray-100 p-3">
                        <div >
                            <div class="flex space-x-2">
                                <q-icon  class="text-gray-500" size="1.5rem"   name="fingerprint" />
                                <div  >
                                    <p class="mb-0 text-xs text-gray-400 ">Signature</p>
                                    <p class="mb-0 font-semibold  text-xs" >(No Signature)</p>
                                </div>
                            </div>

                        </div>
                        <div >
                            <div class="flex space-x-2">
                                <q-icon  class="text-gray-500" size="1.5rem"   name="photo_camera" />
                                <div  >
                                    <p class="mb-0 text-xs text-gray-400 ">Signature</p>
                                    <p class="mb-0 font-semibold  text-xs" >(No Photos)</p>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div class="grid grid-cols-2 bg-gray-100 p-3">
                        <div >
                            <div class="flex space-x-2">
                                <q-icon  class="text-gray-500" size="1.5rem"   name="description" />
                                <div  >
                                    <p class="mb-0 text-xs text-gray-400 ">Driver Notes</p>
                                    <p class="mb-0 font-semibold  text-xs" >(No Notes)</p>
                                </div>
                            </div>

                        </div>
                        <div >

                        </div>

                    </div>
                    <div class="grid grid-cols-2   p-3">
                        <div >
                            <div class="flex space-x-2">
                                <q-icon  class="text-gray-500" size="1.5rem"   name="route" />
                                <div  >
                                    <p class="mb-0 text-xs text-gray-400 ">Planned Arrival</p>
                                    <p class="mb-0 font-semibold  text-xs" >09:17, December 20, 2024</p>
                                </div>
                            </div>

                        </div>
                        <div >
                            <div class="flex space-x-2">
                                <q-icon  class="text-gray-500" size="1.5rem"   name="schedule" />
                                <div  >
                                    <p class="mb-0 text-xs text-gray-400 ">Planned Duration</p>
                                    <p class="mb-0 font-semibold  text-xs" >10</p>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div class="grid grid-cols-2   p-3">
                        <div >
                            <div class="flex space-x-2">
                                <q-icon  class="text-gray-500" size="1.5rem"   name="timer" />
                                <div  >
                                    <p class="mb-0 text-xs text-gray-400 ">Preferred Time</p>
                                    <p class="mb-0 font-semibold  text-xs" >Any</p>
                                </div>
                            </div>

                        </div>
                        <div >
                            <div class="flex space-x-2">
                                <q-icon  class="text-gray-500" size="1.5rem"   name="edit_note" />
                                <div  >
                                    <p class="mb-0 text-xs text-gray-400 ">Delivery Notes</p>
                                    <p class="mb-0 font-semibold  text-xs" >Any</p>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div class="grid grid-cols-2   p-3">
                        <div >
                            <div class="flex space-x-2">
                                <q-icon  class="text-gray-500" size="1.5rem"   name="smartphone" />
                                <div  >
                                    <p class="mb-0 text-xs text-gray-400 ">Phone</p>
                                    <p class="mb-0 font-semibold  text-xs" >07855744905</p>
                                </div>
                            </div>

                        </div>
                        <div >
                            <div class="flex space-x-2">
                                <q-icon  class="text-gray-500" size="1.5rem"   name="mail" />
                                <div  >
                                    <p class="mb-0 text-xs text-gray-400 ">Email</p>
                                    <p class="mb-0 font-semibold  text-xs" >runita03@gmail.com</p>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div class="grid grid-cols-2   p-3">
                        <div >
                            <div class="flex space-x-2">
                                <q-icon  class="text-gray-500" size="1.5rem"   name="article" />
                                <div  >
                                    <p class="mb-0 text-xs text-gray-400 ">Reference ID</p>
                                    <p class="mb-0 font-semibold  text-xs" >#17117</p>
                                </div>
                            </div>

                        </div>


                    </div>
                </div>
            </q-card-section>
        </q-card>
    </section>

</template>

<style scoped lang="scss">

</style>
