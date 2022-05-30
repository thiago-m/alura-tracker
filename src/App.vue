<script setup lang="ts">
import { ref } from 'vue'
import MeSideBar from './components/MeSideBar.vue'
import MeForm from './components/MeForm.vue'
import MeTask from './components/MeTask.vue'
import ITask from './interfaces/ITask'

const tasks = ref<ITask[]>([])

const saveTask = (task: ITask): void => {
	tasks.value.push(task)
}
</script>

<template>
	<main class="columns is-gapless is-multiline">
		<div class="column is-one-quarter">
			<MeSideBar />
		</div>
		<div class="column is-three-quarter">
			<MeForm @save="saveTask" />
			<div class="list">
				<div class="box has-text-weight-bold" v-if="!tasks.length">
					<div class="columns">
						<div class="column is-7">
							Nenhuma tarefa ainda
						</div>
					</div>
				</div>
				<MeTask v-else v-for="(task, index) in tasks" :key="`${index}`" :task="task" />
			</div>
		</div>
	</main>
</template>

<style>
.list {
	padding: 1.25rem;
}
</style>
