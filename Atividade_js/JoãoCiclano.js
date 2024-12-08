function calcularValorPresente(fv, taxa, anos) {
    return fv / Math.pow(1 + taxa, anos);
}

const taxajuros = 0.08;

const valor_futuro = 14000;
const anosJoaoCiclano = 12;
const valor_depositar = calcularValorPresente(valor_futuro, taxajuros, anosJoaoCiclano);

console.log(`joão ciclano precisa depositar hoje: $ ${valor_depositar.toFixed(2)}`);