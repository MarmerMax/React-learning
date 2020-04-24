import React from 'react';
import styled from 'styled-components';

import Button from './components/Button';
import ThemeSelector from './components/ThemeSelector';

const MainWrapper = styled.div`
    margin: 0 auto;
    width: 100%;
    max-width: 1200px;
`;

const App = () => {
    return (
        <MainWrapper>
            <Button primary>Click me!</Button>
            <Button>Click me!</Button>
            <ThemeSelector/>
        </MainWrapper>
    );
};

export default App;