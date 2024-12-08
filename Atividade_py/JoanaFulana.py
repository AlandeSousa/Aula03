valor_inicial = 1200  
taxa_juros = 0.09  
anos = 10  

valor_futuro = valor_inicial * (1 + taxa_juros) ** anos

print(f"O montante final após 10 anos será de R$ {valor_futuro:.2f}")