import React, { useContext } from 'react';
import { Context }  from './store';
import styled from 'styled-components';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ProgressBar from '../common/progress_bar';

import img from '../../images/income-bg.png';

import { Section } from '../../styles/common';
import media from '../../styles/media';
import { formatDollarAmount } from '../../utils';

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
		
	const totalBudget = state.categories.reduce((sum, c) =>{
		return sum += Number(c.sum);
	}, 0);

	const { takeHome } = state;
	const diff = takeHome - totalBudget >= 0 ? 'good' : 'bad';

	const totalBudgeted = formatDollarAmount(totalBudget);
	const leftToBudget = formatDollarAmount(takeHome - totalBudget);
	const progress = Math.min(takeHome, Math.round((totalBudget * 100)/takeHome));

	return (
        <IncomeContainer>
			<div className={ 'background' }></div>

			<div className={ 'NumbersContainer' }>
				<div>
					<TextField id="outlined-basic" label="Income" variant="outlined" value={ state.takeHome } onChange={ updateTakeHome } />
				</div>

				<ProgressBar value={ progress } min={ '0%' } max={ '100%' } />

				<div className={ 'numbers' }>
					<span>Current Total:</span>
					<span>{ totalBudgeted }</span>
				</div>
				<div className={ `numbers ${diff}` }>
					<span>Left to budget:</span>
					<span>{ leftToBudget }</span>
				</div>

				<Button variant={ 'contained' } onClick={ clearAll }>Clear</Button>
			</div>
		</IncomeContainer>
	);
}

const IncomeContainer = styled(Section).attrs({
	className: 'IncomeContainer'
})`
	min-height: 300px;
	padding-top: 50px;
	text-align: right;
	display: grid;
	grid-template-columns: 1fr 1fr;

	${media.small`
		grid-template-columns: 1fr;
	`};


	.NumbersContainer{
		text-align: right;
		padding: 0 15px 0 100px;
	}

	.numbers{
		display: grid;
		grid-template-columns: 1fr 1fr;
		text-align: left;
		margin: 15px 0;
	}

	.background{
		background-image: url(${img});
		background-size: 100% auto;
		background-position: bottom left;
		background-repeat: no-repeat;
	}
`;