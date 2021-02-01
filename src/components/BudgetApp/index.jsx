
import React, { useReducer } from 'react';
import styled from 'styled-components';
import IncomeSection from './income.jsx';
import Categories from './categories.jsx';
import initialState from './static_data.js';
import BudgetReducer, { Context } from './store';
import media from '../../styles/media';
import { theme } from '../../styles/default';
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

	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 15px;
	a{
		color: ${ theme.link };
	}

	& > * {
		${media.small`
			grid-column-start: 1;
			grid-column-end: 3;
    	`};
	}
`;