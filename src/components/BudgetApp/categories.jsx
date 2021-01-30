import React, { useContext, useReducer } from 'react';
import styled from 'styled-components';

import Category from './category.jsx';
import BudgetReducer, { Context } from './store';

export default function Categories() {
    const { dispatch } = useContext(Context);

    const updateCategory = (data, categoryIndex) => {
		dispatch({
			type: "UPDATE_CATEGORY_NAME",
		    categoryIndex,
            expenseIndex: data.index,
            label: data.label,
		});
    };

    const updateValue = (data, categoryIndex) => {
		dispatch({
			type: "UPDATE_CATEGORY_VALUE",
            categoryIndex,
            expenseIndex: data.index,
            value: data.value,
		});
    };

    return (
        <Context.Consumer>
            { ({state}) => {
                return(
                    <>
                        <CategoriesContainer>
                            { state.categories.map( (c, i) => (
                                <Category 
                                    key={ `${i}-category` }
                                    categoryIndex={ i }
                                    updateCategory={ (data) => updateCategory(data, i) }
                                    updateValue={ (data) => updateValue(data, i) }
                                    data={ c }
                                    finePrint={ state.finePrint[i] } />    
                            ))}    
                        </CategoriesContainer>
                    </>
                );
            }
}
        </Context.Consumer>
    );
}

const CategoriesContainer = styled.div.attrs({
    className: 'CategoriesContainer'
})`
    padding: 20px;
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
`;
