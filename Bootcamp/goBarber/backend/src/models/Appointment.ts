// import { v4 as uuid } from 'uuid';
// Comunica para o banco que esse model está relacionado a uma tabela
// Entity => Algo que irá ser salvo no banco de dados, uma entidade
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
    JoinColumn,
} from 'typeorm';

import User from './User';

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
    provider_id: string;

    /*
        Um para Um (OneToOne) => Um usuário tem um e só um agendamento.
        Um para Muitos (OneToMany) => Um usuário tem muitos agendamentos.
        Muitos para Muitos (ManyToMany) => Como se muitos usuários pudessem participar do mesmo agendamentos.
    */
    // Muitos agendamentos para um usuário
    @ManyToOne(() => User)
    // Qual coluna que irá identificar o usuário do agendamento
    @JoinColumn({ name: 'provider_id' })
    provider: User;

    @Column('time with time zone')
    date: Date;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
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
