import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"
import tasks from '../views/tasks.vue'

const routes: RouteRecordRaw[] = [
	{
	path: '/',
	name: 'tasks',
	component: tasks
	}, {
		path: '/projects',
		name: 'projects',
		component: () => import('../views/projects.vue')
	}
]

const router = createRouter({
	history: createWebHashHistory(),
	routes,
})

export default router
