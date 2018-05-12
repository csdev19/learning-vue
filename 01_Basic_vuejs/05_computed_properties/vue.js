new Vue ({
	el: '.vm',
	data : {
		primero : 0,
		segundo : 0,
		tercero : 0,
		cuarto  : 0,
		suma    : 0
	},
// computed son propiedades que van a ser calculada automaticamente si uno de los 
// valores cambia 
	computed : {
		total : function () {
			return this.primero + this.segundo + this.tercero + this.cuarto
		}
	} 
})