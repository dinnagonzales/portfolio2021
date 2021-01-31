
import React, { useReducer } from 'react';
import styled from 'styled-components';
import IncomeSection from './income.jsx';
import Categories from './categories.jsx';
import initialState from './static_data.js';
import BudgetReducer, { Context } from './store';

import Footer from './footer';

export default function BudgetApp() {
	const [state, dispatch] = useReducer(BudgetReducer, initialState);

	return (
		<Context.Provider value={{ state, dispatch }}>
			<BudgetAppContainer>
				<IncomeSection />
				<Categories />
			</BudgetAppContainer>
			<Footer />
		</Context.Provider>
	);
}

const BudgetAppContainer = styled.main.attrs({
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

	// .disclaimer{
	// 	margin: 15px auto;
	// 	p{
	// 		font-size: 12px;
	// 		margin: 10px 0;
	// 	}
	// }
`;