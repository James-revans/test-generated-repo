<script>
    export let img, title, text, i;
</script>

<div class="flex flex-col sm:flex-row items-center container mx-auto mt-8 mb-24 sm:mt-20 sm:mb-20" class:sm:flex-row-reverse={i%2 > 0}>
    <div class="basis-1/4 grow h-[200px] md:h-[550px]">
        <img src="{img}" class="h-full w-full object-cover"/>
    </div>
    <div class="basis-24 grow-0 h-full min-h-[20px]"></div>
    <div class="basis-1/4 grow">
        <h2 class="text-5xl md:text-7xl">{title}</h2>
        <p class="my-5">{text}</p>
        <button class="bg-gray-500 text-white p-5">Learn More</button>
    </div>
</div>
