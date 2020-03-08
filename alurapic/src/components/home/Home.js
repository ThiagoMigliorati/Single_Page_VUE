/*
 * Arquivo: src/components/Home/Home.js
 * Data: 18/11/2018
 * Descrição: arquivo responsável por tratar a lógica do 'Home.js'
 * Author: Glaucia Lemos
 */

import Painel from "../shared/painel/Painel.vue";
import ImagemResponsiva from "../shared/imagem-responsiva/ImagemResponsiva.vue";
import Botao from '../shared/botao/Botao.vue';
import FotoService from '../../domain/foto/FotoService';

export default {
  components: {
    'meu-painel': Painel,
    'imagem-responsiva': ImagemResponsiva,
    'meu-botao': Botao
  },

  methods: {
    remove(foto) {
      this.service
        .apaga(foto._id)
        .then(
          () => {
            let indice = this.fotos.indexOf(foto);
            this.fotos.splice(indice, 1);
            this.mensagem = 'Foto removida com sucesso'
          }, 
          err => {
            this.mensagem = 'Não foi possível remover a foto';
            console.log(err);
          }
        )
    }
  },

  data() {
    return {
      titulo: 'Alurapic',
      fotos: [],
      filtro: "",
      mensagem: ''
    }
  },

  computed: {
    fotosComFiltro() {
      if (this.filtro) {
        let exp = new RegExp(this.filtro.trim(), 'i');
        return this.fotos.filter(foto => exp.test(foto.titulo));
      } else {
        return this.fotos;
      }
    }
  },

  created() {
     //criando uma instância do nosso serviço que depende de $resource
     this.service = new FotoService(this.$resource);
     this.service
       .lista()
       .then(fotos => this.fotos = fotos, err => this.mensagem = err.message);
  //   this.$http
  //     .get("http://localhost:3000/v1/fotos")
  //     .then(res => res.json())
  //     .then(fotos => (this.fotos = fotos), err => console.log(err));
   }
}
