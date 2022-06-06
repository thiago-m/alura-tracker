<script setup lang="ts">
import { ref } from 'vue'
import IProject from '../interfaces/IProject'

const projectName = ref<string>('')
const projects = ref<IProject[]>([])

const salve = (): void => {
	const project: IProject = {
		name: projectName.value,
		id: new Date().toISOString()
	}
	projects.value.push(project)
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
