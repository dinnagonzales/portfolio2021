import React, { useContext } from 'react';
import styled from 'styled-components';
import Expenses from './expense';
import { Context } from './store';
import CircularProgressWithLabel from '../common/CircularProgressWIthLabel';
import { formatDollarAmount } from '../../utils';
import { Section } from '../../styles/common';
import { colors, theme } from '../../styles/default';

export default function Category(props) {
    const { dispatch } = useContext(Context);
    const {
        categoryIndex,
        updateCategory,
        updateValue,
        data,
    } = props;

    const {
        category,
        type,
        color,
        sum,
        budget,
        expenses
    } = data;

    const status = budget >= sum ? 'good' : 'bad';
    const formattedBudget = formatDollarAmount(budget);
    const progress = Math.min(budget, Math.round((sum * 100)/budget));    
    const leftToBudget = formatDollarAmount(budget - sum);
    const total = formatDollarAmount(sum);

    const addExpense = () => {
		dispatch({
            type: "ADD_EXPENSE",
            categoryIndex,
        });
	};

	const removeExpense = () => {
		dispatch({
            type: "REMOVE_EXPENSE",
            categoryIndex,
        });
    };
    
    const disableAdd = expenses.length >= 15;
    const disableRemove = expenses.length <= 3;

    return (
        <CategoryContainer>

            <SummarySection color={ colors[color] }>
                <div>
                    <h3>{ category }</h3>
                    <span>Budget: { formattedBudget }</span>
                </div>       
                <div>
                    <CircularProgressWithLabel value={ progress }/>
                </div>   
            </SummarySection>

            <div className={ 'expenses-container' }> {/* Expenses / cost */}
                { expenses.map( (e, index) => {
                    const { label, value } = e;

                    return <Expenses key={ `${index}-percent` }
                            type={ type }
                            label={ label }
                            value={ value }
                            index={ index }
                            updateCategory={ (index, label) => { updateCategory(index, label) } }
                            updateValue={ (index, value) => { updateValue(index, value) } } />;
                }) }

                <button disabled={ disableAdd } onClick={ addExpense }>add</button>
                <button disabled={ disableRemove } onClick={ removeExpense }>remove</button>

                <div className={ 'total-container' }>
                    <div className={ status }>{ status === 'good' ? 'To' : 'Over' } Budget:</div>
                    <div>{ leftToBudget }</div>
                </div> 
            </div>

        </CategoryContainer>
    );
}

const CategoryContainer = styled(Section).attrs({
    className: 'CategoryContainer'
})`
    font-size: 16px;

    .expenses-container{
        margin: 30px 0;
    }

    .total-container{
        font-weight: bold;
        font-size: 20px;
        margin: 30px 0 10px 0;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
        text-align: left;

        .bad{
            color: ${theme.error};
        }
    }
`;

const SummarySection = styled.div.attrs({
    className: 'SummarySection'
})`
    margin-bottom: 0;
    display: grid;
    gap: 1rem;
    grid-template-columns: 1fr 50px;
    padding: 15px 0 0;

    h3{
        color: ${ ({ color }) => color ? color : colors.abbey };
        margin: 10px 0;
        text-align: left;
        font-size: 30px;
        line-height: 20px;
    }

    span{
        font-weight: bold;
        display: block;
        text-align: left;
    }
`;