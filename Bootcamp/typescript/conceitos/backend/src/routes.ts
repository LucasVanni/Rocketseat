import {Request, Response} from 'express';
import createUser from './services/createUser';

export function helloWorld(request: Request, response: Response) {
  const user = createUser(
    {
      email: 'teste@teste.com',  
      password:  '123456789',
      techs: [
        'NodeJs', 
        'React',
        'React Native', 
        {title: 'Javascript', experience: 100},
        {title: 'Linux', experience: 100}
      ],
      hobby: ['Programar', 'Ver projetos no github', 'Ouvir música']
    });
  return response.json({message: "Hello World"});
}
