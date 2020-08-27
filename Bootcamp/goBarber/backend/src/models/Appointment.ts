import { v4 as uuid } from 'uuid';

// Responsável pelo formato dos dados que serão salvo.
class Appointment {
    id: string;

    provider: string;

    date: Date;

    /*
        É utilizado para que quando eu instânciar a class
        (new Appointment()) consiga passar parâmetros para
        ela e utilizá-los dentro da classe.
    */
    constructor({ provider, date }: Omit<Appointment, 'id'>) {
        // Sempre será um id gerado automáticamente e único
        this.id = uuid();

        // Setando as variáveis com esse nome
        this.provider = provider;
        this.date = date;
    }
}

// Faz com que o appointment possa ser acessado por outros arquivos
export default Appointment;
