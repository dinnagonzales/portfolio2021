import { css } from 'styled-components';

/*
  ${media.mediumUp``};
 */
const media = {
    small: (...args) => css`
        @media (max-width: 767px) {
        ${css(...args)};
        }
    `,
    mediumDown: (...args) => css`
        @media (max-width: 992px){
        ${css(...args)};
        }
    `,
    medium: (...args) => css`
        @media (min-width: 768px) and (max-width: 992px) {
        ${css(...args)};
        }
    `,
    mediumUp: (...args) => css`
        @media (min-width: 768px){
        ${css(...args)};
        }
    `,
    large: (...args) => css`
        @media (min-width: 992px) and (max-width: 1200px) {
        ${css(...args)};
        }
    `,
    largeUp: (...args) => css`
        @media (min-width: 992px){
        ${css(...args)};
        }
    `,
    xLargeUp: (...args) => css`
        @media (min-width: 1200px) {
          ${css(...args)};
        }
    `,
};

export { media as default };