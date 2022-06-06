import { InjectionKey } from "vue";
import { createStore, Store, useStore as useStoreVuex } from "vuex";
import IProject from "../interfaces/IProject";

interface State {
	projects: IProject[]
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
	state: {
		projects: []
	},
	mutations: {
		addProject(state, name) {
			state.projects.push({id: Date.now().toString(), name} as IProject)
		}
	}
})

export function useStore(): Store<State> {
	return useStoreVuex(key)
}
