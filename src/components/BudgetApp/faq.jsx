import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import styled from 'styled-components';
import sample from '../../images/sample.png';
import Modal from '../common/Modal';
import img from '../../images/income-bg.png';
import { Section } from '../../styles/common';
import { colors } from '../../styles/default';
export default function FAQ(props) {
    return (
        <FAQContainer>
            <h1>The <span className={ 'fifty'}>50</span>/<span className={ 'thirty'}>30</span>/<span className={ 'twenty'}>20</span> Budget</h1>
            <span className={ 'FAQContainer-description' }>
                Allocate spending according to this easy budgeting rule.
                Based on the book&nbsp;
                <a target={ '_blank' } href={ 'https://www.amazon.com/All-Your-Worth-Ultimate-Lifetime/dp/0743269888' }>
                    All Your Worth: The Ultimate Lifetime Money Plan 
                </a>
                &nbsp;by Senator Elizabeth Warren.
            </span>
        	<Modal label={ 'Sample Budget' } buttonCopy={ 'Learn More' }>
                <ModalBody>
                    <p>Q: What is the 50/30/20 Budget?</p>
                    <p>A: The 50/30/20 rule of thumb is a set of easy guidelines for how to plan your budget. Using them, you allocate your after-tax income to the following categories: Needs, Wants, and Savings.</p>
                    <p>Q: What expenses fall on each category?</p>
                    { props.list.map((l, i) => {
                        const{ key, header, body } = l;
                        return(
                            <Accordion key={ `${i}_${key}` }>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls={ `panel${1}a-content` }
                                    id={ `panel${1}a-header` }>
                                    { header }
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        { body }
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        );
                    }) }
                    <p>Here is a sample breakdown for someone who takes home $4,000 after taxes each month:</p>
                    <img src={ sample } alt='' />
                </ModalBody>
			</Modal>
            <img src={ img } alt='' />    
        
        </FAQContainer>
    );
}

const ModalBody = styled.div.attrs({
	className: 'ModalBody'
})`
    padding: 15px;
    width: 800px;
    background: white;

    img{
        height: auto;
        width: 100%;
        max-width: 100%;
        margin-top: 15px;
        display: block;
    }
`;
const FAQContainer = styled(Section).attrs({
	className: 'FAQContainer'
})`
    text-align: left;

    img{
        height: auto;
        width: 100%;
        max-width: 100%;
        margin-top: 15px;
        display: block;
    }

	h1{
		text-align: center;
		.fifty{
			color: ${colors.mojo};
		}
		.thirty{
			color: ${colors.goldenBell};
		}
		.twenty{
			color: ${colors.cornflowerBlue};
		}
    }

    .FAQContainer-description{
        padding: 10px;
        font-size: 13px;
        display: block;
        margin: 15px 0;
        text-align: left;
    }

    button{
        width: 150px;
        display: block;
        margin: 10px auto;
    }
`;