import React from 'react';
import styled from 'styled-components';

import ItemsBox from './itemsbox.component';
import RemoveWindow from './remove-window.component';
import RenameWindow from './rename-window.component';
import NewItemWindow from '././new-item-window.component';
import Pagination from './pagination.component';

const Home = (props) => {
    return (
        <Container>
            <ListItem>
                <Title>Home page</Title>
                <NewItemButton>New item</NewItemButton>
                <ItemsBox></ItemsBox>
                <Pagination/>
            </ListItem>
            <ItemPresentation>
                <RemoveWindow itemName="item 1"/>
                <RenameWindow itemName="item 1"/>
                <NewItemWindow/>
            </ItemPresentation>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    width: 100%;
    padding: 10px;
`;

const ListItem = styled.div``;
const ItemPresentation = styled.div``;

const Title = styled.div``;

const NewItemButton = styled.button`
    color: ${({theme}) => theme.pale_blue_color};
    border-radius: 5px;
    font-size: 1.2rem;
    padding: 10px;
    margin-bottom: 10px;
    text-align: center;
    border: 1px solid ${({theme}) => theme.pale_blue_color};

    -webkit-box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.75);
    -moz-box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.75);
    box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.75);

    &:hover {
        cursor: pointer;
        background-color: ${({theme}) => theme.pale_blue_color};
        color: white;
    }
`;

export default Home;