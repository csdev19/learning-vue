new Vue ({
	el : '.vm',
	data : {
		mensaje : 'This is the mesage'
	},
// empezaremos creando los metodos que vimos en el primer video
	beforeCreate : function () {
		console.log('calling beforeCreate');
	},
	created : function () {
		console.log('calling created');
	},	
	beforeMount : function () {
		console.log('calling beforeMount');
	},	
	mounted : function () {
		console.log('calling mounted');
	},	
// el siguiente actua cuando se cambia alguna informacion asi que ...
// veremos como se van a ejecutar estos ganchos
	beforeUpdate : function ()  {
		console.log('calling beforeUpdate');
	},
	updated : function ()  {
		console.log('calling update');
	},
	beforeDestroy : function ()  {
		console.log('calling beforeDestroy');
	},
	destroyed : function ()  {
		console.log('calling destroyed');
	},
	methods : {
		destruir : function () {
			this.$destroy();
		}
	}
})
