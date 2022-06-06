import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"
import tasks from '../views/tasks.vue'

const routes: RouteRecordRaw[] = [{
	path: '/',
	name: 'tasks',
	component: tasks
}]

const router = createRouter({
	history: createWebHashHistory(),
	routes,
})

export default router
