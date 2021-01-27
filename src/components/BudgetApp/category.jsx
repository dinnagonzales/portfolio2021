import styled from 'styled-components';

export default function Category(props) {
    return (
        <CategoryContainer>
            CategoryContainer
            <div> {/* Percent / $ */}
                <div>50%</div>
                <div>$2,000</div>
            </div>
            <div> {/* Expenses / cost */}
                <div>
                    {/* Input for expense / cost */}
                </div>
                <div>
                    {/* Input for expense / cost */}
                </div>
                <div>
                    {/* Input for expense / cost */}
                </div>
                
            </div>

            <div> {/* Label / Total */}

            </div>
           
        </CategoryContainer>
    );
}

const CategoryContainer = styled.div.attrs({
    className: 'CategoryContainer'
})`
    div{
        height: 24px;
        border: 1px solid lightgrey;
        margin: 5px;
    }  
`;

