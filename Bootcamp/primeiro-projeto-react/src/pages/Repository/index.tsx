import React, { useEffect, useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import { Header, RepoInfo, Issues } from './styles';

import Logo from '../../assets/logo.svg';
import api from '../../services/api';

interface RepoParams {
    repository_name: string;
}

interface Repository {
    full_name: string;
    description: string;
    stargazers_count: number;
    forks_count: number;
    open_issues_count: number;
    owner: {
        login: string;
        avatar_url: string;
    };
}

interface Issue {
    id: number;
    title: string;
    html_url: string;
    user: {
        login: string;
    };
}

const Repository: React.FC = () => {
    const {
        params: { repository_name },
    } = useRouteMatch<RepoParams>();

    const [repository, setRepository] = useState<Repository | null>(null);
    const [issues, setIssues] = useState<Issue[]>([]);

    useEffect(() => {
        api.get(`repos/${repository_name}`).then(({ data }) => {
            setRepository(data);
        });
        api.get(`repos/${repository_name}/issues`).then(({ data }) => {
            setIssues(data);
        });
    }, [repository_name]);

    return (
        <>
            <Header>
                <img src={Logo} alt="Logo" />
                <Link to="/">
                    <FiChevronLeft size={16} />
                    Voltar
                </Link>
            </Header>
            {repository && (
                <RepoInfo>
                    <header>
                        <img
                            src={repository.owner.avatar_url}
                            alt={repository.owner.login}
                        />
                        <div>
                            <strong>{repository.full_name}</strong>
                            <p>{repository.description}</p>
                        </div>
                    </header>
                    <ul>
                        <li>
                            <strong>{repository.stargazers_count}</strong>
                            <span>Stars</span>
                        </li>
                        <li>
                            <strong>{repository.forks_count}</strong>
                            <span>Forks</span>
                        </li>
                        <li>
                            <strong>{repository.open_issues_count}</strong>
                            <span>Issues abertas</span>
                        </li>
                    </ul>
                </RepoInfo>
            )}

            <Issues>
                {issues.map(issue => (
                    <Link key={issue.id} to={issue.html_url}>
                        <div>
                            <strong>{issue.title}</strong>
                            <p>{issue.user.login}</p>
                        </div>
                        <FiChevronRight size={20} />
                    </Link>
                ))}
            </Issues>
        </>
    );
};

export default Repository;
