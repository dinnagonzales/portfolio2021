import React from 'react';
import styled from 'styled-components';

function Expenses(props) {
    const {
        index,
        label,
        value,
        updateCategory,
        updateValue,
    } = props;

    return (
        <ExpensesContainer>
            <input placeholder={ 'type' } value={ label || '' } onChange={ (e) => { updateCategory({ index, label: e.target.value }) } }/>
            <input placeholder={ '$' } value={ value || '' } onChange={ (e) => { updateValue({ index, value: e.target.value }) } }/>
        </ExpensesContainer>
    );
}

const ExpensesContainer = styled.div.attrs({
    className: 'ExpensesContainer'
})`
    
`;

export default React.memo(Expenses, (prev, props) => {
    return ( prev.label === props.label ) && ( prev.value === props.value );
});

