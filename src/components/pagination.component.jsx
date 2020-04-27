import React from 'react';
import styled from 'styled-components';

const Pagination = () => {
    return (
        <Container>
            <SlidePageButton>Prev</SlidePageButton>
            <CurrentPage>1</CurrentPage>
            <SlidePageButton>Next</SlidePageButton>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
`;

const SlidePageButton = styled.button`
    width: 70px;
    font-size: 1.2rem;
    border: 1px solid ${({theme}) => theme.pale_blue_color};
    border-radius: 3px;
    text-align: center;
    outline: none;
    padding: 5px;

    &:hover {
        cursor: pointer;
        background-color: ${({ theme }) => theme.pale_blue_color};
        color: ${({ theme }) => theme.light_blue_color};
    }
`;

const CurrentPage = styled.div`
    width: 30px;
    border: 1px solid ${({ theme }) => theme.pale_blue_color};
    border-radius: 3px;
    text-align: center;
    outline: none;
    padding: 5px;
    font-size: 1.2rem;
`;

export default Pagination;