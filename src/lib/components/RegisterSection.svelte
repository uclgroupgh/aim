<svelte:head>
	<script src="https://js.paystack.co/v1/inline.js"></script>
</svelte:head>

<script>
    import Nationalities from "../data/Nationalities";
    import { fade, slide } from 'svelte/transition';
    import { CivilService, Juniors, Adults, Corporate } from '../data/FinishTimes';
    import { race_category, first_name, last_name, phone_number, email, nationality, gender, dob, emergency_name, emergency_number, has_medical_condition, medical_information, first_marathon_boolean, finish_time, finish_time_list, heard_from, run_frequency, amount } from '../stores/store';
    import HeardFrom from "../data/HeardFrom";

    let day, month, year, category;
    let show_nationalities = false;
    let show_finish_times = false;
    let show_heard_from = false;
    let has_first_name = false;
    let has_last_name = false;
    let has_phone_number = false;
    let has_email = false;
    let has_day = false;
    let has_month = false;
    let has_year = false;
    let has_emergency_name = false;
    let has_emergency_number = false;
    let has_nationality = false;
    let has_finish_time = false;
    let has_heard_from = false;
    let show_first_page = true;
    let show_second_page = false;
    let first_name_element, last_name_element, phone_number_element, email_element, nationality_input_element, dob_day_element, dob_month_element, dob_year_element, emergency_name_element, emergency_number_element, finish_time_element, heard_from_element;


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
            first_name_element.classList.add('error')
            has_first_name = false;
        } else {
            first_name_element.classList.remove('error')
            has_first_name = true;
        }
    }
    const set_last_name = () => {
        last_name.set(last_name_element.value)
        if($last_name.length < 3) {
            last_name_element.classList.add('error')
            has_last_name = false;
        } else {
            last_name_element.classList.remove('error')
            has_last_name = true;
        }
    }
    const set_phone_number = () => {
        phone_number.set(phone_number_element.value)
        if($phone_number.length != 10) {
            phone_number_element.classList.add('error')
            has_phone_number = false;
        } else { 
            phone_number_element.classList.remove('error')
            has_phone_number = true;
        }
    }
    const set_email = () => {
        let emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        email.set(email_element.value)
        if(emailPattern.test($email) == false) {
            email_element.classList.add('error')
            has_email = false;
        } else {
            email_element.classList.remove('error')
            has_email = true;
        }
    }
    const set_selected_gender = (e) => {
        gender.set(e.target.innerHTML)
    }
    const select_nationality = (e) => {
        nationality.set(e.target.innerHTML)
        toggle_nationalities();
    }
    const set_day = () => {
        day = dob_day_element.value
        if(!day || day < 1 || day > 31) {
            dob_day_element.classList.add('error')
            has_day = false;
        } else {
            dob_day_element.classList.remove('error')
            has_day = true;
        }
    }
    const set_month = () => {
        month = dob_month_element.value
        if(!month || month < 1 || month > 12) {
            dob_month_element.classList.add('error')
            has_month = false;
        } else {
            dob_month_element.classList.remove('error')
            has_month = true;
        }
    }
    const set_year = () => {
        year = dob_year_element.value
        if(!year || year < 1903 || year > 2016) {
            dob_year_element.classList.add('error')
            has_year = false;
        } else {
            dob_year_element.classList.remove('error')
            has_year = true;
        }
    }

    $: dob.set(year + '-' + month + '-' + day);

    const set_emergency_name = () => {
        emergency_name.set(emergency_name_element.value)
        if($emergency_name.length < 3){
            emergency_name_element.classList.add('error')
            has_emergency_name = false;
        } else {
            emergency_name_element.classList.remove('error')
            has_emergency_name = true;
        }
    }
    const set_emergency_number = () => {
        emergency_number.set(emergency_number_element.value)
        if($emergency_number.length != 10) {
            emergency_number_element.classList.add('error')
            has_emergency_number = false;
        } else {
            emergency_number_element.classList.remove('error')
            has_emergency_number = true;
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
        has_finish_time = true;
    }
    const select_heard_from = (e) => {
        heard_from.set(e.target.innerHTML);
        show_heard_from = false;
        has_heard_from = true;
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
        if(Nationalities.includes($nationality)) {
            nationality_input_element.classList.remove('error')
            has_nationality = true;
        }else {
            nationality_input_element.classList.add('error')
            has_nationality = false;
        }
    }
    const toggle_finish_times = () => {
        if(show_heard_from) {
            show_heard_from = false;
        }
        show_finish_times = !show_finish_times
    }
    const toggle_heard_from = () => {
        if(show_finish_times) {
            show_finish_times = false;
        }
        show_heard_from = !show_heard_from
    }

    const go_to_second_page = () => {
        show_first_page = false;
        show_second_page = true;
    }
    const go_to_first_page = () => {
        show_first_page = true;
        show_second_page = false;
    }
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
        check_heard_from();

    }
    const send_registered_user_data_to_server = () => {
        
        const post_url = 'https://mega.acorns.life/marathon/endpoints/atheletes/addAthelete.php'

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
            addBody.append("heard_about_race", $heard_from)
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
                    "display_name":"Medical conditions",
                    "variable_name":"Medical conditions",
                    "value": $medical_information
                    }
                ]
            }
        });

        handler.openIframe();
    }
