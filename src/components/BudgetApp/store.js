import { createContext } from 'react';
import initialState, { categories, expenses } from './static_data.js';

const Context = createContext(null);

const BudgetReducer = (state, action) => {
    switch(action.type) {
        case 'UPDATE_TAKE_HOME':{
            const takeHome = action.value;
            const categories = [...state.categories].map( c =>{
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

            let categories = [...state.categories];
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

            let categories = [...state.categories];
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
        case 'CLEAR_ALL':{
            const clearCategories = [ ...categories ].map( (c, i) =>{
                const budget = state.takeHome * c.percent;

                return {
                    ...c,
                    budget,
                    expenses: [...expenses],
                }
            });

            return {
                ...state,
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