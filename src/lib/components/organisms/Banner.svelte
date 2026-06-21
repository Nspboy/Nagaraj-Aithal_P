<script>
	// @ts-ignore
	import Button from '$lib/components/atoms/Button.svelte';
	import { fade, fly } from 'svelte/transition';
	import { onMount } from 'svelte';

  import { t } from "$lib/locales/i18n";
  import avatar from '../../../routes/about/Nagaraj_aithal.jpeg';

	let banner = false;
	onMount(() => {
		banner = true;
	});
</script>

{#if banner}
	<div
		transition:fade|local={{ delay: 500, duration: 800 }}
		class="lg:px-32 px-5 flex flex-col items-center lg:items-end justify-center w-full"
	>
		<div class="w-40 h-40 rounded-full overflow-hidden border-4 border-accent mb-8 shadow-lg" in:fly|local={{ y: -50, duration: 1000, delay: 200 }}>
			<img src={avatar} alt="Profile" class="w-full h-full object-cover" />
		</div>
		<small class="text-accent font-secondary text-lg mb-7">Hi, my name is</small>
		<h1 class="lg:text-7xl text-3xl text-neutral mt-5 mb-10 font-primary font-bold">{$t('banner.name')}</h1>
		<h2 class="lg:text-7xl text-3xl text-base-100 line-1">And I am a {$t('banner.proffession')}</h2>

		<div class="my-12" in:fly|local={{ x: 1000, duration: 1500 }}>
			<Button href='/projects'>Check out my projects</Button>
		</div>
	</div>
{/if}
