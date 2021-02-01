import React, { useContext } from 'react';
import { Context }  from './store';

import styled from 'styled-components';

import { theme } from '../../styles/default';
import media from '../../styles/media';


export default function Footer() {

	return (
        <FooterContainer>
            <p>Created by: Dinna Gonzales | Contact:&nbsp;
                <a href={'mailto:dinnagonzales.05@gmail.com'}>
                    Email
                </a>
            </p>
            <a href="https://www.freepik.com/vectors/people">People vector created by pch.vector - www.freepik.com</a>
		</FooterContainer>
	);
}

const FooterContainer = styled.footer.attrs({
	className: 'FooterContainer'
})`
    background-color: ${ theme.darkBackground };
    font-size: 12px;
    text-align: center;
    padding: 10px 0;
    width: 100%;
    margin-top: 15px;

    p{
        margin: 10px 0;
    }
    * {
        color: white;
    }
`;