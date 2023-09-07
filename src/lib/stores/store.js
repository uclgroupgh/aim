import { writable } from 'svelte/store'
import { Adults } from '../data/FinishTimes'

// Registration fields
export const race_category = writable('Adults')

//Participant Information
export const first_name = writable('');
export const last_name = writable('');
export const phone_number = writable('');
export const email = writable('');
export const nationality = writable('Select your nationality...');
export const gender = writable('Male');
export const dob = writable('');
export const emergency_name = writable('')
export const emergency_number = writable('');

// Medical Information
export const has_medical_condition = writable(false);
export const medical_information = writable('None');

// About you
export const first_marathon_boolean = writable(true);
export const finish_time_list = writable(Adults)
export const finish_time = writable('Select your approximate finish time...');
export const heard_from = writable('Where did you hear about us...');
export const run_frequency = writable('0 to 5');

// Amount
export const amount = writable(100);
