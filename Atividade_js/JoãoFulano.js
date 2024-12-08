function ValorPresente(fv, taxa, anos) {
    return fv / Math.pow(1 + taxa, anos);
}

const taxajuros = 0.08;

const valor_futuro = 12000;
const anosfulano = 10;
const valor_depositar = ValorPresente(valor_futuro, taxajuros, anosfulano);

console.log(`joão fulano precisa depositar hoje: $ ${valor_depositar.toFixed(2)}`);

