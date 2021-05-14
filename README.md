# Desafio Pessoalize Full Stack

## Criar uma interface em react que consuma API e socket

Criar uma interface em react com suporte a criação, edição, exclusão e leitura.

## Endpoints:

- URL Base: https://api.teste.frontend.pessoalize.com: 

 ```
   // Path para criar um produto
    /products/create
	method: POST
	body: {
	   "amount": 28798,
    "picture": "http://dummyimage.com/107x156.bmp/ff4444/ffffff",
    "name": "Tart - Butter Plain Squares",
    "price": 900.0,
    "description": "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat."
	}
 ```
 ```
   // Path para atualizar um produto
    /products/{id_do_produto}
	method: PUT
	body: {
    "amount": 1,
    "picture": "luan",
    "name": "xxxxxxxxx",
    "price": 900.0,
    "description": "asddasdsadsasadsadd."
}
 ```
 ```
   // Path para deletar um produto
    /products/{id_do_produto}
	method: DELETE
 ```
 ```
   // Path para criar um variação do produto
    /products/variant/create/{id_do_produto}
	method: POST
	body: {
    "amount": 28798,
    "picture": "xxxxx",
    "name": "xxxxxs",
    "price": 900.0,
    "description": "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat."
}
 ```
 ```
   // Path para deletar uma variação do produto
    /products/variant/{id_do_produto}
	method: DELETE
 ```
 ```
   // Path para atualizar a variação de um produto
    /products/variant/{id_do_produto}
	method: PUT
	body: {
	   "amount": 28798,
    "picture": "http://dummyimage.com/107x156.bmp/ff4444/ffffff",
    "name": "Tart - Butter Plain Squares",
    "price": 900.0,
    "description": "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat."
	}
 ```
 ```
   //Socket para listar os produtos
    socket.on("GET_ALL_PRODUCTS", (products) => {
       console.log(products);
    });
 ```

##OBS: 
- Versão do socket.io tem que ser a 2.4 rode o seguinte comando 
```yarn add socket2.4.0 ```

## O que será avaliado:

- Arquitetura escolhida para desenvolvimento do teste.
- Qualidade e simplicidade do código.
- Funcionamento do produto entregue.
- Seguir o padrão RESTful.
- Socket

### Processo de submissão

- Faça um fork deste projeto em sua conta no [Github](https://github.com/join)
- Em seguida, desenvolva o projeto em seu repositório.
- Submeta um PR

_Boa sorte!_
