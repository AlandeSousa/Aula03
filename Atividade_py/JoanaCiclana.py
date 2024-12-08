valor_inicial = 2000
taxa_juros = 0.10  
anos = 8 

valor_futuro = valor_inicial * (1 + taxa_juros) ** anos

print(f"O montante final após 8 anos será de R$ {valor_futuro:.2f}")