<script setup lang="ts">
import { ref } from 'vue'
import MeSideBar from './components/MeSideBar.vue'

const darkMode = ref<boolean>(false)

const updateTheme = (themeDark: boolean):void => {
	darkMode.value = themeDark
}
</script>

<template>
	<main class="columns is-gapless is-multiline" :class="{'modo-escuro': darkMode}">
		<div class="column is-one-quarter">
			<MeSideBar @updatedTheme="updateTheme" />
		</div>
		<div class="column is-three-quarter conteudo">
			<router-view />
		</div>
	</main>
</template>

<style>
.list {
	padding: 1.25rem;
}
main {
	--bg-primario: #fff;
	--texto-pripario: #000;
}
main.modo-escuro {
	--bg-primario: #2b2d42;
	--texto-pripario: #ddd;
}
.conteudo {
	background-color: var(--bg-primario);
}
</style>
