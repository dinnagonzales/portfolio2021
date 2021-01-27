import styled from 'styled-components';

export default function Category(props) {
    const {
        updateCategory,
        updateValue,
        data,
    } = props;

    const {
        category,
        percent,
        budget,
        expenses
    } = data;

    return (
        <CategoryContainer>
            <h3>{ category }</h3>
            <div className={ 'budget' }> {/* Percent / $ */}
                <div /> 
                <input placeholder={ '$' } value={ budget } readOnly/>
            </div>
            <div className={ 'expenses' }> {/* Expenses / cost */}
                { expenses.map( (e, index) => {
                    const { label, value } = e;

                    return(
                        <div key={ `${index}-percent` }>
                            <input placeholder={ 'type' } value={ label || '' } onChange={ (e) => { updateCategory({ index, label: e.target.value }) } }/>
                            <input placeholder={ '$' } value={ value || '' } onChange={ (e) => { updateValue({ index, value: e.target.value }) } }/>
                        </div>
                    );
                }) }     
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
        justify-content: end;
        & > * {
            margin: 1rem 0;
        }
        input{
            display: inline-block;
        }
    }
    .expenses{
        margin: 30px 0;
        
        & > div{
            display: grid;
            margin: 10px 0;
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

