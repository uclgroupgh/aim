<svelte:head>
	<script src="https://js.paystack.co/v1/inline.js"></script>
</svelte:head>

<script>
    import { onMount } from 'svelte';
    import Nationalities from "../data/Nationalities";
    import { fade } from 'svelte/transition';
    import { CivilService, Juniors, Adults, Corporate } from '../data/FinishTimes';
    import HeardFrom from '../data/HeardFrom';
    import { race_category, first_name, last_name, phone_number, email, nationality, gender, dob, emergency_name, emergency_number, has_medical_condition, medical_information, first_marathon_boolean, finish_time, finish_time_list, heard_from, run_frequency, amount } from '../stores/store';

    let day, month, year, category;
    let show_nationalities = false;
    let show_finish_times = false;
    let show_heard_from = false;
    let has_attempted_first_submit = false;
    let error_nodes = [];
    let dob_errors, first_name_element, last_name_element, phone_number_element, email_element, nationality_element, dob_day_element, dob_month_element, dob_year_element, emergency_name_element, emergency_number_element, finish_time_element, heard_from_element;

    const set_selected_category = (e) => {
        category = e.target.htmlFor;

        switch (category) {
            case 'marathon':
                race_category.set('1')
                finish_time_list.set(Adults)
                amount.set(100.00)
                break;
            case 'civil_service':
                race_category.set('2')
                finish_time_list.set(CivilService)
                amount.set(50.00)
                break;
            case 'corporate':
                race_category.set('3')
                finish_time_list.set(Corporate)
                amount.set(70.00)
                break;
            case 'juniors':
                race_category.set('4')
                finish_time_list.set(Juniors)  
                amount.set(30.00)          
                break;
        
            default: '';
                break;
        }
    }

    // Participant information functions
    const set_first_name = () => {
        first_name.set(first_name_element.value)
        if($first_name.length < 3) {
            if(!error_nodes.includes(first_name_element.nextElementSibling)){
                error_nodes.push(first_name_element.nextElementSibling)
            } else {
                return;
            }
        } else {
            first_name_element.nextElementSibling.classList.remove('flex')
            first_name_element.nextElementSibling.classList.add('hidden')
            error_nodes.pop(first_name_element.nextElementSibling)
        }
    }
    const set_last_name = () => {
        last_name.set(last_name_element.value)
        if($last_name.length < 3) {
            if(!error_nodes.includes(last_name_element.nextElementSibling)){
                error_nodes.push(last_name_element.nextElementSibling)
            } else {
                return;
            }
        } else {
            last_name_element.nextElementSibling.classList.remove('flex')
            last_name_element.nextElementSibling.classList.add('hidden')
            error_nodes.pop(last_name_element.nextElementSibling)
        }
    }
    const set_phone_number = () => {
        phone_number.set(phone_number_element.value)
        if($phone_number.length != 10) {
            if(!error_nodes.includes(phone_number_element.nextElementSibling)){
                error_nodes.push(phone_number_element.nextElementSibling)
            } else {
                return;
            }
        } else { 
            phone_number_element.nextElementSibling.classList.remove('flex')
            phone_number_element.nextElementSibling.classList.add('hidden')
            error_nodes.pop(phone_number_element.nextElementSibling)
        }
    }
    const set_email = () => {
        let emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        email.set(email_element.value)
        if(emailPattern.test($email) == false) {
            if(!error_nodes.includes(email_element.nextElementSibling)){
                error_nodes.push(email_element.nextElementSibling)
            } else {
                return;
            }
        } else {
            email_element.nextElementSibling.classList.remove('flex')
            email_element.nextElementSibling.classList.add('hidden')
            error_nodes.pop(email_element.nextElementSibling)
        }
    }
    const set_selected_gender = (e) => {
        gender.set(e.target.innerHTML)
    }
    const select_nationality = (e) => {
        nationality.set(e.target.innerHTML)
        show_nationalities = false;

        nationality_element.parentElement.lastChild.classList.remove('flex')
        nationality_element.parentElement.lastChild.classList.add('hidden')
        error_nodes.pop(nationality_element.parentElement.lastChild)
    }
    const set_day = () => {
        day = dob_day_element.value
        if(!day || day < 1 || day > 31) {
            if(!error_nodes.includes(dob_errors.children[0])){
                error_nodes.push(dob_errors.children[0])
            } else {
                return;
            }
        } else {
            dob_errors.children[0].classList.remove('flex')
            dob_errors.children[0].classList.add('hidden')
            error_nodes.pop(dob_errors.children[0])
        }
    }
    const set_month = () => {
        month = dob_month_element.value
        if(!month || month < 1 || month > 12) {
            if(!error_nodes.includes(dob_errors.children[1])) {
                error_nodes.push(dob_errors.children[1])
            } else {
                return;
            }
        } else {
            dob_errors.children[1].classList.remove('flex')
            dob_errors.children[1].classList.add('hidden')
            error_nodes.pop(dob_errors.children[1])
        }
    }
    const set_year = () => {
        year = dob_year_element.value
        if(!year || year < 1903 || year > 2016) {
            if(!error_nodes.includes(dob_errors.children[2])) {
                error_nodes.push(dob_errors.children[2])
            } else {
                return;
            }
        } else {
            dob_errors.children[2].classList.remove('flex')
            dob_errors.children[2].classList.add('hidden')
            error_nodes.pop(dob_errors.children[2])
        }
    }

    $: dob.set(year + '-' + month + '-' + day);

    const set_emergency_name = () => {
        emergency_name.set(emergency_name_element.value)
        if($emergency_name.length < 3){
            if(!error_nodes.includes(emergency_name_element.nextElementSibling)) {
                error_nodes.push(emergency_name_element.nextElementSibling)
            } else {
                return;
            }
        } else {
            emergency_name_element.nextElementSibling.classList.remove('flex')
            emergency_name_element.nextElementSibling.classList.add('hidden')
            error_nodes.pop(emergency_name_element.nextElementSibling)
        }
    }
    const set_emergency_number = () => {
        emergency_number.set(emergency_number_element.value)
        if($emergency_number.length != 10) {
            if(!error_nodes.includes(emergency_number_element.nextElementSibling)) {
                error_nodes.push(emergency_number_element.nextElementSibling)
            } else {
                return;
            }
        } else {
            emergency_number_element.nextElementSibling.classList.remove('flex')
            emergency_number_element.nextElementSibling.classList.add('hidden')
            error_nodes.pop(emergency_number_element.nextElementSibling)
        }
    }

    // Medical information functions
    const set_medical_information = (e) => {
        medical_information.set(e.target.value)
    }

    // About you
    const select_finish_time = (e) => {
        finish_time.set(e.target.innerHTML);
        show_finish_times = false;

        finish_time_element.parentElement.lastChild.classList.remove('flex')
        finish_time_element.parentElement.lastChild.classList.add('hidden')
        error_nodes.pop(finish_time_element.parentElement.lastChild)
    }
    const select_heard_from = (e) => {
        heard_from.set(e.target.innerHTML);
        show_heard_from = false;

        heard_from_element.parentElement.lastChild.classList.remove('flex')
        heard_from_element.parentElement.lastChild.classList.add('hidden')
        error_nodes.pop(heard_from_element.parentElement.lastChild)
    }
    const set_selected_first_marathon_answer = (e) => {
        if(e.target.innerHTML == 'Yes') {
            first_marathon_boolean.set(true)
        } else {
            first_marathon_boolean.set(false)
        }
    }
    const set_selected_run_frequency = (e) => {
        run_frequency.set(e.target.innerHTML)
    }


    const check_nationality = () => {
        if($nationality == '') {
            if(!error_nodes.includes(nationality_element.parentElement.lastChild)) {
                error_nodes.push(nationality_element.parentElement.lastChild)
            } else {
                return;
            }
        } else {
            nationality_element.parentElement.lastChild.classList.remove('flex')
            nationality_element.parentElement.lastChild.classList.add('hidden')
            error_nodes.pop(nationality_element.parentElement.lastChild)
        }
    }
    const check_finish_time = () => {
        if($finish_time == '') {
            if(!error_nodes.includes(finish_time_element.parentElement.lastChild)) {
                error_nodes.push(finish_time_element.parentElement.lastChild)
            } else {
                return;
            }
        } else {
            finish_time_element.parentElement.lastChild.classList.remove('flex')
            finish_time_element.parentElement.lastChild.classList.add('hidden')
            error_nodes.pop(finish_time_element.parentElement.lastChild)
        }
    }
    const check_heard_from = () => {
        if($heard_from == '') {
            if(!error_nodes.includes(heard_from_element.parentElement.lastChild)) {
                error_nodes.push(heard_from_element.parentElement.lastChild)
            } else {
                return;
            }
        } else {
            heard_from_element.parentElement.lastChild.classList.remove('flex')
            heard_from_element.parentElement.lastChild.classList.add('hidden')
            error_nodes.pop(heard_from_element.parentElement.lastChild)
        }
    }
    //Select field toggle functions
    const toggle_nationalities = () => {
        show_nationalities = !show_nationalities
    }
    const toggle_finish_times = () => {
        show_finish_times = !show_finish_times
    }
    const toggle_heard_from = () => {
        show_heard_from = !show_heard_from
    }




    // Submission functions

    const init_fields = () => {
        set_first_name();
        set_last_name();
        set_phone_number();
        set_email();
        check_nationality();
        set_day();
        set_month();
        set_year();
        set_emergency_name();
        set_emergency_number();
        check_finish_time();
        check_heard_from();

    }
    const send_registered_user_data_to_server = () => {
        
        const post_url = 'http://10.10.11.83:80/marathon/endpoints/atheletes/addAthelete.php'

        var addBody = new FormData()
            addBody.append("firstname", $first_name)
            addBody.append("lastname", $last_name)
            addBody.append("gender", $gender)
            addBody.append("phone", $phone_number)
            addBody.append("email", $email)
            addBody.append("nationality", $nationality)
            addBody.append("date_of_birth", $dob)
            addBody.append("emergency_contact_name", $emergency_name)
            addBody.append("emergency_contact_number", $emergency_number)
            addBody.append("race_category_id", $race_category)
            addBody.append("any_medical_condition", $has_medical_condition)
            addBody.append("medical_info", $medical_information)
            addBody.append("expected_finish_time", $finish_time)
            addBody.append("heard_about_race", $heard_from)
            addBody.append("first_marathon", $first_marathon_boolean)
            addBody.append("yearly_race_count", $run_frequency)
            addBody.append("race_date_id", 1)
            addBody.append("racers_id", 2023)

        var addRequestOptions = {
            method: 'POST',
            body: addBody
        };

        fetch(post_url, addRequestOptions)
                .then((res) => {
                    res.text()
                })
                .then((data) => {
                    console.log(data)
                    console.log('posted successfully')
                    setTimeout(() => {
                        window.location.replace('/')
                    }, 3000)
                })
                .catch((error) => {
                    console.log('error', error)
                    console.log('Unsuccessfully')
                    setTimeout(() => {
                        window.location.replace('/')
                    }, 3000)
                })
    }

    const pay_with_paystack = (e) => {
        e.preventDefault();

        init_fields();

        if(error_nodes.length > 0) {
            for(let i = 0; i < error_nodes.length; i++) {
                error_nodes[i].classList.remove('hidden')
                error_nodes[i].classList.add('flex')
            } 
        }

        if(error_nodes.length == 0){
            console.log('begin paystack')
            let handler = PaystackPop.setup({
            key: 'pk_test_a5ce7e0c1640a139f25070cb7824a340cdc6d2ff',
            email: $email,
            amount: $amount * 100,
            currency: 'GHS',
            callback: send_registered_user_data_to_server,
            metadata:{
                custom_fields:[
                    {
                    "display_name":"Racer's name",
                    "variable_name":"Participant's name",
                    "value": $first_name + ' ' + $last_name
                    },
                    {
                    "display_name":"Phone number",
                    "variable_name":"Phone number",
                    "value": $phone_number
                    },
                    {
                    "display_name":"Email",
                    "variable_name":"Email",
                    "value": $email
                    },
                    {
                    "display_name":"Nationality",
                    "variable_name":"Nationality",
                    "value": $nationality
                    },
                    {
                    "display_name":"Date of birth",
                    "variable_name":"Date of birth",
                    "value": $dob
                    },
                    {
                    "display_name":"Race category",
                    "variable_name":"Race category",
                    "value": $race_category
                    },
                    {
                    "display_name":"Gender",
                    "variable_name":"Gender",
                    "value": $gender
                    },
                    {
                    "display_name":"Emergency contact name",
                    "variable_name":"Emergency contact name",
                    "value": $emergency_name
                    },
                    {
                    "display_name":"Emergency contact number",
                    "variable_name":"Emergency contact number",
                    "value": $emergency_number
                    },
                    {
                    "display_name":"Expected finish time",
                    "variable_name":"Expected finish time",
                    "value": $finish_time
                    },
                    {
                    "display_name":"Medical conditions",
                    "variable_name":"Medical conditions",
                    "value": $medical_information
                    }
                ]
            }
        });

        handler.openIframe();
        }
    }

    onMount(() => {
        init_fields();
    })

