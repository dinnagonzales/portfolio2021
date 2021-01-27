
import React, { useReducer } from 'react';
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

	const clearAll = () => {
		dispatch({
            type: "CLEAR_ALL",
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
				The 50/30/20 Budget Guide
				</h1>
				<div className={ 'grid' }>
					<div>Take Home Money:</div>
					<div><input value={ state.takeHome } onChange={ updateTakeHome }/></div>
					<div>Total Budgetted:</div>
					<div>{ totalBudgeted }</div>
					<div className={ diff }>Left to budget:</div>
					<div>{ state.takeHome - totalBudgeted }</div>
				</div>
				<button onClick={ clearAll }>Clear All Expenses</button>
    
				<Categories dispatch={ dispatch }/>
				<div className={ 'disclaimer' }>Guideline from &nbsp; 
					<a target={ '_blank' } href={ 'https://www.amazon.com/All-Your-Worth-Ultimate-Lifetime/dp/0743269888' }>
						All Your Worth: The Ultimate Lifetime Money Plan 
					</a>
					<p>Created by: Dinna Gonzales</p>
					<p>Contact: <a href={'mailto:dinnagonzales.05@gmail.com'}>
							Email
						</a>
					</p>
				</div>
			</BudgetAppContainer>
		</Provider>
	);
}

const BudgetAppContainer = styled.div.attrs({
	className: 'BudgetAppContainer'
})`
	font-size: 16px;
	text-align: center;
	max-width: 1000px;
	margin: 0 auto;
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
			border: 1px solid purple;
			border-radius: 4px;
			height: 20px;
		}
	}

	button{
		margin: 20px 0;
	}

	.disclaimer{
		margin: 15px auto;
		p{
			font-size: 12px;
			margin: 10px 0;
		}
	}
`;