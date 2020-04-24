import React, { useState } from 'react';
import Switch from "react-switch";

import styled from 'styled-components';

const MainWrapper = styled.div`
    align-content: center;
    width: 100px;
    border: 1px solid #1e1e1e;
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    padding: 5px;
    align-items: center;
    justify-content: center;
`;

const Title = styled.div`
    color: #1e1e1e;
    font-size: 1rem;
`;

const CheckBox = styled.input`
    
`;

//<CheckBox type="checkbox"/>

// const [value, setValue] = useState("");
// const handleValueChange = e => {
//     setValue(e.target.value)
// }
//<CheckBox type="text" value={value} onChange={handleValueChange} />


const ThemeSelector = () => {
    const [on, setOn] = useState(false);


    const handleOnChange = () => setOn(state => !state);

    return (
        <MainWrapper>
            <Title>Dark theme</Title>
            <Switch
                onChange={handleOnChange}
                checked={on}
            />
        </MainWrapper>
    );
};

export default ThemeSelector;