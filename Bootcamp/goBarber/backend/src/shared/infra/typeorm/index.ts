// Arquivo onde faremos a conexão com o banco de dados
import { createConnections } from 'typeorm';

// Criando a conexão.
/*
    Ele busca em todas as pastas da aplicação
    um carinha chamado ormconfig.json,
    se ele encontrar ele passa direto e faz
    a conexão.

    Porque foi configurado ali?

    Por conta da cli, se não configurarmos no
    arquivo ormconfig.json a cli não conseguirá
    acessar as informações, e como ela lê também
    do ormconfig.json colocamos as credênciais
    do banco alí
*/
createConnections();
