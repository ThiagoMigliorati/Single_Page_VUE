<template>
  <div>
    <h1>compartmento - {{ valorSelecionado }}</h1>
    <hr>
    <div>
        <select v-model='valorSelecionado' @change='changeSelect'>
            <option v-for='item in vforselectInserts' :value='item .id'>{{ item.nome }}</option>
        </select>
    </div>
    <div>
      <date-range-picker> </date-range-picker>
    </div>
  </div>
</template>
<script>

import DateRangePicker from 'vue2-daterange-picker'


export default {

  components: {
    DateRangePicker
  },

  methods: {
    changeSelect: function(){
        console.log('modificado')
    },
    chargeSelect: function(){
       
        let options = []

        for(let i = 0 ; i <= 12; i++){

            let mes = (this.mesAtual - i)

            if(mes <= 0){
              options.push({id: i, nome: this.monthLabel[(11 - Math.abs(mes))], mes: 'data1', ano: (this.anoAtual - 1)})
            }else{
              options.push({id: i, nome: this.monthLabel[mes], mes: i, ano: this.anoAtual})
            }
            
        }

        this.vforselectInserts = options
    }
  },

  data() {
    return {

        anoAtual: '',
        mesAtual: '',

        monthLabel: ['jan','feb','mar','apr','may','jun','jul','ago','sep','oct','nov','dec'],

        valorSelecionado: '',
        vforselectInserts: [{id: 1, nome: 'nome', data: 'data'}]
      }
  },
  created() {

      let dateNow = new Date()
      this.mesAtual = (dateNow.getMonth() + 1)
      this.anoAtual = dateNow.getFullYear()
      this.chargeSelect()
      
  }
}
</script>
