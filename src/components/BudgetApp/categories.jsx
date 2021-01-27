import styled from 'styled-components';

import Category from './category.jsx';
import { Store } from './store';

export default function Categories({ dispatch }) {
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
        <Store.Consumer>
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
        </Store.Consumer>
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
