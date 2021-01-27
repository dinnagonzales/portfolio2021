import { createContext } from 'react';
import initialState from './static_data.js';

const Store = createContext(initialState);
const { Provider, Consumer } = Store;

const reducer = (state, action) => {
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

            return {
                ...state,
                categories,
            }
        }
        default:
            throw new Error();
    };
};

export { reducer as default, Provider, Store };