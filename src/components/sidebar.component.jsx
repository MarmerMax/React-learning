import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LinksList = styled.ul`
    padding: 0;
    list-style: none;
`;

const LinkItem = styled.li`
    color: white;
    margin: 10px;
`;

const StyledLink = styled(Link)`
    color: white;
    text-decoration: none;
`;

const SideBar = () => {
    return (
        <LinksList>
            <LinkItem>
                <StyledLink to="/">Home</StyledLink>
            </LinkItem>
            <LinkItem>
                <StyledLink to="/shop">Shop</StyledLink>
            </LinkItem>
            <LinkItem>
                <StyledLink to="/about">About</StyledLink>
            </LinkItem>
        </LinksList>
    );
}

export default SideBar;