</script>

<style lang="postcss">
    .registration_form {
        @apply w-1/2 px-6 pt-6 pb-20 h-full overflow-y-scroll;
    }
    .logo_wrapper {
        @apply flex flex-row items-center block;
    }
    .logo_img {
        @apply h-20 mr-4;
    }
    .logo_title {
        @apply text-2xl font-extralight tracking-wide text-primary_red;
    }
    .form_header {
        @apply mt-12 text-primary_red text-5xl tracking-wide font-normal leading-tight px-6;
    }
    .heading_banner {
        @apply hidden;
    }
    .marathon_form {
        @apply mt-6 px-6;
    }
    .form_title {
        @apply text-2xl font-normal mt-12 mb-6;
    }
    .category_wrapper, .gender_wrapper, .medical_boolean_container, .first_marathon_wrapper, .run_freq_wrapper {
        @apply flex flex-row w-full rounded-md border border-gray-border;
    }
    .category_type_wrapper, .gender_type_wrapper, .medical_boolean_wrapper, .first_marathon_answer_wrapper, .run_freq_answer_wrapper {
        @apply relative flex flex-[1] justify-center items-center cursor-pointer;
    }
    .category_type_wrapper:nth-of-type(2) {
        @apply border-l border-r border-gray-border;
    }
    .category_type_wrapper:first-of-type input + .cell-bg {
        @apply rounded-l-md;
    }
    .category_type_wrapper:last-of-type input + .cell-bg {
        @apply rounded-r-md;
    }
    .category_type_wrapper input[type="radio"], .gender_type_wrapper input[type="radio"], .medical_boolean_wrapper input[type="radio"], .first_marathon_answer_wrapper input[type="radio"], .run_freq_answer_wrapper input[type="radio"] {
        @apply opacity-0 w-0 h-0;
    }
    .category_type_wrapper label, .gender_type_wrapper label, .medical_boolean_wrapper label, .first_marathon_answer_wrapper label, .run_freq_answer_wrapper label {
        @apply font-normal text-med_blue text-lg mb-0 w-full h-full py-4 flex justify-center items-center cursor-pointer;
    }
    .category_type_wrapper label {
        @apply flex flex-col items-center justify-center;
    }
    .category_type_wrapper label h3 {
        @apply font-bold text-xl mt-1 pointer-events-none;
    }
    .category_type_wrapper label span {
        @apply pointer-events-none;
    }
    .category_type_wrapper .cell-bg, .gender_type_wrapper .cell-bg, .medical_boolean_wrapper .cell-bg, .first_marathon_answer_wrapper .cell-bg, .run_freq_answer_wrapper .cell-bg {
        @apply h-full w-full absolute -z-10;
    }
    .category_type_wrapper input:checked ~ label, .gender_type_wrapper input:checked ~ label, .medical_boolean_wrapper input:checked ~ label, .first_marathon_answer_wrapper input:checked ~ label, .run_freq_answer_wrapper input:checked ~ label {
        @apply text-white;
    }
    .category_type_wrapper input:checked + .cell-bg, .gender_type_wrapper input:checked + .cell-bg, .medical_boolean_wrapper input:checked + .cell-bg, .first_marathon_answer_wrapper input:checked + .cell-bg, .run_freq_answer_wrapper input:checked + .cell-bg {
        @apply text-white bg-med_blue;
    }
    .participant_info_field {
        @apply flex flex-col mb-6;
    }
    .participant_info_field input[type=text], .participant_info_field input[type=tel], .participant_info_field input[type=number], .participant_info_field input[type=email] {
        @apply border border-gray-input-border rounded-md h-12 p-2 text-[1.1rem] font-normal;
    }
    .participant_info_field input[type=text]:focus, .participant_info_field input[type=tel]:focus, .participant_info_field input[type=number]:focus, .participant_info_field input[type=email]:focus, .medical_condition .medical_condition_info:focus {
        box-shadow: 0 0 0 4px rgba(86, 156, 237, 0.6);
        @apply outline-0 border-gray-border;
    }
    .participant_info_field label, .participant_info_field .input_label, .medical_info_wrapper .input_label {
        @apply text-gray-input-label text-base/5 mb-2.5;
    }
    .participant_info_field .required, .medical_info_wrapper .input_label .required {
        @apply text-primary_red mr-2;
    }
    .participant_info_field_two_col {
        @apply flex flex-row gap-8 h-auto relative;
    }
    .participant_info_field_two_col .participant_info_field {
        @apply w-1/2 h-full mb-2;
    }
    .participant_info_field_two_col .participant_info_field:first-of-type {
        @apply h-[inherit] flex flex-col justify-between;
    }
    .participant_info_field_two_col .participant_info_field:last-of-type .input_label {
        @apply mb-4;
    }
    .participant_info_field_two_col .participant_info_field label, .first_marathon_answer_wrapper label, .run_freq_answer_wrapper label {
        @apply m-0;
    }
    .dob_wrapper {
        @apply flex flex-row w-full gap-5;
    }
    .dob_wrapper .dob_day, .dob_wrapper .dob_month {
        @apply flex flex-[1] flex-col;
    }
    .dob_wrapper .dob_year {
        @apply flex flex-[2] flex-col;
    }
    .dob_wrapper .dob_day input, .dob_wrapper .dob_month input, .dob_wrapper .dob_year input {
        @apply w-full;
    }
    .dob_wrapper .dob_day label, .dob_wrapper .dob_month label, .dob_wrapper .dob_year label {
        @apply text-xs mb-1 italic ml-1 text-gray;
    }
    .nationality_input_wrapper, .finish_time_input_wrapper, .heard_from_input_wrapper {
        @apply relative cursor-pointer;
    }
    .nationality_input, .finish_time_input, .heard_from_input {
        @apply w-full;
    }
    .nationality_input_wrapper img, .finish_time_input_wrapper img, .heard_from_input_wrapper img {
        @apply absolute right-0 top-1/2 -translate-y-1/2 -translate-x-1/2;
    }
    .nationality_container, .finish_time_container, .heard_from_container {
        @apply relative;
    }
    .nationalities, #finish_times, #heard_from {
        @apply absolute bottom-0 translate-y-full w-full z-10 border border-gray-input-border rounded-md rounded-t-none text-[1.1rem] font-normal h-48 overflow-y-scroll;
        box-shadow: 0 0 0 4px rgba(86, 156, 237, 0.6);
    }
    .nationalities .nationality, #finish_times .finish_time, #heard_from .heard_from {
        @apply p-2 bg-white border-b cursor-pointer border-gray-input-border hover:text-white hover:bg-blue;
    }
    .nationalities .nationality:last-of-type, #finish_times .finish_time:last-of-type, #heard_from .heard_from:last-of-type {
        @apply border-0;
    }
    .dropdown_caret {
        @apply ease-in-out duration-300 transition-all;
    }
    .medical_boolean_container {
        @apply mt-4;
    }
    .medical_condition {
        @apply flex flex-col mt-10;
    }
    .medical_condition .medical_condition_info {
        @apply border border-gray-input-border rounded-md p-2 text-[1.1rem] font-normal;
    }

    .submit_btn {
        @apply flex flex-row mx-auto mt-12 justify-center items-center font-medium uppercase text-white text-2xl cursor-pointer leading-7 px-9 py-5 w-fit border-b-2 rounded border-primary_red_dark border-[1px] duration-[250ms] ease-in-out bg-primary_red hover:bg-primary_red_dark hover:border-primary_red;
        box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12), 0 3px 1px -2px rgba(0,0,0,.2);
    }
    .error {
        @apply flex-row items-center text-error_red font-light text-sm pt-2 ml-1;
    }
    .error small {
        @apply font-bold;
    }
    .dob_errors {
        @apply flex flex-col mb-10;
    }

    /* // X-Small devices (portrait phones, less than 576px) */
    @media(min-width: 300px)and (max-width: 575.98px) {
        .registration_form {
            @apply w-full px-0 pt-6 pb-20 h-full overflow-y-scroll;
        }
        .logo_wrapper {
            @apply px-6;
        }
        .heading_banner {
            @apply bg-register_hero bg-center bg-cover h-64 block;
        }
        .form_header {
            @apply my-6 text-primary_red text-3xl tracking-wide font-normal leading-tight py-2 px-6;
        }
        .category_wrapper, .run_freq_wrapper {
            @apply grid grid-cols-mobile_radio_btn_selector;
        }
        .category_type_wrapper:nth-of-type(2), .run_freq_answer_wrapper:nth-of-type(2) {
            @apply border-l border-b border-r-0 border-gray-border;
        }
        .category_type_wrapper:nth-of-type(3), .run_freq_answer_wrapper:nth-of-type(3)  {
            @apply border-r border-t border-gray-border;
        }
        .participant_info_field_two_col {
            @apply flex flex-col gap-8 h-auto relative;
        }
        .participant_info_field_two_col .participant_info_field {
            @apply w-full h-full mb-2;
        }
    }

    /* // Small devices (landscape phones, less than 768px) */
    @media(min-width: 577px)and (max-width: 767.98px) {

    }

    /* // Medium devices (tablets, less than 992px) */
    @media(min-width: 767.99px)and (max-width: 991.98px) {
    
    }

    /* // Large devices (desktops, less than 1200px) */
    @media(min-width: 991.99px)and (max-width: 1199.98px) {
        
        
    }
