<script>
	import { page } from '$app/stores';
	import { navHam, navExit } from "../icons";
	export let links;

	let innerWidth;
	let isOpen = innerWidth > 500 ? true : false;

</script>

<header class="fixed top-0 w-full p-5 z-50 bg-white/0 bg-white/100">
	<nav class="flex flex-col w-full">
		<div class="sm:hidden text-right">
			<button class:hidden="{isOpen}" on:click="{() => {isOpen = true}}">
				{@html navHam}
			</button>
			<button class:hidden="{!isOpen}" on:click="{() => {isOpen = false}}">
				{@html navExit}
			</button>
		</div>
		<div class="flex flex-col sm:flex-row sm:flex h-screen sm:!h-full ease-in duration-300" class:h-0="{!isOpen}">
			{#each links as {text, link}}
			<div class="mr-4 cursor-pointer mb-12 sm:mb-0 sm:!opacity-100 ease-in duration-300" class:active={$page.url.pathname === link} class:opacity-0="{!isOpen}" >
				<a sveltekit:prefetch href="{link}">{text}</a>
			</div>
			{/each}
		</div>
	</nav>
</header>

<svelte:window bind:innerWidth />
