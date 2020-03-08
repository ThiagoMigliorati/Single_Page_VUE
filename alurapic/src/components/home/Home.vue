<template>
  <div>
    <h1 class="centralizado">Alurapic</h1>
    <p class='centralizado' v-show="mensagem">{{ mensagem }}</p>
    <input type="search" class="filtro" @input="filtro = $event.target.value" placeholder="Filtre pelo Título da Foto">
    <ul class="lista-fotos">
      <li class="lista-fotos-item" v-for="foto of fotosComFiltro">

        <meu-painel :titulo="foto.titulo">
          <imagem-responsiva :url="foto.url" :titulo="foto.titulo" v-meu-transform:scale.animate="1.2" />
          
          <router-link :to="{ name: 'altera', params: { id : foto._id }}">
            <meu-botao 
              rotulo="Alterar" 
              tipo="button"/>
          </router-link>  

          <meu-botao 
            rotulo="remover" 
            tipo="button" 
            estilo="perigo"
            :confirmacao="true" 
            @botaoAtivado="remove(foto)"/>
        </meu-painel>

        
        </meu-painel>

      </li>
    </ul>
  </div>
</template>

<script src="./Home.js" />
<style src="./Home.css" scoped />

