# SeuCanteiro

O Seu Canteiro foi projetado para ajudar as pessoas que vivem em áreas urbanas a cultivarem seus próprios alimentos em casa, fornecendo informações e orientações sobre agricultura urbana. A solução idealizada visa aumentar a segurança e o controle administrativo sobre as atividades relacionadas ao cultivo de alimentos, além de garantir a segurança no uso e consumo dos produtos da agricultura. 

 
Orientações detalhadas sobre o cultivo: O aplicativo fornece informações abrangentes sobre como plantar diferentes tipos de alimentos em ambientes urbanos. Ele orienta os usuários sobre o preparo do solo, a escolha das sementes adequadas, a quantidade de água necessária, a adubação. Essas orientações permitem que os usuários administrem melhor os processos produtivos, maximizando a produtividade e a qualidade dos alimentos cultivados. 

 
Acompanhamento personalizado: O aplicativo permite que os usuários registrem e acompanhem suas atividades de cultivo, como datas de plantio, irrigação e colheita. Essa funcionalidade proporciona um maior controle administrativo, permitindo que os usuários monitorem seu progresso e tomem decisões informadas com base nos dados coletados. Eles podem registrar e rastrear o desempenho de suas plantações ao longo do tempo, identificando áreas de melhoria e otimizando suas práticas agrícolas. 

 
Através dessas funcionalidades, o aplicativo Seu Canteiro permite que os usuários administrem melhor os processos produtivos e distributivos de alimentos, garantindo uma abordagem mais segura e controlada para a agricultura urbana. Ele capacita os usuários a cultivarem seus próprios alimentos com confiança, fornecendo informações atualizadas, orientações personalizadas nos. Isso resulta em uma maior segurança alimentar, uma melhor gestão dos recursos disponíveis e uma maior autonomia para as pessoas nas áreas urbanas. 

--------------------------

## GRUPO TILLS
RM93042 - FILIPE SANTOS DA SILVA
RM94467 - FRANKLIN PEREIRA DO NASCIMENTO
RM93915 - JAELSON JONAS DOS SANTOS
RM92920 - JOSE GABRIEL DA SILVA COELHO
RM94141 - MARIANA NIETON BORGES

## Orientações
    - Nos endpoints deve-se colocar o IP local caso for emular pelo Android
    - Somente o Cadastro de Usuário e Login estão disponíveis sem autenticação, portanto para ter acesso as outras requisições e telas crie um usuário e faça login
    - Aqui está o link para o projeto do Back-End Java https://github.com/FilipeJava/seucanteiro, clone esse repositório e suba a aplicação para conseguir fazer a persistência de dados
    

### ENDPOINTS


- Usuario Controller 
    - salvar ( Metodo faz a persistência tanto de Usuario quanto de Login  e cria tbm um canteiro para o usuario)

    - buscar por id (Apenas os Dados do Usuario)

    - deletar ( metodo Deleta Usuario , Login e Canteiro por Cascade, pelo ID Usuario)

    - atulizaUsuario (Atualiza usuario isoladamente)

--------------------------

- Login Controller
   - login (Metodo de autenticação com JWT) 

   - atualizar(Atualiza Login isoladamente)
--------------------------
- Planta Controller
    - salva (Cria Planta e plantio e associa um  ID canteiro )

    - atualiza (Atualiza Planta e Plantio ao mesmo tempo pelo ID planta)
    
    - buscaId (Busca Planta Plantio por id Planta)

    - deletar (Deleta planta e Plantio que por cascade são deletados juntos , pelo id do Plantio )

    - buscarTodos ( para retornar todos os planta plantio )

    - index (Paginação e Busca pelo nome)
--------------------------
- Canteiro Controller
    - buscar todas as Plantas e Plantio pelo id canteiro
--------------------------


### Usuario Controller


`POST` /api/v1/usuario -não requer autenticação

**Campos da Requisição**

- Usuario

| campo | tipo | obrigatório | descrição 
|-------|------|:-------------:|---
|nome | String | sim | o nome do usuario deve ser entre 3 a 200
|cpf | String | sim | o cpf do usuario deve ser no formato xxxxxxxxx-xx
|dataNascimento | LocalDate | sim | a data do usuario deve ser no formato YYYY-MM-DD
|telefone | String | sim | o telefone do usuraio 

- Login

| campo | tipo | obrigatório | descrição 
|-------|------|:-------------:|---
|email | String | sim | o valor do email, unico
|senha | String | sim | o senha nao pode ser nula e vai ser criptografada


**Exemplo de corpo de requisição**

```js
{
  "usuario": {
    "nome": "Usuario Fiap",
    "cpf":"196364790-46",
    "dataNascimento": "1998-04-10",
    "telefone":"911262759"
  },
  "login": {
    "email": "usuario.fiap@example.com",
    "senha": "12345678"
  }
}

```

