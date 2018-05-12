# Que son las directivas ?

Son atributos especiales con el prefijo " v- "


- EL V al inicio solo es para que view la reconozca
	- v-on 		
	- v-bind 		
	- v-if		
	- v-else
	- v-else-if
	- v-for
	- v-once
	- v-cloak
	- v-text
	- v-html
	- v-model
	- v-pre
	- v-show   


A las directivas les podemos pasar valores. La forma de escribir una directiva es pasarla dentro de un etiqueta html. 

por ejemplo:
	```html
	<p v-if = "variable" > Mi texto </p>
O
	<p v-if = "variable == 5" > Mi texto </p>
	```

-ahora como es un if -> actuara de la siguiente manera :
	como if es un condicional tengo que decirle cual es la condicion si se cumple alguna condicion va a mostrar algo y si no, no mostrara el valor o parrafo en este caso ("variable") y lo que if hara es mirar si es valor de la variable el verdad para mostrar ese parrafo en el DOM o como en el segundo caso dentro de " " podemos poner mas condiciones que nos sean solo de verdad o falso.



- A v-bind se le pasa un argumento 
	```html
	<a v-bind:href = "milink" > http//:www.google.com </a>
	```

- La directiva v-on
	- nos ayuda a escuchar eventos del html 
	```html
	<a v-on:click = " miMetodo "> </a>
	```
	- tambien modificadores 
	```html
	<input v-on:keyup = "enviar" >
	para para que solo pase algo cuando apretamos enter 
	<input v-on:keyup.<nombre del evento (en este caso es enter)> = "enviar">
	```
