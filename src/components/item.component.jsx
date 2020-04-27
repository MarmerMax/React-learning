import React from 'react';
import styled from 'styled-components';

const Item = ({ children }) => {
    return (
        <Container>
            <ItemName>{children}</ItemName>
            <ManageItem>
                <RenameItemButton>rename</RenameItemButton>
                <RemoveItemButton>remove</RemoveItemButton>
            </ManageItem>
        </Container>
    );
}

const Container = styled.div`
    padding: 5px 0;
    margin: 5px 0 5px 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid ${({ theme }) => theme.pale_blue_color};
`;

const ItemName = styled.div`
    color: ${({ theme }) => theme.pale_blue_color};
    &:hover {
        cursor: pointer;
    }
`;

const ManageItem = styled.div`
    display: flex;
    flex-direction: row;
`;

const RenameItemButton = styled.div`

    background-color: ${({ theme }) => theme.gray_color};
    border: none;
    border-radius: 3px;
    color: white;

    &:hover {
        cursor: pointer;
    }
`;

const RemoveItemButton = styled(RenameItemButton)`
    background-color: ${({ theme }) => theme.red_color};
    margin-left: 5px;
`;

export default Item;