# AllBooks

Projeto teste sobre desenvolvimento de um software capaz de realizar a condução de energia atraves de condução para uma bateria de carro

# JSONServer + JWT Auth

Essa é ma API Rest mockada, utilizando json-server e JWT.

## 🛠️ Instalação

```bash
$ npm install
$ npm run start-auth
```
## 🛠️ Como se registrar?

Você pode fazer isso efetuando uma requisição post para:

```
POST http://localhost:8000/public/registrar
```

Com os seguintes dados:


```
{
    "nome": "vinicios neves",
    "email": "vinicios@alura.com.br",
    "senha": "123456",
    "endereco": "Rua Vergueiro, 3185",
    "complemento": "Vila Mariana",
    "cep": "04101-300"
}
```

Repare que o e-mail é um campo único e usuários com e-mails duplicados não serão persistidos.

## 🛠️ Como fazer login?

Você pode fazer isso efetuando uma requisição post para:

```
POST http://localhost:8000/public/login
```

Com os seguintes dados:


```
{
  "email": "vinicios@alura.com.br",
  "senha":"123456"
}
```

Você vai receber um token no seguinte formato:

```
{
   "access_token": "<ACCESS_TOKEN>",
   "user": { ... dados do usuário ... }
}
```

## Autenticar próximas requests?

E então, adicionar este mesmo token ao header das próximas requisições:

```
Authorization: Bearer <ACCESS_TOKEN>
```
