import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Rotes from './routes';

import GlobalStyle from './styles/global';

import AppProvider from './hooks';

const App: React.FC = () => (
    <Router>
        <AppProvider>
            <Rotes />
        </AppProvider>

        <GlobalStyle />
    </Router>
);
export default App;
