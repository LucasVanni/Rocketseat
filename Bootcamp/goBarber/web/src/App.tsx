import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Rotes from './routes';
import GlobalStyle from './styles/global';

const App: React.FC = () => (
    <>
        <BrowserRouter>
            <Rotes />
        </BrowserRouter>
        <GlobalStyle />
    </>
);
export default App;
