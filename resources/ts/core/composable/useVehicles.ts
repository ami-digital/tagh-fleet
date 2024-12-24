import {ref, computed} from 'vue'
import type {Ref, ComputedRef} from 'vue'
import axios from "axios";
import {route} from "ziggy-js";


export interface VehicleForm {
    name: string
    driver_id?: number | null
    availability: 'FULL_DAY' | 'SPECIFIC_TIMES' | 'START_NOW'
    include_driver_break: boolean
    start_location: 'DEPOT' | 'OTHER' | 'APP_LOCATION'
    start_location_address: string
    end_location: 'DEPOT' | 'OTHER' | 'APP_LOCATION'
    end_location_address: string
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
    start_location_address: null,
    end_location_address: null,
    start_location: 'DEPOT',
    end_location: 'DEPOT',
    slot_start: '12:30',
    break_start: '12:30',
    break_end: '13:00',
    slot_end: '13:00',
    break_length: 30,
    skills: [],
    max_number_of_stops: 10,
    capacity: 20,

}

const defaultVehicleForm = ref(JSON.parse(JSON.stringify({...DEFAULT_VEHICLE_FORM})))

const isLoaderActive: Ref<boolean> = ref(false)
const isCreateLoaderActive: Ref<boolean> = ref(false)
const isCreateDrawerOpen: Ref<boolean> = ref(false)
const operationMode: Ref<string> = ref('create')
const isOperationCreateMode: ComputedRef<boolean> = computed(() => operationMode.value === 'create')
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
    {label: 'App Location', value: 'APP_LOCATION', disabled: true}
])
const endLocationBtnGroup = ref([
    {label: 'Depot', value: 'DEPOT'},
    {label: 'Other', value: 'OTHER'},
    {label: 'App Location', value: 'APP_LOCATION', disabled: true}
])

export const useVehicles = () => {


    const openAddVehicleDrawer = async () => {
        try {
            operationMode.value = 'create'
            skillsOptions.value = []
            driversOptions.value = []
            defaultVehicleForm.value = JSON.parse(JSON.stringify({...DEFAULT_VEHICLE_FORM}))
            const response = await axios.get(route('vehicles.create'));
            const {data} = response
            const {skills, drivers} = data?.options
            if (data) {
                skillsOptions.value = skills || []
                driversOptions.value = drivers || []

                isCreateDrawerOpen.value = true
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }


    const openEditVehicleDrawer = async (id: number) => {
        try {
            operationMode.value = 'update'
            skillsOptions.value = []
            driversOptions.value = []

            const response = await axios.get(route('vehicles.show', {vehicle: id}));
            const {data} = response
            const {skills, drivers, vehicle} = data?.options
            if (data) {

                skillsOptions.value = skills || []
                driversOptions.value = drivers || []
                defaultVehicleForm.value = vehicle || {...DEFAULT_VEHICLE_FORM}
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
        operationMode.value = 'create'
        skillsOptions.value = []
        driversOptions.value = []
    }


    return {
        openAddVehicleDrawer,
        openEditVehicleDrawer,
        isLoaderActive,
        defaultVehicleForm,
        isCreateDrawerOpen,
        availabilityBtnGroup,
        startLocationBtnGroup,
        endLocationBtnGroup,
        isOperationCreateMode,
        skillsOptions: computed(() => skillsOptions.value || []),
        reset,
        driversOptions: computed(() => driversOptions.value || []),
        isCreateLoaderActive, DEFAULT_VEHICLE_FORM
    }


}
