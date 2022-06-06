<script setup lang="ts">
import { ref, defineEmits, computed } from 'vue'
import MeTimer from './MeTimer.vue'
import ITask from '../interfaces/ITask'
import IProject from '../interfaces/IProject'
import { useStore } from 'vuex';
import { key } from '../store';

const store = useStore(key)

const description = ref('')
const projectId = ref('')

const emit = defineEmits<{
	(e:'save', task: ITask): void
}>()

const projects = computed(() => store.state.projects)

const taskEnd = (timeSeconds: number): void => {
	emit('save', {
		description: description.value,
		timeSeconds: timeSeconds,
		project: projects.value.find(proj => proj.id === projectId.value) as IProject
	})
	description.value = ''
}
</script>

<template>
	<div class="box formulario">
		<div class="columns">
			<div class="column is-5" role="form" aria-label="Formulário para criação de uma nova tarefa">
				<input type="text" v-model="description" class="input" placeholder="Qual tarefa você deseja iniciar?">
			</div>
			<div class="column is-3">
				<div class="select">
          <select v-model="projectId">
            <option value="">Selecione o projeto</option>
            <option
              :value="project.id"
              v-for="project in projects"
              :key="project.id"
            >
              {{ project.name }}
            </option>
          </select>
				</div>
			</div>
			<div class="column">
				<MeTimer @timer-end="taskEnd" />
			</div>
		</div>
	</div>
</template>

<style>
.formulario {
	color: var(--texto-pripario);
	background-color: var(--bg-primario);

}
</style>
