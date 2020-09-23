# Mapeando features do sistema

**RF** => Requisitos Funcionais
**RNF** => Requisitos não funcionais
**RN** => Regras de negócio

## Recuperação de senha

**RF** =>

- O usuário deve poder recuperar sua senha informando o seu e-mail;
- O usuário deve receber um e-mail com instruções de recuperação de senha;
- O usuário deve poder redefinir sua senha;

**RNF** *

- Utilizar MailTrap para testar envios em ambiente de desenvolvimento;
- Utilizar Amazon SES para envios em produção;
- O envio de e-mails deve acontecer em segundo plano (background job);

**RN** *

- O link enviado por email para redefinir senha, deve expirar em 2h;
- O usuário precisa confirmar a nova senha ao redefiní-la;

## Atualização de perfil

**RF** =>

- O usuário deve atualizar seu nome, email, senha e avatar;

**RN** =>

- O usuário não pode alterar seu email para um email já utilizado;
- Para atualizar sua senha, o usuário deve informar a sua senha antiga;
- Para atualizar sua senha, o usuário precisa confirmar a nova senha;

## Painel do prestador

**RF** =>

- O usuário deve poder listar seus agendamentos de um día específico;
- O prestador deve receber uma notificação sempre que houver um novo agendamento;
- O prestador deve poder visualizar as notificações não lidas;

**RNF** =>

- Os agendamentos do prestador no dia devem ser armazenados em cache;
- As notificações do prestador devem ser armazenadas no MongoDB;
- As notificações do prestador devem ser enviadas em tempo-real utilizando Socket.io;

**RN** =>

- A notificação deve ter um status de lida ou não-lida para que o prestador possa controlar;

## Agendamento de serviços

**RF** =>

- O usuário deve poder listar todos os prestadores de serviço cadastrados;
- O usuário deve poder listar os dias de um mês com pelo menos um horário disponível de um prestador;
- O usuário deve poder listar horários disponíveis em um dia específico de um prestador;
- O usuário deve poder realizar um novo agendamento com um prestador;

**RNF** =>

- A listagem de prestadores deve ser armazenada em cache;

**RN** =>

- Cada agendamento deve durar uma hora exatamente;
- Os agendamentos devem estar disponíveis entre 8hrs às 18hrs, ùltimo às 17hrs;
- O usuário não pode agendar em um horário já ocupado;
- O usuário não pode agendar em um horário que já passou;
- O usuário não pode agendar serviços consigo mesmo;
