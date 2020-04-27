import React from 'react';
import styled from 'styled-components';
import Item from './item.component';



const ItemsBox = () => {

    const list = ["Item 1", "Item 2", "Item 3"];

    return (
        <Container>
            {list.map(item => (<Item>{item}</Item>))}
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    margin-bottom: 10px;
    min-width: 200px;
    min-height: 300px;
    border: 1px solid ${({ theme }) => theme.pale_blue_color};
    border-radius: 5px;
    -webkit-box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.75);
    -moz-box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.75);
    box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.75);
`;

export default ItemsBox;