import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    :root{
        /*Colors*/
        --color-primary: #ffcd07;
        --color-primary-50: #ffcd00;
        --color-secondary:  #E60000;
        --grey-100: #333333;
        --grey-50: #828282;
        --grey-20: #E0E0E0; 
        --grey-0: #F5F5F5;

        /*Text Sizing*/
        --heading-1: 26px;
        --heading-2: 22px;
        --heading-3: 18px;
        --heading-4: 14px;
        --headline: 16px;
        --body: 14px;
        --caption: 12px; 

    }

    body, ul, li, h1, h2{
        font-family: 'Inter', sans-serif;
    }
`;
