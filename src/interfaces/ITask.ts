import IProject from "./IProject"

export default interface ITask {
	timeSeconds: number,
	description: String,
	project: IProject
}
