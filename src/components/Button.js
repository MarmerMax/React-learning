import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    padding: 1rem, 1.5rem;
    font-size: 1.8rem;
    color: white;
    background-color: #1e1e1e;
    margin: 10px;
    outline: none;
    border: none;
`;

const Button = ({ primary, children }) => {
    return (
        <StyledButton primary={primary}>{children}</StyledButton>
    );
}

export default Button;