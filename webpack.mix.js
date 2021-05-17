/* eslint-disable global-require */

const mix = require('laravel-mix');
const path = require('path');
const tailwindcss = require('tailwindcss');

const jsResourcesPath = 'resources/js';
const sassResourcesPath = 'resources/sass';
const jsPublicPath = 'public/js';
const cssPublicPath = 'public/css';

const addJsResource = (filename) => `resources/js/${filename}.js`;
const addSassResource = (filename) => `resources/sass/${filename}.scss`;

mix
  .vue({ version: 3 })
  .js(addJsResource('main'), jsPublicPath)
  .sass(addSassResource('main'), cssPublicPath)
  .options({
    processCssUrls: false,
    postCss: [
      tailwindcss('./tailwind.config.js'),
    ],
  })
  .webpackConfig({
    resolve: {
      alias: {
        '@': path.resolve(__dirname, jsResourcesPath),
        '@pages': path.resolve(__dirname, `${jsResourcesPath}/pages`),
        '@components': path.resolve(__dirname, `${jsResourcesPath}/components`),
        '@style': path.resolve(__dirname, sassResourcesPath),
        '@mainStyles': path.resolve(__dirname, `${sassResourcesPath}/main.scss`),
        '@styleVariables': path.resolve(__dirname, `${sassResourcesPath}/_variables.scss`),
      },
    },
    module: {
      rules: [
        {
          test: /\.(js|vue)$/,
          exclude: /node_modules/,
          loader: 'eslint-loader',
          options: {
            formatter: require('eslint-friendly-formatter'),
          },
        },
      ],
    },
  });
