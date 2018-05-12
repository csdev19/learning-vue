var app = new Vue ({
	el : '.vue',
	data : {
		msj : 'Aprende Vue.js Facilmente',
		src : 'https://vuejs.org/images/logo.png'	
	},	
// creamos una nueva propiedad llamada methods
	methods : {
		showMsj : () => "Learn vuejs easily " 	
	}
})