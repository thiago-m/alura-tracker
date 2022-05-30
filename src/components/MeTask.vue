<script setup lang="ts">
import { defineProps, PropType } from 'vue'
import MeStopWatch from './MeStopWatch.vue'
import ITask from '../interfaces/ITask'

defineProps({
	task: {
		type: Object as PropType<ITask>,
		required: true
	}
})
</script>

<template>
	<div class="box has-text-weigth-bold">
		<div class="columns">
			<div class="column is-7">
				{{task.description || 'tarefa sem descrição'}}
			</div>
			<div class="column is-2">
				<MeStopWatch :timeSeconds="task.timeSeconds" />
			</div>
		</div>
	</div>
</template>

<style scoped>
.box {
	background-color: #FAF0CA;
}
</style>