</style>

<div class="registration_form">
    <div class="form_heading">
        <a href="/" class="logo_wrapper">
            <img src="/images/accramarathonlogo.png" alt="Accra Marathon logo" class="logo_img"/>
        </a>
        <h1 class="form_header">Join the Journey,<br/>Register for the<br/>Accra Marathon</h1>
        <div class="heading_banner">
            <div class="caption">
                <span class="caption_text"></span>
            </div>
        </div>
    </div>

    <form class="marathon_form">
        <h2 class="form_title">Race Category</h2>
        <div class="category_wrapper">
            <div class="category_type_wrapper">
                <input id="marathon" type="radio" name="race_category" checked/>
                <div class="cell-bg"></div>
                <label for="marathon" on:click={set_selected_category}><span>Marathon</span><h3>&#8373; 100</h3></label>
            </div>
            <div class="category_type_wrapper">
                <input id="corporate" type="radio" name="race_category"/>
                <div class="cell-bg"></div>
                <label for="corporate" on:click={set_selected_category}><span>Corporate</span><h3>&#8373; 70</h3></label>
            </div>
            <div class="category_type_wrapper">
                <input id="civil_service" type="radio" name="race_category"/>
                <div class="cell-bg"></div>
                <label for="civil_service" on:click={set_selected_category}><span>Civil Service</span><h3>&#8373; 50</h3></label>
            </div>
            <div class="category_type_wrapper">
                <input id="juniors" type="radio" name="race_category"/>
                <div class="cell-bg"></div>
                <label for="juniors" on:click={set_selected_category}><span>Juniors</span><h3>&#8373; 30</h3></label>
            </div>
        </div>

        <h2 class="form_title">Participant Information</h2>
        <div class="participant_info_wrapper">
            <div class="participant_info_field">
                <label for="first_name"><span class="required">*</span>First Name</label>
                <input bind:this={first_name_element} type="text" id="first_name" on:change={set_first_name}/>
                <span class="error hidden"><small>&#9587;</small>&nbsp;&nbsp;Tell us your first name</span>
            </div>
            <div class="participant_info_field">
                <label for="last_name"><span class="required">*</span>Last Name</label>
                <input bind:this={last_name_element} type="text" id="last_name" on:change={set_last_name}/>
                <span class="error hidden"><small>&#9587;</small>&nbsp;&nbsp;Tell us your last name</span>
            </div>
            <div class="participant_info_field">
                <label for="phone_number"><span class="required">*</span>Phone number</label>
                <input bind:this={phone_number_element} type="tel" id="phone_number" on:change={set_phone_number}/>
                <span class="error hidden"><small>&#9587;</small>&nbsp;&nbsp;Please tell us your phone number with no dashes and no spaces</span>
            </div>
            <div class="participant_info_field">
                <label for="email"><span class="required">*</span>Email</label>
                <input bind:this={email_element} type="email" id="email" on:change={set_email}/>
                <span class="error hidden"><small>&#9587;</small>&nbsp;&nbsp;We need your email to send you your receipt</span>
            </div>
            <div class="participant_info_field nationality_container">
                <label for="nationalities"><span class="required">*</span>Nationality</label>
                <div bind:this={nationality_element} class="nationality_input_wrapper" on:click={toggle_nationalities}>
                    <img src="/images/dropdown_caret.png" alt="select your nationality" class="dropdown_caret {show_nationalities ? 'rotate-180' : ''}"/>
                    <input name="nationalities" id="nationalities" class="nationality_input" type="text" placeholder="Select your Nationality..." value={$nationality}/>
                </div>
                {#if show_nationalities}
                    <ul class="nationalities" transition:fade>
                        {#each Nationalities as nationality}
                            <li class="nationality" on:click={select_nationality}>{nationality}</li>
                        {/each}
                    </ul>
                {/if}
                <span class="error hidden"><small>&#9587;</small>&nbsp;&nbsp;Tell us your nationality</span>
            </div>
            <div class="participant_info_field_two_col">
                <div class="participant_info_field">
                    <span class="input_label"><span class="required">*</span>Gender</span>
                    <div class="gender_wrapper">
                        <div class="gender_type_wrapper">
                            <input id="male" type="radio" name="gender" checked/>
                            <div class="cell-bg"></div>
                            <label for="male" on:click={set_selected_gender}>Male</label>
                        </div>
                        <div class="gender_type_wrapper">
                            <input id="Female" type="radio" name="gender"/>
                            <div class="cell-bg"></div>
                            <label for="Female" on:click={set_selected_gender}>Female</label>
                        </div>
                    </div>
                </div>
                <div class="participant_info_field">
                    <span class="input_label"><span class="required">*</span>Date of Birth</span>
                    <div class="dob_wrapper">
                        <div class="dob_day">
                            <label for="day">Day</label>
                            <input bind:this={dob_day_element} id="day" type="number" name="dob" placeholder="DD" min="1" max="31" on:change={set_day} />
                        </div>
                        <div class="dob_month">
                            <label for="month">Month</label>
                            <input bind:this={dob_month_element} id="month" type="number" name="dob" placeholder="MM" min="1" max="12" on:change={set_month} />
                        </div>
                        <div class="dob_year">
                            <label for="year">Year</label>
                            <input bind:this={dob_year_element} id="year" type="number" name="dob" placeholder="YYYY" min="1903" max="2016" on:change={set_year}/>
                        </div>
                    </div>
                </div>
            </div>
            <div class="dob_errors" bind:this={dob_errors}>
                <span class="error hidden"><small>&#9587;</small>&nbsp;&nbsp;Please enter a day between 1 and 31</span>
                <span class="error hidden"><small>&#9587;</small>&nbsp;&nbsp;Please enter a month between 1 and 12</span>
                <span class="error hidden"><small>&#9587;</small>&nbsp;&nbsp;Please enter a four digit year between 1903 and 2016</span>
            </div>
            <div class="participant_info_field">
                <label for="emergency_contact_name"><span class="required">*</span>Emergency contact name</label>
                <input bind:this={emergency_name_element} type="text" id="emergency_contact_name" on:change={set_emergency_name}/>
                <span class="error hidden"><small>&#9587;</small>&nbsp;&nbsp;Tell us your emergency contact's name</span>
            </div>
            <div class="participant_info_field">
                <label for="emergency_contact_number"><span class="required">*</span>Emergency contact number</label>
                <input bind:this={emergency_number_element} type="tel" id="emergency_contact_number" on:change={set_emergency_number}/>
                <span class="error hidden"><small>&#9587;</small>&nbsp;&nbsp;Tell us your emergency contact's number</span>
            </div>
        </div>

        <h2 class="form_title">Medical Information</h2>
        <div class="medical_info_wrapper">
            <span class="input_label"><span class="required">*</span>Do you have any medical conditions that the medical team should be aware of?</span>

            <div class="medical_boolean_container">
                <div class="medical_boolean_wrapper">
                    <input id="medical_yes" type="radio" name="medical_boolean"/>
                    <div class="cell-bg"></div>
                    <label for="medical_yes" on:click={() => {
                        $has_medical_condition = true
                    }}>Yes</label>
                </div>
                <div class="medical_boolean_wrapper">
                    <input id="medical_no" type="radio" name="medical_boolean" checked/>
                    <div class="cell-bg"></div>
                    <label for="medical_no" on:click={() => {
                        $has_medical_condition = false
                    }}>No</label>
                </div>
            </div>

            {#if $has_medical_condition}
                <div class="medical_condition" transition:fade>
                    <label class="input_label" for="medical_condition_info">If yes, please provide details here:</label>
                    <textarea class="medical_condition_info" id="medical_condition_info" name="medical_condition_info" rows="4" on:change={set_medical_information}></textarea>
                </div>
            {/if}
        </div>

        <h2 class="form_title">About You</h2>
        <div class="about_you_wrapper">

            <div class="participant_info_field finish_time_container">
                <label for="finish_time_input"><span class="required">*</span>What is your expected finish time?</label>
                <div bind:this={finish_time_element} class="finish_time_input_wrapper" on:click={toggle_finish_times}>
                    <img src="/images/dropdown_caret.png" alt="select your finish_time" class="dropdown_caret {show_finish_times ? 'rotate-180' : ''}"/>
                    <input id="finish_time_input" class="finish_time_input" type="text" placeholder="Select a finish time" value={$finish_time}/>
                </div>
                {#if show_finish_times}
                    <ul name="finish_times" id="finish_times" transition:fade>
                        {#each $finish_time_list as finish_time}
                            <li class="finish_time" on:click={select_finish_time}>{finish_time}</li>
                        {/each}
                    </ul>
                {/if}
                <span class="error hidden"><small>&#9587;</small>&nbsp;&nbsp;Don't forget your finish time</span>
            </div>

            <div class="participant_info_field heard_from_container">
                <label for="heard_from_input"><span class="required">*</span>How did you hear about this event?</label>
                <div bind:this={heard_from_element} class="heard_from_input_wrapper" on:click={toggle_heard_from}>
                    <img src="/images/dropdown_caret.png" alt="select how you heard about us" class="dropdown_caret {show_heard_from ? 'rotate-180' : ''}"/>
                    <input id="heard_from_input" class="heard_from_input" type="text" placeholder="Select one" value={$heard_from}/>
                </div>
                {#if show_heard_from}
                    <ul name="heard_from" id="heard_from" transition:fade>
                        {#each HeardFrom as heard_from}
                            <li class="heard_from" on:click={select_heard_from}>{heard_from}</li>
                        {/each}
                    </ul>
                {/if}
                <span class="error hidden"><small>&#9587;</small>&nbsp;&nbsp;Tell us where you heard about the Accra marathon</span>
            </div>

            <div class="participant_info_field">
                <span class="input_label"><span class="required">*</span>Will this be your first marathon?</span>
                <div class="first_marathon_wrapper">
                    <div class="first_marathon_answer_wrapper">
                        <input id="first_marathon_yes" type="radio" name="first_marathon" checked/>
                        <div class="cell-bg"></div>
                        <label for="first_marathon_yes" on:click={set_selected_first_marathon_answer}>Yes</label>
                    </div>
                    <div class="first_marathon_answer_wrapper">
                        <input id="first_marathon_no" type="radio" name="first_marathon"/>
                        <div class="cell-bg"></div>
                        <label for="first_marathon_no" on:click={set_selected_first_marathon_answer}>No</label>
                    </div>
                </div>
            </div>

            <div class="participant_info_field">
                <span class="input_label"><span class="required">*</span>How many running events do you take part in each year?</span>
                <div class="run_freq_wrapper">
                    <div class="run_freq_answer_wrapper">
                        <input id="0_to_5_freq" type="radio" name="run_freq" checked/>
                        <div class="cell-bg"></div>
                        <label for="0_to_5_freq" on:click={set_selected_run_frequency}>0 to 5</label>
                    </div>
                    <div class="run_freq_answer_wrapper">
                        <input id="6_to_10_freq" type="radio" name="run_freq"/>
                        <div class="cell-bg"></div>
                        <label for="6_to_10_freq" on:click={set_selected_run_frequency}>6 to 10</label>
                    </div>
                    <div class="run_freq_answer_wrapper">
                        <input id="11_to_15_freq" type="radio" name="run_freq"/>
                        <div class="cell-bg"></div>
                        <label for="11_to_15_freq" on:click={set_selected_run_frequency}>11 to 15</label>
                    </div>
                    <div class="run_freq_answer_wrapper">
                        <input id="more_than_15_freq" type="radio" name="run_freq"/>
                        <div class="cell-bg"></div>
                        <label for="more_than_15_freq" on:click={set_selected_run_frequency}>More than 15</label>
                    </div>
                </div>
            </div>

        </div>

        <button type="submit" class="submit_btn" on:click={pay_with_paystack}>
            <span>Register &#8373; {$amount}</span>
        </button>

    </form>

</div>