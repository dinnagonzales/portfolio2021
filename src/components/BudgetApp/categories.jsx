import { useContext } from 'react';
import styled from 'styled-components';

import Category from './category.jsx';
import { Store } from './store';

export default function Categories({ dispatch }) {
    const updateCategory = (categoryIndex, data) => {
		dispatch({
			type: "UPDATE_CATEGORY_NAME",
		    categoryIndex,
            expenseIndex: data.index,
            label: data.label,
		});
    };

    const updateValue = (categoryIndex, data) => {
		dispatch({
			type: "UPDATE_CATEGORY_VALUE",
            categoryIndex,
            expenseIndex: data.index,
            value: data.value,
		});
    };

    return (
        <Store.Consumer>
            { ({state}) => {
                return(
                    <>
                        <h2>Categories</h2>
                        <CategoriesContainer>
                            { state.categories.map( (c, i) => (
                                <Category 
                                    key={ `${i}-category` }
                                    categoryIndex={ i }
                                    updateCategory={ (data) => updateCategory(i, data) }
                                    updateValue={ (data) => updateValue(i, data) }
                                    data={ c } />    
                            ))}    
                        </CategoriesContainer>
                    
                    </>
                );
            }
}
        </Store.Consumer>
    );
}

const CategoriesContainer = styled.div.attrs({
    className: 'CategoriesContainer'
})`
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
`;

