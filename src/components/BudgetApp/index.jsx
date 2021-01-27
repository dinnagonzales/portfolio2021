
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
	return (
		<Provider value={{ state, dispatch }}>
			<BudgetAppContainer>
				<h1>
					BudgetApp
				</h1>
				<label>
					Take Home Money:
					<input type="number" value={ state.takeHome } onChange={ updateTakeHome } />
				</label>
				
				<Categories dispatch={ dispatch }/>
			</BudgetAppContainer>
		</Provider>
	);
}

const BudgetAppContainer = styled.div.attrs({
	className: 'BudgetAppContainer'
})`
	border: 1px solid purple;
	text-align: center;
	max-width: 1000px;
	margin: 50px auto;
	padding: 25px;
`;