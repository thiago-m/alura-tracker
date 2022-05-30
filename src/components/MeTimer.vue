<script setup lang="ts">
import { ref, defineEmits } from 'vue'
import MeStopWatch from './MeStopWatch.vue'
import MeButton from './MeButton.vue'

const timeSeconds = ref(0)
const timeID = ref(0)

const emit = defineEmits<{
	(e: 'timerEnd', timeSeconds: number): void
}>()

const iniciar = () => {
	timeID.value = setInterval((): void => { timeSeconds.value++ }, 1000)
}

const finalizar = () => {
	clearInterval(timeID.value)
	emit('timerEnd', timeSeconds.value)
	timeID.value = 0
	timeSeconds.value = 0
}

</script>

<template>
	<div class="is-flex is-align-items-center is-justify-content-space-between">
		<MeStopWatch :timeSeconds="timeSeconds" />
		<MeButton icon="fas fa-play" text="play" @click="iniciar" :disabled="!!timeID" />
		<MeButton icon="fas fa-stop" text="stop" @click="finalizar" :disabled="!timeID" />
	</div>
</template>
