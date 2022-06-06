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
		<nav class="panel mt-5">
			<ul>
				<li>
					<router-link to="/" class="link">
						<i class="fas fa-tasks"></i>
						Tarefas
					</router-link>
				</li>
				<li>
					<router-link to="/projects" class="link">
						<i class="fas fa-tasks"></i>
						Projetos
					</router-link>
				</li>
			</ul>
		</nav>
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
.panel li {
	margin: 8px 0;
}
.link {
	color: #fff;
}
.link:hover {
	color: #faf0ca;
	text-decoration: none;
}
.link.router-link-active {
	color: #faf0ca;
}
</style>
