<script setup lang="ts">



const model = defineModel({required : true, default: false});

interface Props {
  isLoaderActive?: boolean;
  isCreateLoaderActive?: boolean;
}



withDefaults(defineProps<Props>() , {isLoaderActive : true ,isCreateLoaderActive : false });

const emits = defineEmits<{
  (e : 'close'): void;
  (e : 'onSubmit'): void;


}>();




</script>

<template>
  <transition name="slide-up">
    <section v-if="model" class="side-drawer   text-gray-app overflow-auto absolute transform top-0 bottom-0    bg-[#F6F6F6]  w-full    " >



      <section class="w-1/2 h-screen mx-auto  ">
          <div class="w-full relative py-6">
              <div  class="flex justify-between items-center">
                  <div>
                      <p class="mb-0 text-2xl">Add New Team Member</p>
                  </div>
                  <q-icon  size="md" class="text-gray-500 cursor-pointer hover:text-red-500"   name="close" @click="() =>emits('close')" />

              </div>

          </div>
          <q-separator   />

          <div class="rounded mt-4 p-5 bg-white shadow shadow-xl">

              <q-form  >
                  <!-- Name -->
                  <div class="grid grid-cols-12 space-x-3 items-center mb-4">
                      <label class="flex items-center justify-end text-sm font-semibold text-right text-black col-span-2">
                          <span class="text-red-300 mr-1">*</span> Name:
                      </label>
                      <q-input

                          outlined
                          dense
                          placeholder="Ahmed M"
                          class="col-span-10"
                      />
                  </div>

                  <!-- Email -->
                  <div class="grid grid-cols-12 space-x-3 items-center mb-4">
                      <label class="flex items-center justify-end text-sm font-semibold text-right text-black col-span-2">
                          <span class="text-red-300 mr-1">*</span> Email:
                      </label>
                      <q-input

                          outlined
                          dense
                          type="email"
                          placeholder="ahmed@tagfleet.com"

                          class="col-span-10"
                      />
                  </div>


                  <!-- Password -->
                  <div class="grid grid-cols-12 space-x-3 items-center mb-4">
                      <label class="flex items-center justify-end text-sm font-semibold text-right text-black col-span-2">
                          <span class="text-red-300 mr-1">*</span> Password:
                      </label>
                      <q-input

                          outlined
                          dense
                          type="password"
                          placeholder="********"
                          class="col-span-10"

                      />
                  </div>


                  <!-- Phone -->
                  <div class="grid grid-cols-12 space-x-3 items-center mb-4">
                      <label class="flex items-center justify-end text-sm font-semibold text-right text-black col-span-2">
                            Phone:
                      </label>
                      <q-input

                          outlined
                          dense
                          placeholder="+44"
                          class="col-span-10"
                      />

                  </div>


                  <!-- Roles -->
                  <div class="grid grid-cols-12 space-x-3 items-center mb-4">
                      <label class="flex items-center justify-end text-sm font-semibold text-right text-black col-span-2">
                          <span class="text-red-300 mr-1">*</span>   Roles:
                      </label>
                      <q-select

                          outlined
                          dense
                          multiple
                          :options="[]"
                          placeholder="Select Team Member's Role(s)"
                          class="col-span-10"

                      />


                  </div>

                  <!-- Sat Nav -->
                  <div class="grid grid-cols-12 space-x-3 items-center mb-4">
                      <label class="flex items-center justify-end text-sm font-semibold text-right text-black col-span-2">
                            Sat Nav::
                      </label>
                      <q-select

                          outlined
                          dense
                          multiple
                          :options="[]"
                          placeholder="Default (Waze)"
                          class="col-span-10"

                      />


                  </div>


                  <!-- Action Buttons -->
                  <div class="flex justify-end gap-4 mt-4">
                      <q-btn style=" font-weight: normal; border-radius: 6px " color="red"  outline label="Cancel"    />
                      <q-btn style=" font-weight: normal; border-radius: 6px "   label="Save" color="blue" unelevated type="submit" />
                  </div>
              </q-form>
          </div>


      </section>


    </section>

  </transition>
</template>

<style scoped>
.side-drawer {
  box-shadow: rgba(17, 17, 26, 0.1) 0 4px 16px, rgba(17, 17, 26, 0.1) 0 8px 24px, rgba(17, 17, 26, 0.1) 0 16px 56px;
}

.drawer-body {
  max-height: calc(100vh - 160px);
}

/* Slide up transition with delay */
.side-drawer-enter-active, .side-drawer-leave-active {
  transition: transform 0.5s ease, opacity 0.5s ease;
  transition-delay: 0.2s; /* Add delay for entry */
}

.side-drawer-enter, .side-drawer-leave-to {
  transform: translateY(100%);
  opacity: 0; /* Make it invisible when leaving */
}

.side-drawer-enter-to, .side-drawer-leave {
  transform: translateY(0);
  opacity: 1; /* Ensure it becomes visible when entering */
}
</style>
