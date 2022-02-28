<script>
	import Header from '$lib/Header.svelte';
	import Footer from "$lib/Footer.svelte";
	import data from "../data.json";
	import '../app.css';
</script>

<Header links={data.header.links}/>
<main>
	<slot />
</main>
<Footer hours={data.footer.hours} phone={data.footer.phone} mapImg={data.footer.mapImg} mapLink={data.footer.mapLink}/>

