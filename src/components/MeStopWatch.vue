<script setup lang="ts">
	import { computed, defineProps } from 'vue'

	const props = defineProps({
		timeSeconds: {
			type: Number,
			default: 0
		}
	})

	const formatTime = computed(
		(): string => new Date(props.timeSeconds * 1000).toISOString().substr(11,8)
	)
</script>

<template>
	<section class="mr-2">
		<strong>{{formatTime}}</strong>
	</section>
</template>
