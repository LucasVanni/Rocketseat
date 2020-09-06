import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Rotes from './routes';
import GlobalStyle from './styles/global';

import { AuthProvider } from './hooks/AuthContext';

const App: React.FC = () => (
    <>
        <AuthProvider>
            <BrowserRouter>
                <Rotes />
            </BrowserRouter>
        </AuthProvider>

        <GlobalStyle />
    </>
);
export default App;
