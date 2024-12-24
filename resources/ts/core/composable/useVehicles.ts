import {ref , computed} from 'vue'
import type {Ref} from  'vue'
import axios from "axios";
import {route} from "ziggy-js";


export interface VehicleForm {
    name: string
    driver_id?: number | null
    availability: 'FULL_DAY' | 'SPECIFIC_TIMES' | 'START_NOW'
    include_driver_break: boolean
    start_location:   'DEPOT' | 'OTHER' | 'APP_LOCATION'
    start_location_address:  string
    end_location:   'DEPOT' | 'OTHER' | 'APP_LOCATION'
    end_location_address : string
    slot_start?: string | null
    slot_end?: string | null
    break_start?: string | null
    break_end?: string | null
    break_length?: number | null
    skills?: string[] | null
    max_number_of_stops: number
    capacity: number
}

  const DEFAULT_VEHICLE_FORM: VehicleForm = {
      name: null,
      driver_id: null,
      availability: 'FULL_DAY',
      include_driver_break: true,
      start_location: 'DEPOT',
      end_location: 'DEPOT',
      break_start: '12:30',
      break_end: '13:00',
      break_length: 30,
      skills: [],
      max_number_of_stops: 10,
      capacity: 20,

}

const isLoaderActive:Ref<boolean> = ref(false)
const isCreateLoaderActive:Ref<boolean> = ref(false)
const isCreateDrawerOpen:Ref<boolean> = ref(false)
const skillsOptions = ref([])
const driversOptions = ref([])
const availabilityBtnGroup = ref([
    {label: 'Full Day', value: 'FULL_DAY'},
    {label: 'Specific Times', value: 'SPECIFIC_TIMES'},
    {label: 'Start Now', value: 'START_NOW'}
])
const startLocationBtnGroup = ref([
    {label: 'Depot', value: 'DEPOT'},
    {label: 'Other', value: 'OTHER'},
    {label: 'App Location', value: 'APP_LOCATION', disabled:true}
])
const endLocationBtnGroup = ref([
    {label: 'Depot', value: 'DEPOT'},
    {label: 'Other', value: 'OTHER'},
    {label: 'App Location', value: 'APP_LOCATION', disabled:true}
])

export const useVehicles = () => {


    const openAddVehicleDrawer = async () => {
        try {
            skillsOptions.value = []
            driversOptions.value = []

            const response = await axios.get(route('vehicles.create'));
            const {data} = response
            const {skills , drivers} = data?.options
            if (data) {
                skillsOptions.value = skills || []
                driversOptions.value = drivers || []

                isCreateDrawerOpen.value = true
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }




    const reset = () => {
         isLoaderActive.value = false
          isCreateLoaderActive.value = false
          isCreateDrawerOpen.value = false
          skillsOptions.value = []
          driversOptions.value = []
    }



    return {
        openAddVehicleDrawer ,
        isLoaderActive ,
        isCreateDrawerOpen ,
        availabilityBtnGroup ,
        startLocationBtnGroup ,
        endLocationBtnGroup ,
        skillsOptions : computed(() => skillsOptions.value || []) ,
        reset ,
        driversOptions : computed(() => driversOptions.value || []),
        isCreateLoaderActive , DEFAULT_VEHICLE_FORM
    }


}
