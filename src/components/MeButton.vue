<script setup lang="ts">
import { defineEmits, defineProps } from 'vue'

defineProps({
	icon: {
		type: String,
		required: true
	},
	text: {
		type: String,
		required: true
	},
	disabled: Boolean
})

const emit = defineEmits<{
	(e: 'click'): void
}>()

const clicker = (): void => {
	emit('click')
}

</script>

<template>
	<button class="button" @click="clicker" :disabled="disabled">
		<span class="icon">
			<i :class="icon"></i>
		</span>
		<span class="ml-2">{{text}}</span>
	</button>
</template>
