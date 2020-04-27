import React from 'react';
import styled from 'styled-components';

const Header = () => {
    return (
        <Container>
            <TitleWrapper>
                <Title>My web app</Title>
            </TitleWrapper>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    text-align: center;
    height: 80px;
    display: fles;
    justify-content: center;
    align-items: center;
    border-bottom: 2px solid black;
`;

const Title = styled.div`
    color: #1e1e1e;
    font-size: 2rem;
`;

const TitleWrapper = styled.div``;

export default Header;