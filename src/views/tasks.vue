<script setup lang="ts">
import { ref } from 'vue'
import MeForm from '../components/MeForm.vue'
import MeTask from '../components/MeTask.vue'
import ITask from '../interfaces/ITask'

const tasks = ref<ITask[]>([])

const saveTask = (task: ITask): void => {
	tasks.value.push(task)
}

</script>

<template>
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
</template>
