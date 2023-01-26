numero = 1
resto = numero % 2
par = []
impar = []
while numero <= 10:
  if resto == 0:
    par = numero
  else:
    impar = numero
    numero += 1
    print(par)
    print(impar)