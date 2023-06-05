<script>
    import Nationalities from "../data/Nationalities";
    import { fade } from 'svelte/transition';
    import { FunRun, Juniors, Adults } from '../data/FinishTimes';
    import HeardFrom from '../data/HeardFrom';
    import { first_name, last_name, phone_number, email, nationality, gender, dob, emergency_name, emergency_number, amount } from '../stores/store';

    const set_selected_category = (e) => {
        let category = e.target.innerHTML;

        switch (category) {
            case 'Adults':
                finish_time_list = Adults
                amount.set(50)
                break;
            case 'Juniors':
                finish_time_list = Juniors
                amount.set(30)
                break;
            case 'Fun Run':
                finish_time_list = FunRun  
                amount.set(15)          
                break;
        
            default: '';
                break;
        }
    }
    const set_selected_gender = (e) => {
        gender.set(e.target.innerHTML)
        console.log($gender)
    }
    const set_selected_first_marathon_answer = () => {
        console.log('hi')
    }
    const set_selected_run_frequency = () => {
        console.log('hi')
    }
    const toggle_nationalities = () => {
        show_nationalities = !show_nationalities
    }
    const toggle_finish_times = () => {
        show_finish_times = !show_finish_times
    }
    const toggle_heard_from = () => {
        show_heard_from = !show_heard_from
    }
    const select_nationality = (e) => {
        selected_nationality = e.target.innerHTML
        toggle_nationalities();
    }
    const select_finish_time = (e) => {
        finish_time = e.target.innerHTML;
        toggle_finish_times();
    }
    const select_heard_from = (e) => {
        heard_from = e.target.innerHTML;
        toggle_heard_from();
    }
    let has_medical_condition = false
    let selected_nationality = '';
    let finish_time = '';
    let heard_from = '';
    let show_nationalities = false;
    let show_finish_times = false;
    let show_heard_from = false;
    let finish_time_list = [];
</script>

