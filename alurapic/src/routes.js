/**
 * 
 * Arquivo: routes.js
 * Data: 18/09/2018
 * Descrição: arquivo responsável por lidar com as rotas da aplicação no
 * lado do Front-End.
 * Author: Glacia Lemos
 * 
 */

import Home from './components/home/Home.vue';
import Cadastro from './components/cadastro/Cadastro.vue';
import Compartimento from './components/compartimento/Compartimento.vue';

export const routes = [
    { path: '',name: 'home', component: Home, titulo: 'Home', menu: true },
    { path: '/cadastro',name: 'cadastro', component: Cadastro, titulo: 'Cadastro', menu: true },
    { path: '/cadastro/:id', name:'altera', component: Cadastro, titulo: 'Cadastro', menu: false },     
    { path: '/compartimento',name: 'compartimento', component: Compartimento, titulo: 'Compartimento', menu: true },
    { path: '*', menu: false}
];