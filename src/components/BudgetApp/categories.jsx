import React, { useContext } from 'react';
import styled from 'styled-components';

import Category from './category.jsx';
import { Context } from './store';
import media from '../../styles/media';
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
                                    data={ c } />    
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
    padding: 20px 0;
    
    grid-column-start: 1;
    grid-column-end: 3;

    display: grid;
    gap: 1rem;
    grid-template-columns: 1fr;
    ${media.mediumUp`
        grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    `};
`;
