<script context="module">
	import BannerSecondary from "$lib/BannerSecondary.svelte";
	import SideCard from "$lib/SideCard.svelte";
	import data from "../data.json";
	export const prerender = true;
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section class="relative top-0 w-screen h-screen bg-[url('/banner.jpeg')] bg-cover bg-center">
	<div class="bg-gray-500 opacity-[.10] w-full h-full absolute"></div>
	<div class="relative top-1/4 mx-auto text-center">
		<h1 class="text-8xl mb-8 text-white">{data.banner.text}</h1>
		<button class="bg-gray-50 p-5">{data.banner.buttonText}</button>
	</div>
</section>

<section>
	{#each data.sideCard as {img, text, title}, i}
		<SideCard img={img} text={text} title={title} i={i}/>
	{/each}
</section>

<section>
	<BannerSecondary img={data.bannerSecondary.img} link={data.bannerSecondary.link} text={data.bannerSecondary.text}/>
</section>