<style lang="postcss">
    .registration_form {
        @apply w-1/2 p-6 h-full overflow-y-scroll;
    }
    .logo_wrapper {
        @apply flex flex-row items-center block;
    }
    .logo_img {
        @apply h-12 mr-4;
    }
    .logo_title {
        @apply text-2xl font-extralight tracking-wide text-primary_red;
    }
    .form_header {
        @apply mt-12 text-primary_red text-5xl tracking-wide font-normal leading-tight px-6;
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
        @apply font-bold text-xl mt-1;
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
        @apply flex flex-row gap-8 h-auto;
    }
    .participant_info_field_two_col .participant_info_field {
        @apply w-1/2 h-full;
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
</style>

<div class="registration_form">
    <div class="form_heading">
        <a href="/" class="logo_wrapper">
            <img src="/images/logo.png" alt="Accra International Marathon logo" class="logo_img"/>
            <h1 class="logo_title">Accra International Marathon</h1>
        </a>
        <h1 class="form_header">Join the Journey,<br/>Register for the<br/>Accra Marathon</h1>
    </div>

    <form class="marathon_form">
        <h2 class="form_title">Race Category</h2>
        <div class="category_wrapper">
            <div class="category_type_wrapper">
                <input id="adults" type="radio" name="race_category" checked/>
                <div class="cell-bg"></div>
                <label for="adults" on:click={set_selected_category}><span>Adults</span><h3>&#8373; 50</h3></label>
            </div>
            <div class="category_type_wrapper">
                <input id="juniors" type="radio" name="race_category"/>
                <div class="cell-bg"></div>
                <label for="juniors" on:click={set_selected_category}><span>Juniors</span><h3>&#8373; 30</h3></label>
            </div>
            <div class="category_type_wrapper">
                <input id="fun_run" type="radio" name="race_category"/>
                <div class="cell-bg"></div>
                <label for="fun_run" on:click={set_selected_category}><span>Fun Run</span><h3>&#8373; 15</h3></label>
            </div>
        </div>

        <h2 class="form_title">Participant Information</h2>
        <div class="participant_info_wrapper">
            <div class="participant_info_field">
                <label for="first_name"><span class="required">*</span>First Name</label>
                <input type="text" id="first_name"/>
            </div>
            <div class="participant_info_field">
                <label for="last_name"><span class="required">*</span>Last Name</label>
                <input type="text" id="last_name"/>
            </div>
            <div class="participant_info_field">
                <label for="phone_number"><span class="required">*</span>Phone number</label>
                <input type="tel" id="phone_number"/>
            </div>
            <div class="participant_info_field">
                <label for="email"><span class="required">*</span>Email</label>
                <input type="email" id="email"/>
            </div>
            <div class="participant_info_field nationality_container">
                <label for="nationalities"><span class="required">*</span>Nationality</label>
                <div class="nationality_input_wrapper" on:click={toggle_nationalities}>
                    <img src="/images/dropdown_caret.png" alt="select your nationality" class="dropdown_caret {show_nationalities ? 'rotate-180' : ''}"/>
                    <input name="nationalities" id="nationalities" class="nationality_input" type="text" placeholder="Select your Nationality..." value={selected_nationality}/>
                </div>
                {#if show_nationalities}
                    <ul class="nationalities" transition:fade>
                        {#each Nationalities as nationality}
                            <li class="nationality" on:click={select_nationality}>{nationality}</li>
                        {/each}
                    </ul>
                {/if}
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
                            <input id="day" type="number" name="dob" placeholder="DD" min="1" max="31"/>
                        </div>
                        <div class="dob_month">
                            <label for="month">Month</label>
                            <input id="month" type="number" name="dob" placeholder="MM" min="1" max="12"/>
                        </div>
                        <div class="dob_year">
                            <label for="year">Year</label>
                            <input id="year" type="number" name="dob" placeholder="YYYY" min="1903" max="2016"/>
                        </div>
                    </div>
                </div>
            </div>
            <div class="participant_info_field">
                <label for="emergency_contact_name"><span class="required">*</span>Emergency contact name</label>
                <input type="text" id="emergency_contact_name"/>
            </div>
            <div class="participant_info_field">
                <label for="emergency_contact_number"><span class="required">*</span>Emergency contact number</label>
                <input type="tel" id="emergency_contact_number"/>
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
                        has_medical_condition = true
                    }}>Yes</label>
                </div>
                <div class="medical_boolean_wrapper">
                    <input id="medical_no" type="radio" name="medical_boolean" checked/>
                    <div class="cell-bg"></div>
                    <label for="medical_no" on:click={() => {
                        has_medical_condition = false
                    }}>No</label>
                </div>
            </div>

            {#if has_medical_condition}
                <div class="medical_condition" transition:fade>
                    <label class="input_label" for="medical_condition_info">If yes, please provide details here:</label>
                    <textarea class="medical_condition_info" id="medical_condition_info" name="medical_condition_info" rows="4"></textarea>
                </div>
            {/if}
        </div>

        <h2 class="form_title">About You</h2>
        <div class="about_you_wrapper">

            <div class="participant_info_field finish_time_container">
                <label for="finish_time_input"><span class="required">*</span>What is your expected finish time?</label>
                <div class="finish_time_input_wrapper" on:click={toggle_finish_times}>
                    <img src="/images/dropdown_caret.png" alt="select your finish_time" class="dropdown_caret {show_finish_times ? 'rotate-180' : ''}"/>
                    <input id="finish_time_input" class="finish_time_input" type="text" placeholder="Select your estimated finish time..." value={finish_time}/>
                </div>
                {#if show_finish_times}
                    <ul name="finish_times" id="finish_times" transition:fade>
                        {#each finish_time_list as finish_time}
                            <li class="finish_time" on:click={select_finish_time}>{finish_time}</li>
                        {/each}
                    </ul>
                {/if}
            </div>

            <div class="participant_info_field heard_from_container">
                <label for="heard_from_input"><span class="required">*</span>How did you hear about this event?</label>
                <div class="heard_from_input_wrapper" on:click={toggle_heard_from}>
                    <img src="/images/dropdown_caret.png" alt="select how you heard about us" class="dropdown_caret {show_heard_from ? 'rotate-180' : ''}"/>
                    <input id="heard_from_input" class="heard_from_input" type="text" placeholder="Select one" value={heard_from}/>
                </div>
                {#if show_heard_from}
                    <ul name="heard_from" id="heard_from" transition:fade>
                        {#each HeardFrom as heard_from}
                            <li class="heard_from" on:click={select_heard_from}>{heard_from}</li>
                        {/each}
                    </ul>
                {/if}
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

        <div class="submit_btn">
            <span>Register &#8373; {$amount}</span>
        </div>

    </form>

</div>