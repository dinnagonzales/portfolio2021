import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import styled from 'styled-components';
import sample from '../../images/sample.png';

export default function AccordionList(props) {
    return (
        <AccordionListContainer>
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
             <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={ 'panel-content-sample' }
                    id={ 'panel-content-header' }>
                    Sample Budget
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <img src={ sample } alt='' />
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </AccordionListContainer>
    );
}
const AccordionListContainer = styled.div.attrs({
	className: 'AccordionListContainer'
})`
    text-align: left;
`;