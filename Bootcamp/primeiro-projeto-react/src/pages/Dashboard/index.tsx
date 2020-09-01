import React, { useState, useEffect, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import Logo from '../../assets/logo.svg';
import { Title, Form, Repositories, Error } from './styles';

import api from '../../services/api';

interface Repository {
    full_name: string;
    description: string;
    owner: {
        login: string;
        avatar_url: string;
    };
}

const Dashboard: React.FC = () => {
    const [repositories, setRepositories] = useState<Repository[]>(() => {
        const storageRepositories = localStorage.getItem(
            '@GithubExplorer:repositories',
        );

        if (storageRepositories) {
            return JSON.parse(storageRepositories);
        }

        return [];
    });
    const [inputError, setInputError] = useState('');
    const [newRepo, setNewRepo] = useState('');

    useEffect(() => {
        localStorage.setItem(
            '@GithubExplorer:repositories',
            JSON.stringify(repositories),
        );
    }, [repositories]);

    const handleAddRepository = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!newRepo) {
            setInputError('Digite o autor/nome do repositório');
        } else {
            try {
                const { data } = await api.get<Repository>(`repos/${newRepo}`);

                setRepositories([...repositories, data]);

                setNewRepo('');
                setInputError('');
            } catch (err) {
                setInputError('Erro na busca por esse repositório');
            }
        }
    };

    return (
        <>
            <img src={Logo} alt="Logo" />
            <Title>Explore repositórios no Github.</Title>
            <Form hasError={!!inputError} onSubmit={handleAddRepository}>
                <input
                    value={newRepo}
                    onChange={e => setNewRepo(e.target.value)}
                    placeholder="Digite aqui"
                />
                <button type="submit">Pesquisar</button>
            </Form>
            {inputError && <Error>{inputError}</Error>}

            <Repositories>
                {repositories.map(repository => (
                    <Link
                        key={repository.full_name}
                        to={`/repositories/${repository.full_name}`}
                    >
                        <img
                            src={repository.owner.avatar_url}
                            alt={repository.owner.login}
                        />
                        <div>
                            <strong>{repository.full_name}</strong>
                            <p>{repository.description}</p>
                        </div>

                        <FiChevronRight size={20} />
                    </Link>
                ))}
            </Repositories>
        </>
    );
};

export default Dashboard;
