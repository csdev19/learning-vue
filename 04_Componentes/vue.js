var	data = {
	works: [
		{
			texto: 'aprender vue 1',
			doIt: false
		},        
		{
			texto: 'aprender vue 2',
			doIt: false
		},        
		{
			texto: 'aprender vue 3',
			doIt: false
		}
	],
	new_work: '',
}


// vamos a crear un componente
// Vue.component('nombre del componente', objeto) 
Vue.component('titulo', {
	template: '<h2>{{ title }}</h2>',
	data: function() {
		return {title: 'Lista de tareas - Componente'}
	}
}) 

Vue.component('add-work', {
	template: `
						<div class="input-group">
							<input type="text" name="texto" v-model="new_work" placeholder="Nueva Tarea" class="form-control" v-on:keyup.enter="add">
							<span class="input-group-btn">
								<button type="button" v-on:click="add" class="btn btn-primary">Agregar</button>
							</span>
						</div>
						`,
	data: function() {
		return data
	},
	methods: {
		add: function(item) {
			let texto = this.new_work.trim()
			if (texto) {
				this.works.push({
					texto: texto,
					doIt: false
				})
			}
			this.new_work = ''
		}
	}
})

Vue.component('todo-list', {
	template: `
						<div>
							<ul class="list-group">
								<li class="list-group-item" v-for="(work, idx) of works" v-bind:class="{doIt: work.doIt}">
									<div class="row justify-content-between">
										<div>
											{{work.texto}}  
										</div>  
										<div>
											<template v-if="work.doIt">
												<button type="button" class="btn btn-success" v-on:click="change(work)">Hecho</button>
											</template>
											<template v-else>
												<button type="button" class="btn btn-danger" v-on:click="change(work)">No Hecho</button>
											</template>
											<button type="button" v-on:click="remove(idx)" class="btn btn-primary">Remove</button>
										</div>
									</div>
								</li>
							</ul>
						</div>
						`,
	data: function() {
		return data
	},
	methods: {
		change: function(item) { 
			item.doIt = !item.doIt
		},
		remove: function(idx) {
		 this.works.splice(idx, 1)
		},		
	}
})



var vue = new Vue({
	el: '#app',
	data: data,
	methods: {
	}
})