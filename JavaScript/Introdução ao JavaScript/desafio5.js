var users = [
  {
  nome: "Diego",
  habilidades: ["Javascript", "ReactJS", "Redux"]
  },
  {
  nome: "Gabriel",
  habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
  }
 ];

for(nome in users) {
  console.log(`O ${users[nome].nome} possui as habilidades: ${users[nome].habilidades.join(', ')}`)
}