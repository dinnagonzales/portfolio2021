import styled from 'styled-components';

import Category from './category.jsx';

export default function Categories(props) {
    return (
        <>
            <h2>Categories</h2>
            <CategoriesContainer>
                <Category />
                <Category />
                <Category />    
            </CategoriesContainer>
        </>
    );
}

const CategoriesContainer = styled.div.attrs({
    className: 'CategoriesContainer'
})`
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
`;

