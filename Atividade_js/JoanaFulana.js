let valor_inicial = 1200;  
let taxa_juros = 0.09;  
let anos = 10;         

let valor_futuro = valor_inicial * Math.pow(1 + taxa_juros, anos);

console.log(`O montante final após 10 anos será de R$ ${valor_futuro.toFixed(2)}`);
