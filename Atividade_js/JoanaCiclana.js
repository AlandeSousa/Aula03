let valor_inicial = 2000;  
let taxa_juros = 0.10;  
let anos = 8;         

let valor_futuro = valor_inicial * Math.pow(1 + taxa_juros, anos);

console.log(`O montante final após 8 anos será de R$ ${valor_futuro.toFixed(2)}`);