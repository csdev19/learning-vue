let vue = new Vue ({
	el: '.vue',

	data: {
		contador: 0,
		mesage: '',
		x: 0,
		y: 0,
		moreThan1: 0,
	},

	methods: {
		restar: function (){
			this.contador--
		},

		alerta: function (msj){
			alert (msj)
		},

		showTarget: function (ev){
			this.x = ev.clientX;
			this.y = ev.clientY;
		},
		sumar: function (){
			this.moreThan1++
		}
	}
	
})