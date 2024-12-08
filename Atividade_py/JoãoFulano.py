taxa_juros = float(input("digite a taxa de juros anual: ")) / 100

valor_futuro = 12000  
anos = 10
valor_presente = valor_futuro / (1 + taxa_juros) ** anos

print(f"joão fulano precisa depositar hoje R$ {valor_presente:.2f} para ter R$ 12000 em 10 anos.")

