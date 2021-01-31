import React, { useContext } from 'react';
import { Context }  from './store';

import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import img from '../../images/income-bg.png';

import { Section } from '../../styles/common';
import media from '../../styles/media';

export default function Income() {
    const { state, dispatch } = useContext(Context);

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
        <IncomeContainer>
			<div className={ 'background' }></div>
			<div>
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
				<Button variant={ 'contained' } onClick={ clearAll }>Clear</Button>
			</div>
		</IncomeContainer>
	);
}

const IncomeContainer = styled(Section).attrs({
	className: 'IncomeContainer'
})`
	display: grid;
	grid-template-columns: 1fr 1fr;

	${media.small`
		grid-template-columns: 1fr;
	`};

	.background{
		background-image: url(${img});
		background-size: auto 100%;
		background-position: bottom left;
		background-repeat: no-repeat;
	}
`;