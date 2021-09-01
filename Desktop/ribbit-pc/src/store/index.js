import { createStore } from 'vuex'
const moduleA = {
	state: {
		username: 'moduleA'
	}
}
const moduleB = {
	state: {
		username: 'moduleB'
	}
}
export default createStore({
	modules: {
		moduleA, moduleB
	}

})
