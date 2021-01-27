
import styled from 'styled-components';

import Categories from './categories.jsx';

export default function BudgetApp() {
	return (
		<BudgetAppContainer>
			<h1>
				BudgetApp
			</h1>
			<label>
				Take Home Money:
				<input type="number" />
			</label>
			
			<Categories />
		</BudgetAppContainer>
	);
}

const BudgetAppContainer = styled.div.attrs({
	className: 'BudgetAppContainer'
})`
	border: 1px solid purple;
	margin: 50px auto;
	padding: 25px;
`;