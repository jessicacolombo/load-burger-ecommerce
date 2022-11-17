import { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`

    :root{
        /*Colors*/
        --color-primary: #27ae60;
        --color-primary-50: #93D7AF;
        --color-secondary: #EB5757;
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

        /*Feedback Palete*/
        --negative: #E60000;
        --warning: #FFCD07;
        --success: #168821;
        --information: #155BCB;
    }

    body, ul, li, h1, h2{
        font-family: 'Inter', sans-serif;
    }
`