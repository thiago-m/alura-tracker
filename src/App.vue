<script setup lang="ts">
	import MeSideBar from './components/MeSideBar.vue'
	import MeForm from './components/MeForm.vue'
</script>

<template>
	<main class="columns is-gapless is-multiline">
		<div class="column is-one-quarter">
			<MeSideBar />
		</div>
		<div class="column is-three-quarter">
			<MeForm />
		</div>
	</main>
</template>

<style>
</style>