**Códigos de Respostas**

| código | descrição
|-|-
| 201 | Usuario Salvo
| 400 | campos inválidos
----


### Detalhes do Usuario - buscar por id (Apenas os Dados do Usuario) 

`GET` /api/v1/usuario{id} - requer autenticação

**Exemplo de corpo de resposta**

```js

{
    "id": 1,
    "nome": "Usuario Fiap",
    "cpf": "196364790-46",
    "dataNascimento": "1998-04-10",
    "telefone": "911262759"
}

```

**Códigos de Respostas**

| código | descrição
|-|-
| 200 | dados do usuario  retornados
| 404 | não existe  com o id informado
------------------
### Deleta usuario por id 

`DELETE` /api/v1/usuario{id} - requer autenticação

**Códigos de Respostas**

| código | descrição
|-|-
| 204 | Usuario deletado
| 403 | não autorizado
----



`PUT` /api/v1/usuario/{id} - requer autenticação

**Campos da Requisição**

- Usuario

| campo | tipo | obrigatório | descrição 
|-------|------|:-------------:|---
|nome | String | sim | o nome do usuario deve ser entre 3 a 200
|cpf | String | sim | o cpf do usuario deve ser no formato xxxxxxxxx-xx
|dataNascimento | LocalDate | sim | a data do usuario deve ser no formato YYYY-MM-DD
|telefone | String | sim | o telefone do usuraio 



**Exemplo de corpo de requisição**

```js
{
 
    "nome": "Usuario Fiap",
    "cpf":"196364790-46",
    "dataNascimento": "1998-04-10",
    "telefone":"911262759"
 
}

```

**Códigos de Respostas**

| código | descrição
|-|-
| 200 | Usuario Salvo
| 400 | campos inválidos
----

### Login Controller - login(Metodo de autenticação JWT)


`POST` /api/v1/login -não requer autenticação

**Campos da Requisição**

 **Exemplo de corpo de requisição**

```js
{
    "email": "usuario.fiap@example.com",
    "senha": "12345678"
  }

```  


**Resposta da  Requisição** - O Token deve ir em todos os cabeçalhos das demais requisições para autorizar

```js
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJlbWFpbCI6InVzdWFyaW8uZmlhcEBleGFtcGxlLmNvbSIsImlzcyI6IlNldUNhbnRlaXJvIiwiZXhwIjoxNjg2MDczMDYxfQ.jUVpPpyqIarDJVqbC1d60Eqto1newaMgN4o1ELLOhTs",
    "type": "JWT",
    "prefix": "Bearer "
}

```   

**Códigos de Respostas**

| código | descrição
|-|-
| 200 | Usuario Logado
| 403 | não autorizado
----

### Atulizar (Atualiza o login)

`PUT` /api/v1/login/{id} - requer autenticação

**Campos da Requisição**

- Login

| campo | tipo | obrigatório | descrição 
|-------|------|:-------------:|---
|email | String | sim | o valor do email, unico
|senha | String | sim | o senha nao pode ser nula e vai ser criptografada



**Exemplo de corpo de requisição**

```js
 {
    "email": "usuario.fiap@example.com",
    "senha": "12345678"
  }

```

**Códigos de Respostas**

| código | descrição
|-|-
| 200 | Login atualizado 
| 400 | campos inválidos
----
----------
---------------

### Planta Controller


`POST` /api/v1/planta/{idCanteiro}  -requer autenticação (id canteiro é o mesmo do usuario pois foram criados juntos)


**Campos da Requisição**

- Planta

| campo | tipo | obrigatório | descrição 
|-------|------|:-------------:|---
|nome | String | sim | o sera definido pelo sistema 
|regacao | Integer | sim | a frequencia de regagem deve ser maior que zero
|nomeCientifico | String | não | nome cinetifico da planta 
|apelido | String | não | apelido para sua planta 


- Plantio

| campo | tipo | obrigatório | descrição 
|-------|------|:-------------:|---
|quantidadePlantada | Integer | sim |o valor de quantas plantas plantadas
|dataPlantio | Localdate | sim | data plantio no formato YYYY-MM-DD
|dataColheita | Localdate | não | data colheita no formato YYYY-MM-DD



**Exemplo de corpo de requisição**

```js
{
  "planta": {
    "nome": "Batata",
    "regacao":3,
    "nomeCientifico": "Lumbricsbatats",
    "apelido":"zeca"
  },
  "plantio": {
    "quantidadePlantada": 100,
    "dataPlantio": "2023-05-30",
    "dataColheita": "2023-05-30"
  }
}

```

**Códigos de Respostas**

| código | descrição
|-|-
| 201 | Planta Salva
| 400 | campos inválidos
----


### Atualiza Planta

