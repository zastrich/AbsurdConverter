
# Projeto desenvolvido para o aprendizado do NextJS e Prisma

[![Awesome Badges](https://img.shields.io/badge/use-nodejs%2012.4.0-339933.svg?logo=Node.js)](https://nodejs.org/) [![Awesome Badges](https://img.shields.io/badge/use-reactjs%2016.13.1-61DAFB.svg?logo=React)](https://reactjs.org/) [![Awesome Badges](https://img.shields.io/badge/use-nextjs%209.3.5-green.svg?logo=Next.js)](https://nextjs.org/) [![Awesome Badges](https://img.shields.io/badge/use-sqlite-003B57.svg?logo=SQLite)](https://www.sqlite.org/) [![Awesome Badges](https://img.shields.io/badge/use-prisma%202.0.0-1a202c.svg)](https://www.prisma.io/) [![Awesome Badges](https://img.shields.io/badge/by-zastrich-red.svg)](https://code200.com.br/) [![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)


> É livre a colaboração nesse projeto.

Inicie clonando o diretório:

    git clone https://github.com/zastrich/AbsurdConverter meu-projeto

Acesse o local do seu projeto:

    cd meu-projeto

Instale as dependências:

    yarn

Rode seu projeto:

    yarn dev

> Caso queira contribuir com a base de dados de unidades, você poderá fazer isso a partir do prisma das seguintes formas

## Contribuir com conteúdo de unidades

Rode 

    yarn db-start

Após esse comando se tudo correr bem você poderá acessar o link [http://localhost:5555](http://localhost:5555) e incluir ou editar informações no banco de dados

## Contribuir mudando a estrutura ou adicionando novas funcionalidades

Você pode editar o arquivo [/prisma/schema.prisma](/prisma/schema.prisma) e adicionar colunas ou novas tabelas ao banco de dados embarcado (SQLite), após essa edição você deverá seguir os seguintes passos:

Rode esse comando para criar uma migration da alteração:

    yarn db-save

Suba as migrations com o seguinte comando:

    yarn db-up

Finalmente rode o último comando que vai gerar as alterações dentro da lib:

    yarn db-gen

Se tudo correu bem, você poderá ver as modificações rodando a interface de banco de dados do Prisma:

    yarn db-start

Aí é só acessar [http://localhost:5555](http://localhost:5555) e alterar as informações com base nas alterações estruturais que você fez.