import React from 'react';
import styled from 'styled-components';
import ModalWindow from './modal-window.component';

const NewItemWindow = () => {
    return (
        <ModalWindow name="New item" confirmColor={({ theme }) => theme.green_color}>
            <NameInput type="text" />
        </ModalWindow>
    );
};

const NameInput = styled.input`
    margin: 0 10px 10px 10px;
    border-radius: 3px;
    border: 1px solid ${({ theme }) => theme.pale_blue_color};
`;

export default NewItemWindow;

