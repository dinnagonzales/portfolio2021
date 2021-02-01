import styled from 'styled-components';

import { colors, theme } from './default.js';

export const Section = styled.section.attrs({
	className: 'GlobalSection'
})`
    border-radius: 20px;
    background: ${colors.white};
    border: 1px solid ${theme.border};
    padding: 15px;
`;