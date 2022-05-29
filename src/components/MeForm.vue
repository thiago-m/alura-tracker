<script setup lang="ts">
	import { ref, computed } from 'vue'

	const timeSecond = ref(0)
	const timeID = ref(0)

	const iniciar = () => {
		if(timeID.value === 0) {
			timeID.value = setInterval((): void => {timeSecond.value++}, 1000)
		}
	}

	const finalizar = () => {
		clearInterval(timeID.value)
		timeID.value = 0
	}

	const formatTime = computed(
		(): string => new Date(timeSecond.value * 1000).toISOString().substr(11,8)
	)
</script>

<template>
	<div class="box">
		<div class="columns">
			<div class="column is-8" role="form" aria-label="Formulário para criação de uma nova tarefa">
				<input type="text" class="input" placeholder="Qual tarefa você deseja iniciar?">
			</div>
			<div class="column">
				<div class="is-flex is-align-items-center is-justify-content-space-between">
					<section class="mr-2">
						<strong>{{formatTime}}</strong>
					</section>
					<button class="button mr-2" @click="iniciar">
						<span class="icon ml-0">
							<i class="fas fa-play"></i>
						</span>
						<span class="ml-2">play</span>
					</button>
					<button class="button" @click="finalizar">
						<span class="icon ml-0">
							<i class="fas fa-stop"></i>
						</span>
						<span class="ml-2">stop</span>
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<style>
</style>
