<script setup lang="ts">
import { ref, computed } from 'vue'
import IProject from '../interfaces/IProject'
import { useStore } from '../store'

const store = useStore()

const projectName = ref<string>('')

const projects = computed(() => store.state.projects)

const salve = (): void => {
	store.commit('addProject', projectName.value)
	projectName.value = ''
}
</script>

<template>
	<section class="projects">
		<form @submit.prevent="salve">
			<h1>Projects</h1>
			<div class="field">
				<label for="projectName" class="label">Nome do Projeto</label>
				<input type="text" class="input" v-model="projectName" id="projectName">
			</div>
			<div class="field">
				<button class="button" type="submit">Salvar</button>
			</div>
		</form>
		<table v-if="projects.length" class="table is-fullwidth">
			<thead>
				<tr>
					<th>ID</th>
					<th>Nome</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="project in projects" :key="project.id">
					<td>{{project.id}}</td>
					<td>{{project.name}}</td>
				</tr>
			</tbody>
		</table>
	</section>
</template>

<style scoped>
.projects {
	padding: 1.25rem;
}
</style>
