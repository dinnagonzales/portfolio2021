import React, { useContext } from 'react';
import { Context }  from './store';
import styled from 'styled-components';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


import Tooltip from '@material-ui/core/Tooltip';
import ProgressBar from '../common/progress_bar';
import { colors } from '../../styles/default';
import FAQ from './faq';

import { Section } from '../../styles/common';


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

	const save = () => {
		dispatch({
            type: "SAVE",
        });
	};

	const loadTemplate = () => {
		dispatch({
            type: "LOAD_TEMPLATE",
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
		<>
			<FAQ list={ state.faq } />
			<IncomeContainer>
				<h2>Free Budget Calculator</h2>
				<span className={ 'intro' }>
					Welcome! 
					Start here: input your monthly after-tax income see how you should
					split your spending according to the 50/30/20 Budgeting rule.
				</span>
				<div className={ 'NumbersContainer' }>
					<TextField InputLabelProps={{
							shrink: true,
						}}
						id={ `take_home_money` }
						label={ 'Take Home Income' }
						value={ state.takeHome || '' }
						onChange={ updateTakeHome } />

					<TableContainer component={Paper}>
						<Table aria-label="simple table">
							{/* state.categories.map((c, i) => {
								const { type, category, budget, color } = c;
								return(
									<TableRow key={ `${i}_${type} `}>	
										<TableCell align="left" style={{ color: color }}>{ category }</TableCell>
										<TableCell align="left">{ budget }</TableCell>
									</TableRow>
								)
							}) */}
							<TableBody>
								<TableRow>
									<TableCell align="left">Total Budgeted:</TableCell>
									<TableCell align="left">{totalBudgeted}</TableCell>
								</TableRow>
							</TableBody>
							<TableBody>
								<TableRow>	
									<TableCell align="left">To Budget:</TableCell>
									<TableCell align="left">{leftToBudget}</TableCell>
								</TableRow>
							</TableBody>
						</Table>
					</TableContainer>

					<Button variant={ 'contained' } onClick={ clearAll }>Clear All</Button>
					<Button variant={ 'contained' } onClick={ loadTemplate }>Load Template</Button>
					<Button style={{ backgroundColor: 'orange', color: 'white' }} variant={ 'contained' } onClick={ save }>Save</Button>
				</div>
			</IncomeContainer>
		</>
	);
}

const IncomeContainer = styled(Section).attrs({
	className: 'IncomeContainer'
})`
	min-height: 300px;
	text-align: right;
	.intro{
		text-align: left;
		width: 100%;
		display: block;
		padding: 10px 0;
		font-size: 12px;
	}
	h2{
		text-align: center;
	}

	.fifty{
		color: ${colors.mojo};
	}
	.thirty{
		color: ${colors.goldenBell};
	}
	.twenty{
		color: ${colors.cornflowerBlue};
	}

	img{
        height: auto;
        width: 100%;
        max-width: 100%;
        margin-top: 15px;
        display: block;
    }

	.NumbersContainer{
		text-align: right;
		padding: 15px;

		.MuiTableContainer-root{
			margin-top: 30px;
		}

		button{
			margin-top: 30px;
			margin-right: 15px;
		}
	}


`;