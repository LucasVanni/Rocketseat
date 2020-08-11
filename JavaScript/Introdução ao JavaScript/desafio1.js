let endereço = {
  rua: "Rua dos pinheiros",
  numero: 1293,
  bairro: "Centro",
  cidade: "São Paulo",
  uf: "SP"
};

function retornaEndereço() {
  console.log(`O usuário mora em ${endereço.cidade} / ${endereço.uf}, no bairro ${endereço.bairro}, na rua "${endereço.rua}" com nº ${endereço.numero}.`)
}

retornaEndereço()