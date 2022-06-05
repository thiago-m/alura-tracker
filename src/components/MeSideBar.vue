<script setup lang="ts">
import {ref, computed} from 'vue'

const themeDark = ref(false)

const $emit = defineEmits<{
	(e:'updatedTheme', themeDark: boolean): void
}>()

const textTheme = computed(() => {
	return themeDark.value
		? 'Desativar modo escuro'
		: 'Ativar modo escuro'
})

const updateTheme = () => $emit('updatedTheme', themeDark.value = !themeDark.value)

</script>

<template>
	<header>
		<h1>
			<img src="../assets/logo.png" alt="Alura Tracker">
		</h1>
		<button class="button" @click="updateTheme">
			{{textTheme}}
		</button>
	</header>
</template>

<style>
header {
	width: 100%;
	height: 100vh;
	background: #0d3b66;
	padding: 1rem;
	text-align: center;
}
@media only screen and (max-width: 768px) {
	header {
		padding: 2.5rem;
		height: auto;
	}
}
</style>
