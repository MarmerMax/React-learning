import React from 'react';
import styled from 'styled-components';

const ModalWindow = ({ name, children, confirmColor }) => {

    console.log(confirmColor)
    return (
        <Container>
            <Title>{name}</Title>
            {children}
            <DesicionSection>
                <CancelButton>No</CancelButton>
                <ConfirmButton color={confirmColor}>Yes</ConfirmButton>
            </DesicionSection>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: 5px;
    width: 200px;
    border: 1px solid ${({ theme }) => theme.gray_color};
    -webkit-box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.75);
    -moz-box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.75);
    box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.75);
    color: #1e1e1e;
`;

const Title = styled.div`
    text-align: center;
    padding: 10px;
    font-size: 1.1rem;
`;

const DesicionSection = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-bottom: 10px;
`;

const CancelButton = styled.button`
    width: 70px;
    font-size: 1.2rem;
    border: 1px solid ${({ theme }) => theme.pale_blue_color};
    border-radius: 3px;
    text-align: center;
    outline: none;

    &:hover {
        cursor: pointer;
        background-color: ${({ theme }) => theme.pale_blue_color};
        color: ${({ theme }) => theme.light_blue_color};
    }
`;

const ConfirmButton = styled(CancelButton)`
    &:hover {
        background-color: ${({ color }) => color};
    }
`;


export default ModalWindow;

