import { createGlobalStyle } from 'styled-components';

export function px2rem(size: number, context = 16) {
  return `${size / context}rem`;
}

export function containerGlobal(width: number) {
  return `${width}px`;
}

const GlobalStyle = createGlobalStyle`

  html{
    @media screen and (min-width: 1440px) {
      font-size: 16px !important;
    }
    @media screen and (max-width: 1439px) and (min-width: 1281px) {
      font-size: 13.5px !important;
    }
    @media screen and (max-width: 1280px) and (min-width: 1024px) {
      font-size: 12.5px !important;
    }
    @media screen and (max-width: 1023px) and (min-width: 998px) {
      font-size: 12px !important;
    }
    @media screen and (max-width: 997px){
      font-size: 16px !important;
    }

    @media (max-width: 500px) {
    :root { //@media-breadcrumb-spread
        --mobile-breakpoint-spread: display: none }
}
  }

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
      margin: 0;
      padding: 0;
      border: 0;
      font-size: 100%;
      font: inherit;
      vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, hgroup, menu, nav, section {
      display: block;
    }

    body {
      line-height: 1;
    }
    ol, ul {
      list-style: none;
    }
    blockquote, q {
      quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
      content: '';
      content: none;
    }
    table {
      border-collapse: collapse;
      border-spacing: 0;
    }

    :root {
        //Primary Colors
        --blue-clear: #F5F9FC;
        --blue-lighter: #0076BC;
        --blue-light: #015384;
        --blue-glass: #F6F9FC;
        --blue-medium: #12428A;
        --blue-water: #52ACBA;
        --blue-darker: #081E3E;
        --blue-darkness: #081D3D;
        --pink-lighter: #FFF9FA;
        --pink-light: #FCE4EC;
        --pink-medium: #EEAAD5;
        --pink-dark: #A84D66;
        --pink-darkness: #A30067;
        --pink-darker: #990054;
        --brown-lighter: #D1B472;
        --brown-medium: #674E15;
        --bg-ladinpage: #f5f9fc;
        --bg-page-mobile: #F5F9FC; 

        //Neutral Colors
        --white: white;
        --white-glass: #F0F3F6;
        --black: black;
        --black-medium: #362C2C;
        --black-clear: #25282B;
        --black-lighter: #3A3946;
        --black-grey: #333333;
        --grey: grey;
        --grey-medium: #E1E3E6;
        --grey-dark: #909599;
        --grey-medium-darker: #808487;
        --grey-darker: #25282B;
        --grey-darkness: #2C343B;

        //Auxiliar Colors
        --color-error: #DE2443;
        

        //Font Size
        --font-smallest: ${px2rem(11)};
        --font-small: ${px2rem(12)};
        --font-normal: ${px2rem(14)};
        --font-medium: ${px2rem(16)};
        --font-large: ${px2rem(18)};
        --font-larger: ${px2rem(24)};
        --font-largest: ${px2rem(32)};
        --font-bigger: ${px2rem(44)};

        //@media-breadcrumb-spread
        --mobile-breakpoint-spread: 
    } 
    
    body {
      font-family: 'Open Sans', sans-serif;
      margin: 0;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-size: var(--font-normal);
      background-color: var(--white-glass);

      @media only screen and (max-width: 1024px) {
          background-color: var(--bg-page-mobile);
      }
    }

    border-style, html, #root {
    box-sizing: border-box;
    max-height: 100%;
        margin-right: auto;
    margin-left: auto;
    width: 100%;
    }

    button {
      cursor: pointer;
    }

    .Toastify__toast-container {
      padding: 0;
    }

    .Toastify__toast-container--top-center {
      width: 100%;
      left: 0;
      top: 0;
      transform: none;
    }

    .Toastify__toast {
      width: 100%;
      border-radius: 0;
    }

    .Toastify__toast--error {
      background: var(--color-error);
      color: var(--white);
    }

    .Toastify__close-button {
      align-self: center;
    }

    ::-webkit-scrollbar {
        width: 8px;
      }
      ::-moz-scrollbar {
        width: 8px;
      }
      :-ms-input-scrollbar {
        width: 8px;
      }

      ::-webkit-scrollbar-thumb {
        background: #cecece;
        border-radius: 10px;
      }
`;

export default GlobalStyle;
