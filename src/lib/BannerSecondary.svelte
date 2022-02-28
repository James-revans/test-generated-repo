<script>
    export let img, link, text;
</script>
<div class="w-screen h-[75vh] relative">
    <img src="{img}" class="absolute w-full h-full object-cover"/>
	<div class="bg-gray-400 opacity-[.40] w-full h-[75vh] absolute"></div>
    <div class="relative top-1/2 container mx-auto">
        <h2 class="text-5xl md:text-7xl text-white mb-12">{text}</h2>
        <a class="bg-gray-300 p-5" href="{link}">Learn More</a>
    </div>
</div>