`PUT` /api/v1/planta/{idPlanta}  -requer autenticação (id planta é o mesmo do plantio pois foram criados juntos)


**Campos da Requisição**

- Planta

| campo | tipo | obrigatório | descrição 
|-------|------|:-------------:|---
|nome | String | sim | o sera definido pelo sistema 
|regacao | Integer | sim | a frequencia de regagem deve ser maior que zero
|nomeCientifico | String | não | nome cinetifico da planta 
|apelido | String | não | apelido para sua planta 


- Plantio

| campo | tipo | obrigatório | descrição 
|-------|------|:-------------:|---
|quantidadePlantada | Integer | sim |o valor de quantas plantas plantadas
|dataPlantio | Localdate | sim | data plantio no formato YYYY-MM-DD
|dataColheita | Localdate | não | data colheita no formato YYYY-MM-DD



**Exemplo de corpo de requisição**

```js
{
  "planta": {
    "nome": "Batata",
    "regacao":3,
    "nomeCientifico": "Lumbricsbatats",
    "apelido":"zeca"
  },
  "plantio": {
    "quantidadePlantada": 100,
    "dataPlantio": "2023-05-30",
    "dataColheita": "2023-05-30"
  }
}

```

**Códigos de Respostas**

| código | descrição
|-|-
| 200| Planta Atualizada
| 400 | campos inválidos
----

### BuscaId Planta

`GET` /api/v1/planta/{idPlanta}  - requer autenticação

**Exemplo de corpo de resposta**

```js

{
    "planta": {
        "id": 1,
        "nome": "Batata",
        "regacao": 3,
        "nomeCientifico": "Lumbricsbatats",
        "apelido": "zeca"
    },
    "plantio": {
        "id": 1,
        "quantidadePlantada": 100,
        "dataPlantio": "2023-05-30",
        "dataColheita": "2023-05-30"
    }
}

```

**Códigos de Respostas**

| código | descrição
|-|- 
| 200 | dados planta plantio retornados
| 404 | não existe  com o id informado
------------------

### Deleta usuario por id 

`DELETE` /api/v1/planta/{idPlanta}  - requer autenticação

**Códigos de Respostas**

| código | descrição
|-|-
| 204 | Planta(Plantio) deletado
| 403 | não autorizado
----

### buscar todos 

`GET` /api/v1/planta  - requer autenticação (metodo criado apenas para satisfazer critérios de prova , não terá aplicação no app mobile)

**Exemplo de corpo de resposta**

```js

[
    {
        "planta": {
            "id": 1,
            "nome": "Batata",
            "regacao": 3,
            "nomeCientifico": "Lumbricsbatats",
            "apelido": "zeca"
        },
        "plantio": {
            "id": 1,
            "quantidadePlantada": 100,
            "dataPlantio": "2023-05-30",
            "dataColheita": "2023-05-30"
        }
    },
    {
        "planta": {
            "id": 2,
            "nome": "Batata",
            "regacao": 3,
            "nomeCientifico": "Lumbricsbatats",
            "apelido": "zeca"
        },
        "plantio": {
            "id": 2,
            "quantidadePlantada": 100,
            "dataPlantio": "2023-05-30",
            "dataColheita": "2023-05-30"
        }
    }
]

```

**Códigos de Respostas**

| código | descrição
|-|-
| 200 | Todos planta plantios  retornados
---

### index Busca e Paginação

`GET` /api/v1/planta/page?nome=Tomate - requer autenticação , metodo criado apenas para atender entrega gs sem aplicação no app


**Códigos de Respostas**

| código | descrição
|-|-
| 200 | Todos planta plantios retornados com o nome "exemplo"
---

### Canteiro controller

`GET` /api/v1/canteiro/{idCanteiro}  - requer autenticação (metodo retorna todos os plantas plantio do usuario pelo id do canteiro que é o mesmo de usuario pois foram criados juntos)

**Exemplo de corpo de resposta**

```js

[
    {
        "planta": {
            "id": 1,
            "nome": "Abobora",
            "regacao": 3,
            "nomeCientifico": "Lumbricsbatats",
            "apelido": "zeca"
        },
        "plantio": {
            "id": 1,
            "quantidadePlantada": 100,
            "dataPlantio": "2023-05-30",
            "dataColheita": "2023-05-30"
        }
    },
    {
        "planta": {
            "id": 2,
            "nome": "Tomate",
            "regacao": 3,
            "nomeCientifico": "Lumbricsbatats",
            "apelido": "zeca"
        },
        "plantio": {
            "id": 2,
            "quantidadePlantada": 100,
            "dataPlantio": "2023-05-30",
            "dataColheita": "2023-05-30"
        }
    }
]

```

**Códigos de Respostas**

| código | descrição
|-|-
| 200 | Todos planta plantios retornados
---
