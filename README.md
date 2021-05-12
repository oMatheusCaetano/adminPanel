<hr>
<h1 align=center>LARAVEL 8 & VUEJS 3 TEMPLATE</h1>
<hr>

## Sobre Laravel 8 & VueJS 3 Template
Este é um projeto com algums configurações inciais para um projeto Laravel/VueJS.

## Executar o Projeto com Docker
Esta é a forma recomendada de utilização do projeto pois não depende de configurações prévias da máquina bastando apenas a instalação do [Docker](https://www.docker.com/) e [Docker Compose](https://docs.docker.com/compose/)

Antes de construir as imagens e containers é preciso que um arquivo `.env` seja criado na raiz do projeto. Este arquivo possui variàveis de ambiente que serão utilizadas tanto pelo [Docker](https://www.docker.com/) quanto pelo [Laravel](https://laravel.com/docs/8.x).

Já existe um arquivo `.env.example` que pode ser renomeado para `.env`.

Após a criação do arquivo `.env` basta rodar o comando:
```
  docker-compose up --build -d
```
Este irá criar as imagens e containers necessários para a aplicação.

Assim que os containers estiverem rodando é preciso instalar as dependências do PHP, para isso é preciso acessar o container do PHP
```
  docker exec -it laravel_vue_php bash
```

Agora dentro do container do PHP basta executar o comando:
```
  composer install
```

<br> <br>
**OBS**: Dentro deste container podem ser executados comandos do composer e artisan
<br> <br>

Também será necessário gerar a chave da aplicação Laravel:
```
  composer run generate-key
```
ou
```
  php artisan key:generate
```

A aplicação pode ser acessada em: `http://localhost:7000/`

### PHPMyAdmin
Também existe um container do PHPMyAdmin configurado.
O PHPMyAdmin pode ser acessdo em: `http://localhost:8088/`

### Yarn
Também existe um container do Yarn configurado.
Caso necessário comandos do Yarn podem ser executados da seguinte forma:
```
  docker-compose run --rm yarn <command>
```

## Executar o Projeto
Para executar o projeto é preciso que a máquina atenda ao seguintes requisitos.
- [PHP ^7.4](https://www.php.net/manual/pt_BR/intro-whatis.php)
- [Composer](https://getcomposer.org/)
- [NodeJS](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/) ou [NPM](https://www.npmjs.com/)

É preciso instalar as dependências do PHP, para isso:
```
  composer install
```
Antes de rodar a aplicação é preciso que um arquivo `.env` seja criado na raiz do projeto. Este arquivo possui variàveis de ambiente que serão utilizadas pelo [Laravel](https://laravel.com/docs/8.x).

Já existe um arquivo `.env.example` que pode ser renomeado para `.env`.

Também será necessário gerar a chave da aplicação Laravel:
```
  composer run generate-key
```
ou
```
  php artisan key:generate
```

Para rodar a aplicação basta utilizar o comando:
```
  php artisan serve
```

A aplicação pode ser acessada em: `http://localhost:7000/`

## Front End
O projeto visa a criação de uma SPA com [VueJS 3](https://v3.vuejs.org/), mas nada o impede de relizar algumas poucas mudanças para usar o [VueJS 2](https://vuejs.org/) ou o [Blade](https://laravel.com/docs/8.x/blade).

### Features:
- [Eslint](https://eslint.org/)
- [Vuex](https://next.vuex.vuejs.org/)
- [Vue-Router](https://router.vuejs.org/)
- [Bootstrap 5](https://getbootstrap.com/docs/5.0/getting-started/introduction/)

### @ Alias
Durante a importação de arquivos .vue ou .js pode ser utilizado o alias `@` para referenciar a pasta `/resources/js`.
EX: ``` @/components/text/Title ```

Outros alias disponíveis são: 
- @page - Diretório /resources/js/pages
- @component - Diretório /resources/js/components
- @style - Diretório /resources/sass
- @styleVariables - Arquivo /resources/sass/_variables.scss

É possível gerenciar estes aliases diretamente no arquivo `webpack.mix.js`.

### Compilação dos arquivos fron-end
Caso algum arquivo dentro dos diretórios `resources/js/` ou `resources/sass/` sejam alterados é preciso fazer a compilação destes. Os arquivos compilasdos ficarão dentro do diretório `public/js/` e `public/css/` respectivamente.

Para realizar a compilação dos arquivos é possível utilizar os seguintes comandos.

```
  yarn dev
```
Compila os arquivos desenvolvimento.
<br> <br>

```
  yarn build
```
Compila os arquivos em suas versões minificadas para produção.
<br> <br>

```
  yarn watch
```
Compila os arquivos para desenvolvimento mas estes não são criados nos diretórios `public/js/` e `public/css/` pois ficam em memória e são re-compilados a cada alteração. Neste caso será criado o arquivo `/public/hot`
<br> <br>


## Back End
O projeto utiliza o [Laravel 8](https://laravel.com/docs/8.x) para o back end.

### Features:
- [PHP Insights](https://phpinsights.com/)
- [PHPMyAdmin](https://www.phpmyadmin.net/)

### PHP Insights
PHP Insights é uma biblioteca para ajudar a garantir a qualidade de código PHP.
Para executar análize basta rodar o comando:
```
  php artisan insights
```
