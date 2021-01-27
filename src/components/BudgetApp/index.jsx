
import React, { createContext, useReducer } from 'react';
import styled from 'styled-components';

import Categories from './categories.jsx';
import initialState from './static_data.js';
import reducer, { Provider } from './store';

export default function BudgetApp() {
	const [state, dispatch] = useReducer(reducer, initialState);
	const updateTakeHome = (e) => {
		const value = e.target.value;
		dispatch({
			type: "UPDATE_TAKE_HOME",
			value,
		});
	};

	const totalBudgeted = state.categories.reduce((sum, c) =>{
		return sum += Number(c.sum);
	}, 0);

	const diff = state.takeHome - totalBudgeted >= 0 ? 'good' : 'bad';

	return (
		<Provider value={{ state, dispatch }}>
			<BudgetAppContainer>
				<h1>
					BudgetApp
				</h1>
				<div className={ 'grid' }>
					<div>Take Home Money:</div>
					<div><input value={ state.takeHome } onChange={ updateTakeHome }/></div>
					<div>Total Budgetted:</div>
					<div>{ totalBudgeted }</div>
					<div className={ diff }>Left to budget:</div>
					<div>{ state.takeHome - totalBudgeted }</div>
				</div>


				<Categories dispatch={ dispatch }/>
			</BudgetAppContainer>
		</Provider>
	);
}

const BudgetAppContainer = styled.div.attrs({
	className: 'BudgetAppContainer'
})`
	font-size: 16px;
	border: 1px solid purple;
	text-align: center;
	max-width: 1000px;
	margin: 50px auto;
	padding: 25px;

	.grid{
		margin: 0 auto;
		text-align: right;
		width: 350px;
		display: grid;
		gap: 10px;
        grid-template-columns: repeat(2, minmax(100px, 1fr));

        .good{
            color: green;
        }
        .bad{
            color: red;
		}

		input{
			text-align: right;
		}
    }
`;