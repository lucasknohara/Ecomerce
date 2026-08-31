# EcoTrend

A EcoTrend é uma aplicação de e-commerce voltada para a venda de ecobags.

## Tecnologias utilizadas

* React
* JavaScript
* HTML
* CSS
* Vite
* Fetch API
* LocalStorage
* Font Awesome
* Google Fonts

## Como executar o projeto

Primeiro, clone o repositório:

```bash
git clone URL_DO_REPOSITORIO
```

Entre na pasta do projeto:

```bash
cd Ecomerce
```

Instale as dependências:

```bash
npm install
```

Depois execute o projeto:

```bash
npm run dev
```

O Vite irá disponibilizar o projeto em um endereço local para acessar pelo navegador.

## Produtos

Os produtos utilizados na aplicação são armazenados no arquivo:

```text
public/produtos.json
```

Os dados dos produtos são carregados utilizando `fetch` e exibidos dinamicamente na aplicação.

## Carrinho

O carrinho permite adicionar produtos, aumentar ou diminuir suas quantidades e remover produtos.

Os dados do carrinho são armazenados no `localStorage`, fazendo com que os produtos continuem no carrinho mesmo após atualizar a página.

## Checkout

O checkout permite informar:

* Nome
* E-mail
* Forma de pagamento

Antes de finalizar a compra, os dados são validados.

O processamento do pedido é simulado utilizando uma `Promise` e `async/await`, exibindo um feedback enquanto o pedido está sendo processado.

## Desenvolvido por

Lucas Kaoru
Matheus Lemos
Enzo Echelli
