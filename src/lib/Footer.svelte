<script>
    export let hours, phone, mapImg, mapLink;
</script>

<footer class="flex flex-col sm:flex-row container items-center mx-auto my-24">
    <div class="basis-1/2 pb-12">
        <h2 class="text-5xl pb-8">Hours</h2>
        <div>
            {#each hours as hoursSection}
            <p class="pb-4 text-xl">{hoursSection}</p>
            {/each}
        </div>
        <p class="text-xl">
            {phone}
        </p>
    </div>
    <div class="basis-1/2">
        <a href="{mapLink}" target="_blank">
            <img src="{mapImg}" class="h-full w-full object-cover"/>
        </a>
    </div>
</footer>