</script>

<style lang="postcss">
    .register_section {
        @apply bg-[#f5f7f9] px-0 py-[130px] relative before:absolute before:top-0 before:left-0 before:w-full before:h-[285px] before:bg-primary_turquoise before:bg-[center_top] before:bg-no-repeat before:bg-cover before:bg-registration_bg
        after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-[center_top] after:bg-no-repeat after:bg-registration_bg_after;
    }
    .register_section::before {
        -webkit-clip-path: polygon(100% 0, 100% 91%, 50% 100%, 0 91%, 0 0);
        clip-path: polygon(100% 0, 100% 91%, 50% 100%, 0 91%, 0 0);
        content:'';
    }
    .container {
        @apply max-w-[1300px] w-full px-4 mx-auto relative z-10;
    }
    .register_content {
        @apply flex flex-row justify-end h-[850px] relative;
        -webkit-box-pack: end;
    }
    .register_img {
        @apply absolute left-[20px] top-[42%] -translate-y-1/2 max-w-[53%];
    }
    .register_img img{
        @apply h-full;
    }
    .register_form_wrapper {
        @apply max-w-[610px] w-full z-10 h-full flex flex-row items-center justify-center;
    }
    .register_form {
        @apply px-16 pt-16 pb-16 bg-white bg-opacity-90 w-full h-auto;
    }
    .register_form_title {
        @apply text-center text-3xl font-bold mb-10;
    }
    form {
        @apply flex flex-col w-full relative h-[-webkit-fill-available];
    }
    form .first_page {
        @apply flex flex-col w-full relative px-1;
    }
    form .second_page {
        @apply flex flex-col w-full relative px-1;
    }
    .form_item {
        @apply w-full mb-5;
    }
    .form_item input, .form_item .nationality, .form_item .nationality_input, .form_item .finish_time_input, .form_item .finish_time, .form_item .heard_from_input, .form_item .heard_from {
        @apply w-full h-[50px] px-[20px];
    }
    .form_item textarea {
        @apply w-full p-[20px] h-[150px];
    }
    .medical_info_wrapper {
        @apply mt-4;
    }
    .medical_boolean_container {
        @apply mt-4 mb-6;
    }
    .gender_wrapper, .category_wrapper, .medical_boolean_container {
        @apply flex flex-row w-full border border-gray-border;
    }
    .gender_type_wrapper, .category_type_wrapper, .medical_boolean_wrapper {
        @apply relative flex flex-[1] justify-center items-center cursor-pointer z-10 border-r border-gray-border;
    }
    .gender_type_wrapper:last-of-type, .category_type_wrapper:last-of-type, .medical_boolean_wrapper {
        @apply border-r-0;
    }
    .gender_type_wrapper input[type="radio"], .category_type_wrapper input[type="radio"], .medical_boolean_wrapper input[type="radio"]{
        @apply opacity-0 w-0 h-0;
    }
    .gender_type_wrapper label, .category_type_wrapper label, .medical_boolean_wrapper label {
        @apply font-normal text-primary_turquoise text-lg mb-0 w-full h-full py-4 flex flex-col justify-center items-center cursor-pointer;
    }
    .category_type_wrapper label {
        @apply text-base;
    }
    .gender_type_wrapper .cell-bg, .category_type_wrapper .cell-bg, .medical_boolean_wrapper .cell-bg {
        @apply h-full w-full absolute -z-10;
    }
    .gender_type_wrapper input:checked ~ label, .category_type_wrapper input:checked ~ label, .medical_boolean_wrapper input:checked ~ label {
        @apply text-white;
    }
    .gender_type_wrapper input:checked + .cell-bg, .category_type_wrapper input:checked + .cell-bg, .medical_boolean_wrapper input:checked + .cell-bg {
        @apply text-white bg-primary_turquoise;
    }
    .input_label {
        @apply block text-base/5 mb-3;
    }
    .dob_wrapper {
        @apply flex flex-row w-full gap-4 h-full;
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
    .form_item input[type=text], .form_item input[type=tel], .form_item input[type=number], .form_item input[type=email], .form_item .nationality_input, .form_item textarea, .form_item .finish_time_input, .form_item .heard_from_input {
        @apply border border-gray-input-border text-[1.1rem] font-normal;
        -webkit-transition: .35s ease;
        transition: .35s ease;
    }
    .form_item .nationality, .form_item .finish_time, .form_item .heard_from {
        @apply text-[1.1rem] font-normal;
        -webkit-transition: .35s ease;
        transition: .35s ease;
    }
    .form_item .nationality:hover, .form_item .nationality:focus, .form_item .finish_time:hover, .form_item .finish_time:focus, .form_item .heard_from:hover, .form_item .heard_from:focus {
        @apply bg-select_option_hover;
    }
    .form_item input[type=text]:focus, .form_item input[type=tel]:focus, .form_item input[type=number]:focus, .form_item input[type=email]:focus, .form_item .nationality_input:focus, .form_item .finish_time_input:focus, .form_item .heard_from_input:focus, .form_item textarea:focus, .form_item input[type=text]:hover, .form_item input[type=tel]:hover, .form_item input[type=number]:hover, .form_item input[type=email]:hover, .form_item .nationality_input:hover, .form_item .finish_time_input:hover, .form_item .heard_from_input:hover, .form_item textarea:hover {
        @apply outline-0;
        border-color: #00A9AC;
        -webkit-box-shadow: 0px 0px 10px rgba(0,169,172,0.3);
        box-shadow: 0px 0px 10px rgba(0,169,172,0.3);
    }
    .form_item.nationality_input_wrapper, .form_item.finish_time_input_wrapper, .form_item.heard_from_input_wrapper {
        @apply relative;
    }
    .form_item .nationality, .form_item .finish_time, .form_item .heard_from {
        @apply cursor-pointer border-x-0 border-t-0 flex items-center text-[#9ca3af];
    }

    .form_item .nationality_input, .form_item .finish_time_input, .form_item .heard_from_input {
        @apply cursor-pointer flex items-center text-[#9ca3af];
    }
    .nationalities, .finish_times, .heard_froms {
        @apply h-48 overflow-y-scroll absolute z-10 top-full w-full bg-white border border-gray-input-border border-t-0;
    }
    .second_page_btn_wrapper {
        @apply h-[50px] mt-4;
    }
    .second_page_btn {
        @apply bg-primary_turquoise w-fit px-8 py-3 flex items-center justify-center cursor-pointer text-white border-2 border-primary_turquoise hover:bg-white hover:text-primary_turquoise ;
        transition: .35s ease;
    }
    .second_page_btn span {
        @apply uppercase font-bold tracking-wider text-lg;
    }
    .second_page_nav_btn_wrapper {
        @apply h-[50px] mt-4 flex flex-row justify-between;
    }
    .first_page_btn, .submit_btn {
        @apply bg-primary_turquoise w-fit px-8 py-3 flex items-center justify-center cursor-pointer text-white border-2 border-primary_turquoise hover:bg-white hover:text-primary_turquoise ;
        transition: .35s ease;
    }
    .first_page_btn span, .submit_btn span  {
        @apply uppercase font-bold tracking-wider text-lg;
    }
    
    @media(min-width: 300px)and (max-width: 575.98px) {
        .register_section {
            @apply before:h-[155px] py-[20px];
        }
        .register_form {
            @apply px-4;
        }
        .nationalities, .finish_times, .heard_froms {
            @apply h-28;
        }
        .category_wrapper {
            @apply grid grid-cols-two_column;
        }
        .first_page_btn, .submit_btn {
            @apply px-6;
        }
        .first_page_btn span, .submit_btn span  {
            @apply text-base;
        }
        .second_page_btn span {
            @apply text-base;
        }
        .register_img {
            @apply hidden;
        }
    }

    @media(min-width: 577px)and (max-width: 767.98px) {

    }

    @media(min-width: 767.99px)and (max-width: 991.98px) {

    }

    @media(min-width: 991.99px)and (max-width: 1199.98px) {
        
        
    }
</style>

<section class="register_section">
<div class="container">
    <div class="register_content">
        <div class="register_img">
            <img src="/images/register-img.png" />
        </div>
        <div class="register_form_wrapper">
            <div class="register_form">
                <h4 class="register_form_title">Register form</h4>
                <form id="form">
                    {#if show_first_page}
                        <div class="first_page" transition:fade>
                            <div class="form_item">
                                <input type="text" class="" placeholder="First name"on:change={set_first_name} bind:this={first_name_element}/>
                            </div>
                            <div class="form_item">
                                <input type="text" placeholder="Last name" on:change={set_last_name} bind:this={last_name_element}/>
                            </div>
                            <div class="form_item">
                                <input type="tel" placeholder="Phone number" on:change={set_phone_number} bind:this={phone_number_element}/>
                            </div>
                            <div class="form_item">
                                <input type="email" placeholder="Email" on:change={set_email} bind:this={email_element}/>
                            </div>
                            <div class="form_item">
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
                            <div class="form_item">
                                <div class="dob_wrapper">
                                    <div class="dob_day">
                                        <input id="day" type="number" name="dob" placeholder="DD" min="1" max="31" on:change={set_day} bind:this={dob_day_element}/>
                                    </div>
                                    <div class="dob_month">
                                        <input id="month" type="number" name="dob" placeholder="MM" min="1" max="12" on:change={set_month} bind:this={dob_month_element}/>
                                    </div>
                                    <div class="dob_year">
                                        <input id="year" type="number" name="dob" placeholder="YYYY" min="1903" max="2016" on:change={set_year} bind:this={dob_year_element}/>
                                    </div>
                                </div>
                            </div>
                            <div class="form_item nationality_input_wrapper">
                                <span class="nationality_input" on:click={toggle_nationalities} bind:this={nationality_input_element}>{$nationality}</span>
                                
                                {#if show_nationalities}
                                    <ul class="nationalities" transition:slide>
                                        {#each Nationalities as nationality}
                                            <li class="nationality" on:click={select_nationality}>{nationality}</li>
                                        {/each}
                                    </ul>
                                {/if}
                            </div>
                            {#if has_first_name && has_last_name && has_phone_number && has_email && has_day && has_month && has_year && has_nationality}
                            <div class="second_page_btn_wrapper">
                                    <div class="second_page_btn" transition:fade on:click={go_to_second_page}>
                                        <span>Next</span>
                                    </div>
                            </div>
                            {/if}
                        </div>
                    {/if}
    
                    {#if show_second_page}
                        <div class="second_page">
                            <div class="form_item">
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
                            </div>
                            <div class="form_item">
                                <div class="medical_info_wrapper">
                                    <span class="input_label">Do you have any medical conditions that the medical team should be aware of?</span>
                        
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
                                            <textarea class="medical_condition_info" id="medical_condition_info" name="medical_condition_info" rows="4" on:change={set_medical_information} placeholder="If yes, please provide details here"></textarea>
                                        </div>
                                    {/if}
                                </div>
                            </div>
                            <div class="form_item">
                                <input type="text" placeholder="Emergency contact name" on:change={set_emergency_name} bind:this={emergency_name_element}/>
                            </div>
                            <div class="form_item">
                                <input type="tel" placeholder="Emergency contact number" on:change={set_emergency_number} bind:this={emergency_number_element}/>
                            </div>
                            <!-- <div class="form_item finish_time_input_wrapper">
                                <span class="finish_time_input" on:click={toggle_finish_times} bind:this={finish_time_element}>{$finish_time}</span>
                                
                                {#if show_finish_times}
                                    <ul class="finish_times" transition:slide>
                                        {#each $finish_time_list as finish_time}
                                            <li class="finish_time" on:click={select_finish_time}>{finish_time}</li>
                                        {/each}
                                    </ul>
                                {/if}
                            </div> -->
                            <div class="form_item heard_from_input_wrapper">
                                <span class="heard_from_input" on:click={toggle_heard_from} bind:this={heard_from_element}>{$heard_from}</span>
                                
                                {#if show_heard_from}
                                    <ul class="heard_froms" transition:slide>
                                        {#each HeardFrom as heard_from}
                                            <li class="heard_from" on:click={select_heard_from}>{heard_from}</li>
                                        {/each}
                                    </ul>
                                {/if}
                            </div>
                            <div class="second_page_nav_btn_wrapper">
                                <div class="first_page_btn" transition:fade on:click={go_to_first_page}>
                                    <span>Back</span>
                                </div>
                                {#if has_heard_from && has_emergency_number && has_emergency_name}
                                    <div class="submit_btn" transition:fade on:click={pay_with_paystack}>
                                        <span>Register &#8373; {$amount}</span>
                                    </div>
                                {/if}
                            </div>
                        </div>
                    {/if}
                </form>
            </div>
        </div>
    </div>
</div>
</section>