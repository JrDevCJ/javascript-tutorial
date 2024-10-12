class Pais {
  constructor(habitantes, taxaCrescimento) {
    this.habitantes = habitantes;
    this.taxaCrescimento = taxaCrescimento;
  }

  crescerPopulacaoAnual() {
    this.habitantes += (this.habitantes * this.taxaCrescimento /100);
    console.log(`${this.habitantes} anos`);
  }
}

const habitantesPaisA = parseFloat(80000);
const habitantesPaisB = parseFloat(100000);

const paisA = new Pais(habitantesPaisA, 3.0);
const paisB = new Pais(habitantesPaisB, 1.5);

let quantidadeAnos = 0;

while (paisA.habitantes < paisB.habitantes) {
  paisA.crescerPopulacaoAnual();
  paisB.crescerPopulacaoAnual();
  quantidadeAnos ++;
}

console.log(`${quantidadeAnos} anos`);


<script src="https://code.responsivevoice.org/responsivevoice. js">
</script>
