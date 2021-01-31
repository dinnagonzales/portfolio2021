import React from 'react';
import styled from 'styled-components';
import Expenses from './expenses';

import { Section } from '../../styles/common';

export default function Category(props) {
    const {
        finePrint,
        updateCategory,
        updateValue,
        data,
    } = props;

    const {
        category,
        sum,
        budget,
        expenses
    } = data;

    const status = budget >= sum ? 'good' : 'bad';

    return (
        <CategoryContainer>
            <h3>{ category }</h3>
            <div className={ 'budget' }> {/* Percent / $ */}
                <div /> 
                <input placeholder={ '$' } value={ budget } readOnly/>
            </div>
            <div className={ 'expenses' }> {/* Expenses / cost */}
                { expenses.map( (e, index) => {
                    const { label, value } = e;

                    return <Expenses key={ `${index}-percent` }
                            label={ label }
                            value={ value }
                            index={ index }
                            updateCategory={ (index, label) => { updateCategory(index, label) } }
                            updateValue={ (index, value) => { updateValue(index, value) } } />;
                }) }     
            </div>
            <div className={ 'totals'}> {/* Label / Total */}
                <div>Sum</div>
                <div className={ 'amount' }>$ { sum }</div>
            </div>
            <div className={ 'totals'}> {/* Label / Total */}
                <div>Left to budget</div>
                <div className={ `${status} amount` }>$ { budget - sum }</div>
            </div>
  
            <div className={ 'finePrint'}>
                { finePrint }
            </div>
        </CategoryContainer>
    );
}

const CategoryContainer = styled(Section).attrs({
    className: 'CategoryContainer'
})`
    font-size: 16px;

    .budget{
        display: grid;
        gap: 1rem;
        grid-template-columns: repeat(2, minmax(100px, 1fr));
        justify-content: end;
        & > * {
            margin: 1rem 0;
        }
        input{
            display: inline-block;
        }
    }

    .expenses{
        margin: 30px 0;
        
        & > div{
            display: grid;
            margin: 10px 0;
            grid-template-columns: repeat(2, minmax(100px, 1fr));
            gap: 1rem;
            height: 30px;
        }
    }

    .totals{
        text-align: left;

        display: grid;
        grid-template-columns: repeat(2, minmax(100px, 1fr));

        .good{
            color: green;
        }
        .bad{
            color: red;
        }
        .amount{
            padding-left: 10px;
        }
    }

    .finePrint{
        font-size: 12px;
        margin: 45px 0 0;
    }
`;