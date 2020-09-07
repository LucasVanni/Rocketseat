import React from 'react';
import {
    Route as ReactDOMRoute,
    RouteProps as ReactDOMRouteProps,
    Redirect,
} from 'react-router-dom';

import { useAuth } from '../hooks/auth';

interface RouteProps extends ReactDOMRouteProps {
    isPrivate?: boolean;
    component: React.ComponentType;
}

// Rota privada, Autenticado
// true, true = ok
// true, false = Redirecionar para o Login
// false, true = Redirecionar para o Dashboard
// false, false = ok

const Route: React.FC<RouteProps> = ({
    isPrivate = false,
    component: Component,
    ...rest
}) => {
    const { user } = useAuth();

    const isSigned = !!user;

    return (
        <ReactDOMRoute
            {...rest}
            render={({ location }) => {
                return isPrivate === isSigned ? (
                    <Component />
                ) : (
                    <Redirect
                        to={{
                            state: { from: location },
                            pathname: isPrivate ? '/' : '/dashboard',
                        }}
                    />
                );
            }}
        />
    );
};

export default Route;
