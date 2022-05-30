<script setup lang="ts">
import { ref, defineEmits } from 'vue'
import MeTimer from './MeTimer.vue'
import ITask from '../interfaces/ITask'

const description = ref('')

const emit = defineEmits<{
	(e:'save', task: ITask): void
}>()

const taskEnd = (timeSeconds: number): void => {
	emit('save', {description: description.value, timeSeconds: timeSeconds})
	description.value = ''
}
</script>

<template>
	<div class="box">
		<div class="columns">
			<div class="column is-8" role="form" aria-label="Formulário para criação de uma nova tarefa">
				<input type="text" v-model="description" class="input" placeholder="Qual tarefa você deseja iniciar?">
			</div>
			<div class="column">
				<MeTimer @timer-end="taskEnd" />
			</div>
		</div>
	</div>
</template>

<style>
</style>
