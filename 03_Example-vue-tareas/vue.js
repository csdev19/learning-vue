var vue = new Vue({
    el: '#app',
    data: {
        title: 'Lista de tareas',
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
        add_texto: '',
    },
    methods: {
    	add: function(item) {
    		let texto = this.add_texto.trim()
    		if (texto) {
	    		this.works.push({
	    			texto: texto,
	    			doIt: false
	    		})
    		}
    		this.add_texto = ''
    	},
    	change: function(item) { 
    		item.doIt = !item.doIt
    	},
    	remove: function(idx) {
			this.works.splice(idx, 1)
    	},
    }
})