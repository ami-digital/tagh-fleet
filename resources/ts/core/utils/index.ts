import {useDateFormat, useNow} from "@vueuse/core";


import {ref} from "vue";


export const isEmpty = (value: unknown): boolean => {
    if (value === null || value === undefined || value === "undefined" || value === "") return true;

    return Array.isArray(value) && value.length === 0;
};


// 👉 IsEmptyArray
export const isEmptyArray = (arr: unknown): boolean => {
    return Array.isArray(arr) && arr.length === 0;
};

export function formatToTitleCase(value) {
    return value
        .toLowerCase()
        .split('_')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}
export const isNullOrUndefined = (
    value: unknown
): value is undefined | null => {
    return value === null || value === undefined;
};


export const lastUpdated = useDateFormat(useNow(), 'dddd DD MMM YYYY HH:mm').value


export const leftDrawerOpen = ref(false);
