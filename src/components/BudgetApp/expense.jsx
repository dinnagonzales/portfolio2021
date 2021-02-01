import React from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import media from '../../styles/media';

function Expenses(props) {
    const {
        type,
        index,
        label,
        value,
        updateCategory,
        updateValue,
    } = props;
    
    return (
        <ExpensesContainer>             
            <TextField InputLabelProps={{
                    shrink: true,
                }}
                id={ `${type}_${index}_label` }
                label={ 'Description' }
                value={ label || '' }
                onChange={ (e) => { updateCategory({ index, label: e.target.value }) } } />

            <TextField InputLabelProps={{
                    shrink: true,
                }}
                id={ `${type}_${index}_value` }
                label={ '$' }
                value={ value || '' }
                onChange={ (e) => { updateValue({ index, value: e.target.value }) } } />

        </ExpensesContainer>
    );
}

const ExpensesContainer = styled.div.attrs({
    className: 'ExpensesContainer'
})`
    display: grid;
    margin: 10px 0;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    height: 45px;
    ${media.mediumUp`
        grid-template-columns: repeat(2, minmax(100px, 1fr));
    `};
`;

export default React.memo(Expenses, (prev, props) => {
    return ( prev.label === props.label ) && ( prev.value === props.value );
});

