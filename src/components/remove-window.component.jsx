import React from 'react';
import styled from 'styled-components';
import ModalWindow from './modal-window.component';

const RemoveWindow = ({ itemName }) => {
    return (
        <ModalWindow name="Remove item?" confirmColor={({ theme }) => theme.red_color}>
            <ItemName>{itemName}</ItemName>
        </ModalWindow>
    );
};

const ItemName = styled.div`
    font-size: 1.5rem;
    margin: 10px;
    text-align: center;
`;

export default RemoveWindow;