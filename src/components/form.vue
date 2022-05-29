<script setup lang="ts">
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
						<strong>00:00:00</strong>
					</section>
					<button class="button mr-2">
						<span class="icon ml-0">
							<i class="fas fa-play"></i>
						</span>
						<span class="ml-2">play</span>
					</button>
					<button class="button">
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
