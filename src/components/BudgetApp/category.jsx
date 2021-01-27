import styled from 'styled-components';

export default function Category(props) {
    return (
        <CategoryContainer>
            CategoryContainer
            <div className={ 'budget' }> {/* Percent / $ */}
                <div>50%</div>
                <div>$2,000</div>
            </div>
            <div className={ 'expenses' }> {/* Expenses / cost */}
                
                <div>
                    <input type={ 'text' } placeholder={ 'type' } />
                    <input type={ 'number' } placeholder={ '$' } />
                </div>                
            </div>

            <div className={ 'totals'}> {/* Label / Total */}
                <div>Over/Under/Just Rights</div>
                <div>$2,000</div>
            </div>
           
        </CategoryContainer>
    );
}

const CategoryContainer = styled.div.attrs({
    className: 'CategoryContainer'
})`
    border: 2px solid lightgrey;
    border-radius: 4px;
    padding: 1rem;
    .budget{
        display: grid;
        gap: 1rem;
        grid-template-columns: repeat(2, minmax(100px, 1fr));
        & > div{
            border: 1px solid orange;
            margin: 1rem 0;
        }
    }
    .expenses{
        margin: 30px 0;
        
        & > div{
            display: grid;
            grid-template-columns: repeat(2, minmax(100px, 1fr));
            gap: 1rem;
            height: 30px;
        }
    }
    .totals{
        display: grid;
        grid-template-columns: repeat(2, minmax(100px, 1fr));

    }
`;

