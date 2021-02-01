import styled from 'styled-components';
import CircularProgress from '@material-ui/core/CircularProgress';

export default function ProgressBar(props) {
    const {
        value,
        min,
        max
    } = props;
    
	return (
        <ProgressBarContainer>
            <div className={ 'progress-labels' }>
                <span className={ 'min' }>{ min }</span>
                <span className={ 'max' }>{ max }</span>
            </div>
        </ProgressBarContainer>
	);
}

const ProgressBarContainer = styled.div.attrs({
	className: 'ProgressBarContainer'
})`
	padding: 20px 0;
	.progress-labels{
		display: grid;
		grid-template-columns: 1fr 1fr;

		.min{
			text-align: left;
		}
		.max{
			text-align: right;
		}
	}
`;