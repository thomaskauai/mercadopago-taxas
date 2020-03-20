//moment.locale('pt-br');
const app = new Vue({
  el: '#app',
  data: {
    currentScreen: 'home',
    sellValue: '',
    parcelaSelected: '0',
    fixedTax: 3.79,
    taxasParcela: {
      1 : '0',
      2 : '4.09',
      3 : '5.41',
      4 : '6.70',
      5 : '7.96',
      6 : '9.20',
      7 : '10.41',
      8 : '11.61',
      9 : '12.78',
      10 : '13.92',
      11 : '15.05',
      12 : '16.15',	
    },
    result: '',
  },
  mounted () {
  },
  computed: {       
  },  
  methods: {
    
    calcTaxes() {
      this.result = this.sellValue / ( 100 - (this.fixedTax + parseInt(this.parcelaSelected)) ) * 100;
      
      console.log(parseFloat(this.parcelaSelected));
      
      // / (100 - (this.fixedTax + this.parcelaSelected) * 100);
      //40,00 ÷ (100 – (3,60+16,15) ) x 100
    },
    
    formatNumber(value) {
      let val = (value/1).toFixed(2).replace('.', ',')
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    },
    
    cleanAll() {
      this.travelExpenses = [];
      this.saveApp();
    },      
    
    formatPrice(value) {
        let val = (value/1).toFixed(2).replace('.', ',')
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    },
    
    saveApp() {
      //console.log(this.travelExpenses[0]['spendings']);
      //const parsed = JSON.stringify(this.travelExpenses);
      //localStorage.setItem('travelExpenses', parsed);
    }
  }
})