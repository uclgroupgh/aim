<style>
    .four_col_full_width {
        @apply grid grid-cols-4;
    }
    .col {
        @apply flex flex-col items-center gap-8 py-12;
    }
    .col:nth-of-type(1) {
        @apply bg-primary_red;
    }
    .col:nth-of-type(2)  {
        @apply bg-primary_blue;
    }
    .col:nth-of-type(3)  {
        @apply bg-primary_yellow;
    }
    .col:nth-of-type(4)  {
        @apply bg-primary_green;
    }
    .top_link {
        @apply flex flex-col items-center;
    }
    .top_link h4 {
        @apply text-2xl tracking-wide text-white font-semibold border-b-2 mb-1.5;
    }
    .top_link span {
        @apply text-white text-sm;
    }
    .bottom_link {
        @apply block w-fit h-fit rounded-full p-2.5 cursor-pointer duration-[250ms] ease-in-out mx-auto bg-white;
        box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12), 0 3px 1px -2px rgba(0,0,0,.2);
    }
    .bottom_link:hover {
        box-shadow: 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12), 0 2px 4px -1px rgba(0,0,0,.3);
    }
    .right_blue_arrow {
        @apply h-8 w-8;
    }
</style>

<div class="four_col_full_width">
    <div class="col">
        <a href="/Accra Marathon Beginner's Training Plan.pdf" class="top_link" target="_self">
            <h4>BEGINNER'S</h4>
            <span>TRAINING PLAN</span>
        </a>
        <a href="/Accra Marathon Beginner's Training Plan.pdf" class="bottom_link" target="_self">
            <img class="right_blue_arrow" src="/images/right_blue_arrow.png" alt="blue arrow"/>
        </a>
    </div>
    <div class="col">
        <a href="/Accra Marathon Improver's Training Plan.pdf" class="top_link" target="_self">
            <h4>IMPROVER'S</h4>
            <span>TRAINING PLAN</span>
        </a>
        <a href="/Accra Marathon Improver's Training Plan.pdf" class="bottom_link" target="_self">
            <img class="right_blue_arrow" src="/images/right_blue_arrow.png" alt="blue arrow"/>
        </a>
    </div>
    <div class="col">
        <a href="/Accra Marathon Advanced Training Plan.pdf" class="top_link" target="_self">
            <h4>ADVANCED</h4>
            <span>TRAINING PLAN</span>
        </a>
        <a href="/Accra Marathon Advanced Training Plan.pdf" class="bottom_link" target="_self">
            <img class="right_blue_arrow" src="/images/right_blue_arrow.png" alt="blue arrow"/>
        </a>
    </div>
    <div class="col">
        <a href="/Accra Marathon Beginner's Training Plan.pdf" class="top_link" target="_self">
            <h4>5 K</h4>
            <span>TRAINING PLAN</span>
        </a>
        <a href="/Accra Marathon Beginner's Training Plan.pdf" class="bottom_link" target="_self">
            <img class="right_blue_arrow" src="/images/right_blue_arrow.png" alt="blue arrow"/>
        </a>
    </div>
</div>