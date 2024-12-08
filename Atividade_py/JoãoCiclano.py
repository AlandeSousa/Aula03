taxa_juros = float(input("digite a taxa de juros anual: ")) / 100

valor_futuro = 14000 
anos = 12
valor_presente = valor_futuro / (1 + taxa_juros) ** anos

print(f"joão ciclano precisa depositar hoje R$ {valor_presente:.2f} para ter R$ 14000 em 12 anos.")

