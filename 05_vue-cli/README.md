# Que hacer para usar VUE-CLI


## Links 
- [para instalacion de digitial-ocean](https://www.digitalocean.com/community/tutorials/como-instalar-node-js-en-ubuntu-16-04-es)
- [nodejs](https://nodejs.org/)
- [vue-cli github](https://github.com/vuejs/vue-cli)

## Comandos
- Tener node y npm instalado
```console
$ sudo apt-get update
$ sudo apt-get install nodejs
$ sudo apt-get install npm
```

- Para ver si los tienes instalados debemos usar los comandos
```console
$ which node
$ which npm
```

- Ahora para usar vue-cli(Comand Line Interface)
```console
// no olvidar instalar como superusuario dado que estamos en **global**
$ npm install --global vue-cli

$ vue init <template-name> <nombre-del-proyecto>
$ vue init webpack my-project

$ cd <nombre-del-proyecto>
$ npm install 
$ npm run dev
// este ultimo es para correr la aplicacion
```
