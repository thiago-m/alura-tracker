<script setup lang="ts">
	import SideBar from './components/sideBar.vue'
	import Form from './components/form.vue'
</script>

<template>
	<main class="columns is-gapless is-multiline">
		<div class="column is-one-quarter">
			<sideBar />
		</div>
		<div class="column is-three-quarter">
			<Form />
		</div>
	</main>
</template>

<style>
</style>
