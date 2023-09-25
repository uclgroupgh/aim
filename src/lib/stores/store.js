import { writable } from 'svelte/store'
import { Adults } from '../data/FinishTimes'
import { browser } from "$app/environment";

// Registration fields
export const race_category = writable('Adults')

//Participant Information
export const first_name = writable(browser && sessionStorage.getItem("first_name") ? sessionStorage.getItem("first_name") : '');
export const last_name = writable(browser && sessionStorage.getItem("last_name") ? sessionStorage.getItem("last_name") : '');
export const phone_number = writable(browser && sessionStorage.getItem("phone_number") ? sessionStorage.getItem("phone_number") : '');
export const email = writable(browser && sessionStorage.getItem("email") ? sessionStorage.getItem("email") : '');
export const nationality = writable(browser && sessionStorage.getItem("nationality") ? sessionStorage.getItem("nationality") : 'Select your nationality...');
export const gender = writable(browser && sessionStorage.getItem("gender") ? sessionStorage.getItem("gender") : 'Male');
export const dob = writable(browser && sessionStorage.getItem("dob") ? sessionStorage.getItem("dob") : '');
export const emergency_name = writable(browser && sessionStorage.getItem("emergency_name") ? sessionStorage.getItem("emergency_name") : '')
export const emergency_number = writable(browser && sessionStorage.getItem("emergency_number") ? sessionStorage.getItem("emergency_number") : '');

// Medical Information
export const has_medical_condition = writable(browser && sessionStorage.getItem("has_medical_condition") ? sessionStorage.getItem("has_medical_condition") : false);
export const medical_information = writable(browser && sessionStorage.getItem("medical_information") ? sessionStorage.getItem("medical_information") : 'None');

// About you
export const first_marathon_boolean = writable(true);
export const finish_time_list = writable(Adults)
export const finish_time = writable('Select your approximate finish time...');
export const heard_from = writable(browser && sessionStorage.getItem("heard_from") ? sessionStorage.getItem("heard_from") : 'Where did you hear about us...');
export const run_frequency = writable('0 to 5');

// Amount
export const amount = writable(20);

//Loader
export const loading = writable(true);
export const data_loaded = writable(undefined);
export const fetch_error = writable("");

// Hero bg
export const hero_bg_design_three = writable("")

//Footer variables
export const location = writable("")
export const facebook = writable("")
export const twitter = writable("")
export const youtube = writable("")
export const instagram = writable("")
export const contact_number = writable("")
export const contact_email = writable("")