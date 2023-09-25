<svelte:head>
	<script src="https://js.paystack.co/v1/inline.js"></script>
</svelte:head>
<script>
  import Nationalities from "../data/Nationalities";
  import { fade, slide } from 'svelte/transition';
  import HeardFrom from "../data/HeardFrom";
  import { browser } from "$app/environment";

  $: race_category = (browser && sessionStorage.getItem("race_category") ? sessionStorage.getItem("race_category") : '');
  $: first_name = (browser && sessionStorage.getItem("first_name") ? sessionStorage.getItem("first_name") : '');
  $: last_name = (browser && sessionStorage.getItem("last_name") ? sessionStorage.getItem("last_name") : '');
  $: phone_number = (browser && sessionStorage.getItem("phone_number") ? sessionStorage.getItem("phone_number") : '');
  $: email = (browser && sessionStorage.getItem("email") ? sessionStorage.getItem("email") : '');
  $: nationality = (browser && sessionStorage.getItem("nationality") ? sessionStorage.getItem("nationality") : 'Select your nationality...');
  $: gender = (browser && sessionStorage.getItem("gender") ? sessionStorage.getItem("gender") : 'Male');
  $: dob_day = (browser && sessionStorage.getItem("dob_day") ? sessionStorage.getItem("dob_day") : '');
  $: dob_month = (browser && sessionStorage.getItem("dob_month") ? sessionStorage.getItem("dob_month") : '');
  $: dob_year = (browser && sessionStorage.getItem("dob_year") ? sessionStorage.getItem("dob_year") : '');

  $: dob = (browser && sessionStorage.getItem("dob") ? sessionStorage.getItem("dob") : sessionStorage.setItem("dob", dob_year + '-' + dob_month + '-' + dob_day ));

  $: emergency_name = (browser && sessionStorage.getItem("emergency_name") ? sessionStorage.getItem("emergency_name") : '');
  $: emergency_number = (browser && sessionStorage.getItem("emergency_number") ? sessionStorage.getItem("emergency_number") : '');
  $: has_medical_condition = (browser && sessionStorage.getItem("has_medical_condition") ? sessionStorage.getItem("has_medical_condition") : false);
  $: medical_information = (browser && sessionStorage.getItem("medical_information") ? sessionStorage.getItem("medical_information") : '');
  $: heard_from = (browser && sessionStorage.getItem("heard_from") ? sessionStorage.getItem("heard_from") : 'Where did you hear about us...');
  let amount = 50.00;


  $: has_first_name = (first_name.length < 3) ? false : true;
  let has_first_name_error = false;
  $: has_last_name = (last_name.length < 3) ? false : true;
  let has_last_name_error = false;
  $: has_phone_number = (phone_number.length < 10) ? false : true;
  let has_phone_number_error = false;
  $: has_email = (!emailPattern.test(email)) ? false : true;
  let has_email_error = false;
  $: has_day = (!dob_day || dob_day < 1 || dob_day > 31) ? false : true;
  $: has_month = (!dob_month || dob_month < 1 || dob_month > 12) ? false : true;
  $: has_year = (!dob_year || dob_year < 1903 || dob_year > 2016) ? false : true;
  $: has_emergency_name = (emergency_name.length < 3) ? false : true;
  let has_emergency_name_error = false;
  $: has_emergency_number = (emergency_number < 10) ? false : true;
  let has_emergency_number_error = false;
  $: has_nationality = (nationality == 'Select your nationality...') ? false : true;
  $: has_heard_from = (heard_from == 'Where did you hear about us...') ? false : true;

  
  let day, month, year, category;
  let show_nationalities = false;
  let show_heard_from = false;
  let show_first_page = true;
  let show_second_page = false;
  let first_name_element, last_name_element, phone_number_element, email_element, nationality_input_element, dob_day_element, dob_month_element, dob_year_element, emergency_name_element, emergency_number_element, heard_from_element;

  let emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


  const set_selected_category = (e) => {
      category = e.target.htmlFor;
      switch (category) {
          case 'marathon':
              sessionStorage.setItem('race_category', '1')
              race_category = '1';
              amount = 50.00;
              break;
          case 'corporate':
              sessionStorage.setItem('race_category', '3')
              race_category = '3';
              amount = 150.00;
              break;
          case 'juniors':
              sessionStorage.setItem('race_category', '4')
              race_category = '4';
              amount = 20.00;
              break;
      
          default: '';
              break;
      }
  }
  // Participant information functions
  const set_first_name = (e) => {
    sessionStorage.setItem("first_name", e.target.value )
      if(e.target.value.length < 3) {
          has_first_name_error = true;
          has_first_name = false;
      } else {
          has_first_name_error = false;
          has_first_name = true;
      }
  }
  const set_last_name = (e) => {
    sessionStorage.setItem("last_name", e.target.value )
      if(e.target.value.length < 3) {
          has_last_name_error = true;
          has_last_name = false;
      } else {
          has_last_name_error = false;
          has_last_name = true;
      }
  }
  const set_phone_number = (e) => {
    sessionStorage.setItem("phone_number", e.target.value )
      if(e.target.value.length < 10) {
          has_phone_number_error = true;
          has_phone_number = false;
      } else { 
          has_phone_number_error = false;
          has_phone_number = true;
      }
  }
  const set_email = (e) => {
      sessionStorage.setItem("email", e.target.value )
      if(emailPattern.test(e.target.value) == false) {
          has_email_error = true;
          has_email = false;
      } else {
          has_email_error = false;
          has_email = true;
      }
  }
  const set_selected_gender = (e) => {
    sessionStorage.setItem("gender", e.target.innerHTML )
  }
  const select_nationality = (e) => {
    sessionStorage.setItem("nationality", e.target.innerHTML )
    nationality = e.target.innerHTML
    console.log(has_first_name, has_last_name, has_phone_number, has_email, has_day, has_month, has_year, has_nationality)
      toggle_nationalities();
  }
  const set_day = (e) => {
    sessionStorage.setItem("dob_day", e.target.value )
      if(!e.target.value || e.target.value < 1 || e.target.value > 31) {
          has_day = false;
      } else {
          has_day = true;
      }
  }
  const set_month = (e) => {
    sessionStorage.setItem("dob_month", e.target.value )
      if(!e.target.value || e.target.value < 1 || e.target.value > 12) {
          has_month = false;
      } else {
          has_month = true;
      }
  }
  const set_year = (e) => {
    sessionStorage.setItem("dob_year", e.target.value )
      if(!e.target.value || e.target.value < 1903 || e.target.value > 2016) {
          has_year = false;
      } else {
          has_year = true;
      }
  }


  const set_emergency_name = (e) => {
    sessionStorage.setItem("emergency_name", e.target.value)
      if(e.target.value.length < 3){
          has_emergency_name_error = true;
          has_emergency_name = false;
      } else {
          has_emergency_name_error = false;
          has_emergency_name = true;
      }
  }
  const set_emergency_number = (e) => {
    sessionStorage.setItem("emergency_number", e.target.value)
      if(e.target.value.length < 10) {
          has_emergency_number_error = true;
          has_emergency_number = false;
      } else {
          has_emergency_number_error = false;
          has_emergency_number = true;
      }
  }

  // Medical information functions
  const set_medical_information = (e) => {
    sessionStorage.setItem("medical_information", e.target.value)
  }

  // About you
  
  const select_heard_from = (e) => {
      sessionStorage.setItem("heard_from", e.target.innerHTML);
      heard_from = e.target.innerHTML
      show_heard_from = false;
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

  //Select field toggle functions
  const toggle_nationalities = () => {
      show_nationalities = !show_nationalities
  }
  const toggle_heard_from = () => {
      show_heard_from = !show_heard_from
  }

  const go_to_second_page = () => {
      show_first_page = false;
      show_second_page = true;
      console.log(has_medical_condition)
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
      
      const post_url = 'https://www.accramarathon.com/manager/endpoints/atheletes/addAthelete.php'

      var addBody = new FormData()
          addBody.append("firstname", first_name)
          addBody.append("lastname", last_name)
          addBody.append("gender", gender)
          addBody.append("phone", phone_number)
          addBody.append("email", email)
          addBody.append("nationality", nationality)
          addBody.append("date_of_birth", dob)
          addBody.append("emergency_contact_name", emergency_name)
          addBody.append("emergency_contact_number", emergency_number)
          addBody.append("race_category_id", race_category)
          addBody.append("any_medical_condition", has_medical_condition)
          addBody.append("medical_info", medical_information)
          addBody.append("heard_about_race", heard_from)

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
          key: 'pk_live_f3b23d0e4c62cbbc167417eb39caae2d55a3a944',
          email: email,
          amount: amount * 100,
          currency: 'GHS',
          callback: send_registered_user_data_to_server,
          metadata:{
              custom_fields:[
                  {
                  "display_name":"Racer's name",
                  "variable_name":"Participant's name",
                  "value": first_name + ' ' + last_name
                  },
                  {
                  "display_name":"Phone number",
                  "variable_name":"Phone number",
                  "value": phone_number
                  },
                  {
                  "display_name":"Email",
                  "variable_name":"Email",
                  "value": email
                  },
                  {
                  "display_name":"Nationality",
                  "variable_name":"Nationality",
                  "value": nationality
                  },
                  {
                  "display_name":"Date of birth",
                  "variable_name":"Date of birth",
                  "value": dob
                  },
                  {
                  "display_name":"Race category",
                  "variable_name":"Race category",
                  "value": race_category
                  },
                  {
                  "display_name":"Gender",
                  "variable_name":"Gender",
                  "value": gender
                  },
                  {
                  "display_name":"Emergency contact name",
                  "variable_name":"Emergency contact name",
                  "value": emergency_name
                  },
                  {
                  "display_name":"Emergency contact number",
                  "variable_name":"Emergency contact number",
                  "value": emergency_number
                  },
                  {
                  "display_name":"Medical conditions",
                  "variable_name":"Medical conditions",
                  "value": medical_information
                  }
              ]
          }
      });

      handler.openIframe();
  }
