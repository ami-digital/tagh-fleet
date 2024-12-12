import {isEmpty, isEmptyArray, isNullOrUndefined} from './index';

// 👉 Required Validator
export const requiredValidator = (value: unknown) => {
    if (isNullOrUndefined(value) || isEmptyArray(value) || value === false)
        return 'This field is required';

    return !!String(value).trim().length || 'This field is required';
};

// 👉 Email Validator
export const emailValidator = (value: unknown) => {
    if (isEmpty(value)) return true;

    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (Array.isArray(value))
        return (
            value.every((val) => re.test(String(val))) ||
            'The Email field must be a valid email'
        );

    return re.test(String(value)) || 'The Email field must be a valid email';
};


// 👉 URL Validator
export const urlValidator = (value: unknown) => {
    if (isEmpty(value)) return true;

    const re = /^(http[s]?:\/\/){0,1}(www\.){0,1}(localhost|127\.0\.0\.1|[a-zA-Z0-9\.\-]+)\.[a-zA-Z]{2,5}[\.]{0,1}/;

    return re.test(String(value)) || 'URL is invalid';
};

export const confirmedValidator = (value: string, target: string) =>
    value === target || 'The Confirm Password field confirmation does not match';

export const lengthValidator = (value: unknown, length: number) => {
    if (isEmpty(value)) return true;

    return (
        String(value).length >= length ||
        `The Min Character field must be at least ${length} characters`
    );
};
export const maxValueValidator = (value: unknown, max: number) => {
    if (value === null || value === undefined || value === '') return true;

    return (
        Number(value) <= max ||
        `The value must be less than or equal to ${max}.`
    );
};
