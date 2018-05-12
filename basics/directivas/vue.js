let vue = new Vue ({
	el: '.vue',

	data: {
		name : 'dasd',
		vbind: 'http://lorempixel.com/400/200',
		vtext: 'Lorem ipsum dolor sit amet, consectetur adipisiciLorem ipsum dolor sit amet',
		vhtml: 'Hola estamos <strong>dentro de un tag en JS</strong>',
		vIfElse: 1,
		vshow: true,
		tarea: '',
		items: [
			{ item: 'item1'},
			{ item: 'item2'},
			{ item: 'item3'},
			{ item: 'item4'}
		],
		objeto: {
			nombre: 'cristian',
			edad: 19,
			nacionalidad: 'peruano',
			profesion: 'desarrollador',
			lenguaje: 'python'
		}
	},

	methods: {
		changes: function (){
			if (this.vIfElse >= 3) {
				this.vIfElse = 1
			}
			else {
				this.vIfElse = this.vIfElse + 1
			}
			return this.vIfElse
		},
		changeIt: function (){
			this.vshow = !this.vshow
			return !this.vshow
		},
		agregar: function (tarea) {
			this.items.push(
					{ item: tarea}
				)	
			this.tarea = ''
		}
	}
})