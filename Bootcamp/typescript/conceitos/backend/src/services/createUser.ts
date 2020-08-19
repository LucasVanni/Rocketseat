
interface TechsObject {
  title: string,
  experience: number,
}

interface CreateUserData {
  /*
    Quando queremos que o parâmetro não seja obrigatório,
    adicionamos o ponto de interrogação
  */
  name?: string,
  email: string,
  password: string,
  /* 
  O formato abaixo é utilizado quando temos mais de um tipo
  de informação dentro do array.

  Array<valores que serão recebidos pelo array> 
    ! Quando for um objeto dentro de um array é necessário cria
    ! uma nova interface para o objeto, pois preciso definir
    ! o formato de um objeto.

    (tipo variável)
  */
  techs: Array<string | TechsObject>,
  /*
    Quando temos a certeza que irá ser um array de strings podemos
    declarar da seguinte forma: (tipo único)
  */
  hobby: string[];
}
                                                            // colocar como o parâmetro da função toda
export default function createUser({ name, email, password }: CreateUserData){
  const user = {
    name,
    email,
    password
  };

  /*
    Como o user sabe os tipos de parâmetros,
    permite que consígamos utilizar a
    inteligência do navegador para acessar as
    variáveis apertando control + espaço ou 
    diretamente o ponto após utilizar as variáveis
  */
  console.log(user.name);

  return user;
}