</script>


<style lang="postcss">
  form {
      @apply flex flex-col w-full max-w-[610px] relative h-auto mx-auto pt-10;
  }
  form .first_page {
      @apply flex flex-col w-full relative px-1;
  }
  form .second_page {
      @apply flex flex-col w-full relative px-1;
  }
  .form_item {
      @apply w-full mb-5 relative;
  }
  .error_hint, .valid_hint {
    @apply absolute right-4 top-1/2 -translate-y-1/2;
  }
  .form_item input, .form_item .nationality, .form_item .nationality_input, .form_item .finish_time_input, .form_item .finish_time, .form_item .heard_from_input, .form_item .heard_from {
      @apply w-full h-[50px] px-[20px] rounded-full bg-white;
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
      @apply flex flex-row w-full rounded-full gap-8;
  }
  .gender_type_wrapper, .category_type_wrapper, .medical_boolean_wrapper {
      @apply relative flex flex-[1] justify-center items-center cursor-pointer z-10 rounded-full;
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
  .category_type_wrapper label span{
      @apply pointer-events-none;
  }
  .category_type_wrapper label h3{
      @apply pointer-events-none;
  }
  .gender_type_wrapper .cell-bg, .category_type_wrapper .cell-bg, .medical_boolean_wrapper .cell-bg {
      @apply h-full w-full absolute -z-10 bg-white rounded-full;
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
      form {
        @apply px-4;
      }
      .gender_wrapper, .category_wrapper, .medical_boolean_container {
          @apply gap-3;
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


<form>
  {#if show_first_page}
      <div class="first_page">
          <div class="form_item">
              <input type="text" class="" value={first_name} placeholder="First name" on:blur={set_first_name}/>
              {#if has_first_name}
                <img src="/images/check.png" transition:fade class="valid_hint" alt="valid input"/>
              {/if}
              {#if has_first_name_error}
                <img src="/images/close.png" transition:fade class="error_hint" alt="invalid input"/>
              {/if}
          </div>
          <div class="form_item">
              <input type="text" placeholder="Last name" value={last_name} on:blur={set_last_name}/>
              {#if has_last_name}
                <img src="/images/check.png" transition:fade class="valid_hint" alt="valid input"/>
              {/if}
              {#if has_last_name_error}
                <img src="/images/close.png" transition:fade class="error_hint" alt="invalid input"/>
              {/if}
          </div>
          <div class="form_item">
              <input type="tel" placeholder="Phone number" value={phone_number} on:blur={set_phone_number}/>
              {#if has_phone_number}
                <img src="/images/check.png" transition:fade class="valid_hint" alt="valid input"/>
              {/if}
              {#if has_phone_number_error}
                <img src="/images/close.png" transition:fade class="error_hint" alt="invalid input"/>
              {/if}
          </div>
          <div class="form_item">
              <input type="email" placeholder="Email" value={email} on:blur={set_email}/>
              {#if has_email}
                <img src="/images/check.png" transition:fade class="valid_hint" alt="valid input"/>
              {/if}
              {#if has_email_error}
                <img src="/images/close.png" transition:fade class="error_hint" alt="invalid input"/>
              {/if}
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
                      <input id="day" type="number" name="dob" placeholder="DD" min="1" max="31" on:change={set_day} value={dob_day}/>
                  </div>
                  <div class="dob_month">
                      <input id="month" type="number" name="dob" placeholder="MM" min="1" max="12" on:change={set_month} value={dob_month}/>
                  </div>
                  <div class="dob_year">
                      <input id="year" type="number" name="dob" placeholder="YYYY" min="1903" max="2016" on:change={set_year} value={dob_year}/>
                  </div>
              </div>
          </div>
          <div class="form_item nationality_input_wrapper">
              <span class="nationality_input" on:click={toggle_nationalities} >{nationality}</span>
              
              {#if show_nationalities}
                  <ul class="nationalities" transition:slide>
                      {#each Nationalities as nationality}
                          <li class="nationality" on:click={select_nationality}>{nationality}</li>
                      {/each}
                  </ul>
              {/if}
          </div>
          
          <div class="second_page_btn_wrapper">
            {#if has_first_name && has_last_name && has_phone_number && has_email && has_day && has_month && has_year && has_nationality}
                  <div class="second_page_btn" transition:fade on:click={go_to_second_page}>
                      <span>Next</span>
                  </div>
            {/if}
          </div>
      </div>
  {/if}
  {#if show_second_page}
    <div class="second_page">
        <div class="form_item">
            <div class="category_wrapper">
                <div class="category_type_wrapper">
                    <input id="marathon" type="radio" name="race_category" checked/>
                    <div class="cell-bg"></div>
                    <label for="marathon" on:click={set_selected_category}><span>Marathon</span><h3>₵ 50</h3></label>
                </div>
                <div class="category_type_wrapper">
                    <input id="corporate" type="radio" name="race_category"/>
                    <div class="cell-bg"></div>
                    <label for="corporate" on:click={set_selected_category}><span>Corporate</span><h3>₵ 150</h3></label>
                </div>
                <!-- <div class="category_type_wrapper">
                    <input id="civil_service" type="radio" name="race_category"/>
                    <div class="cell-bg"></div>
                    <label for="civil_service" on:click={set_selected_category}><span>Civil Service</span><h3>₵ 20</h3></label>
                </div> -->
                <div class="category_type_wrapper">
                    <input id="juniors" type="radio" name="race_category"/>
                    <div class="cell-bg"></div>
                    <label for="juniors" on:click={set_selected_category}><span>Juniors</span><h3>₵ 20</h3></label>
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
                        <textarea class="medical_condition_info" id="medical_condition_info" name="medical_condition_info" rows="4" on:change={set_medical_information} placeholder="If yes, please provide details here"></textarea>
                    </div>
                {/if}
            </div>
        </div>
        <div class="form_item">
            <input type="text" placeholder="Emergency contact name" on:blur={set_emergency_name} value={emergency_name}/>
            {#if has_emergency_name}
              <img src="/images/check.png" transition:fade class="valid_hint" alt="valid input"/>
            {/if}
            {#if has_emergency_name_error}
              <img src="/images/close.png" transition:fade class="error_hint" alt="invalid input"/>
            {/if}
        </div>
        <div class="form_item">
            <input type="tel" placeholder="Emergency contact number" on:blur={set_emergency_number} value={emergency_number}/>
            {#if has_emergency_number}
              <img src="/images/check.png" transition:fade class="valid_hint" alt="valid input"/>
            {/if}
            {#if has_emergency_number_error}
              <img src="/images/close.png" transition:fade class="error_hint" alt="invalid input"/>
            {/if}
        </div>
        <div class="form_item heard_from_input_wrapper">
            <span class="heard_from_input" on:click={toggle_heard_from} >{heard_from}</span>
            
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
                <div type="submit" class="submit_btn" transition:fade on:click={pay_with_paystack}>
                    <span>Register &#8373; {amount}</span>
                </div>
            {/if}
        </div>
    </div>
{/if}
</form>