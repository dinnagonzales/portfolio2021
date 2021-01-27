import styled from 'styled-components';

import Category from './category.jsx';

export default function Categories(props) {
    return (
        <CategoriesContainer>
            Categories
            <Category />
            <Category />
            <Category />

        </CategoriesContainer>
    );
}

const CategoriesContainer = styled.div.attrs({
    className: 'CategoriesContainer'
})`
        
`;

