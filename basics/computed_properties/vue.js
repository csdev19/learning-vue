let vue = new Vue ({
	el: '.vue',

	data: {
		hello: 'Hola estas estudiando COMPUTED PROPERTIES',
		first: 0,
		second: 0,
		third: 0,
		four: 0,
		// total: 0,
	},

	computed: {
		total: function () {
			return this.first + this.second + this.third + this.four;
		}
	}

})