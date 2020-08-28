// import { v4 as uuid } from 'uuid';
// Comunica para o banco que esse model está relacionado a uma tabela
// Entity => Algo que irá ser salvo no banco de dados, uma entidade
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

// Responsável pelo formato dos dados que serão salvo.
/*
    Decorator Entity funciona como uma função,
    ele irá pegar a função entity e como parâmetro
    vai enviar a classe que está em baixo
*/
// Toda vez que faz as operações será salvo na tabela appointments
@Entity('appointments')
class Appointment {
    // Decorator para chave primária gerada automáticamente.
    @PrimaryGeneratedColumn('uuid')
    id: string;

    /*
        Decorator para coluna comum,
        ele quando utilizado
        sem passar parâmetros
        assume o valor varchar
    */
    @Column()
    provider: string;

    @Column('time with time zone')
    date: Date;

    /*
        É utilizado para que quando eu instânciar a class
        (new Appointment()) consiga passar parâmetros para
        ela e utilizá-los dentro da classe.
    */
    // // Não precisamos do constructor no model com o typeORM
    // constructor({ provider, date }: Omit<Appointment, 'id'>) {
    //     // Sempre será um id gerado automáticamente e único
    //     this.id = uuid();

    //     // Setando as variáveis com esse nome
    //     this.provider = provider;
    //     this.date = date;
    // }
}

// Faz com que o appointment possa ser acessado por outros arquivos
export default Appointment;
