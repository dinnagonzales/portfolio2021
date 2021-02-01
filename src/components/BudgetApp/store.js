import { createContext } from 'react';
import _ from 'lodash';
import initialState, { categories, expenses, expense } from './static_data.js';

const Context = createContext(null);

const BudgetReducer = (state, action) => {
    switch(action.type) {
        case 'UPDATE_TAKE_HOME':{
            const takeHome = action.value;
            const categories = _.cloneDeep(state.categories).map( c =>{
                const budget = takeHome * c.percent;
                return {
                    ...c,
                    budget,
                }
            });

            return {
                ...state,
                takeHome,
                categories,
            }
        }

        case 'UPDATE_CATEGORY_NAME':{
            let {
                categoryIndex,
                expenseIndex,
                label,
            } = action;

            let categories = _.cloneDeep(state.categories);
            categories[categoryIndex]['expenses'][expenseIndex] = {
                ...categories[categoryIndex]['expenses'][expenseIndex],
                label,
            };

            return {
                ...state,
                categories,
            }
        }

        case 'UPDATE_CATEGORY_VALUE':{
            let {
                categoryIndex,
                expenseIndex,
                value,
            } = action;
            
            let categories = _.cloneDeep(state.categories);
            categories[categoryIndex]['expenses'][expenseIndex] = {
                ...categories[categoryIndex]['expenses'][expenseIndex],
                value,
            };
            
            categories[categoryIndex]['sum'] = categories[categoryIndex]['expenses'].reduce((sum, e) =>{
                return sum += Number(e.value);
            }, 0)

            return {
                ...state,
                categories,
            }
        }

        case 'ADD_EXPENSE':{
            let {
                categoryIndex,
            } = action;

            let categories = _.cloneDeep(state.categories);
            categories[categoryIndex]['expenses'] = [ ...categories[categoryIndex]['expenses'], expense ];

            return {
                ...state,
                categories,
            }
        }

        case 'REMOVE_EXPENSE':{
            let {
                categoryIndex,
            } = action;

            let categories = _.cloneDeep(state.categories);
            categories[categoryIndex]['expenses'].pop();

            return {
                ...state,
                categories,
            }
        }

        case 'CLEAR_ALL':{
            const takeHome = 0;
            const clearCategories = _.cloneDeep(state.categories).map( (c, i) =>{

                return {
                    ...c,
                    budget: 0,
                    sum: 0,
                    expenses: [...expenses],
                }
            });

            return {
                ...state,
                takeHome,
                categories: clearCategories,
            }
        }

        case 'SAVE':{
            window.localStorage.setItem('budget', JSON.stringify(state));

            return {
                ...state
            }
        }
        default:
            return initialState;
    };
};

export { BudgetReducer as default, Context };