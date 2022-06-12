import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline:0;
        box-sizing:border-box;
        font-family: 'Open Sans', sans-serif; 
    }
    #root{
        margin:0 auto;
    }
    :root{
        // spacing variables
        --spacing-zero: 0 ;
        --spacing-xxxs: 0.25rem ;
        --spacing-xxs: 0.5rem ;
        --spacing-xs: 0.75rem ;
        --spacing-st: 1rem ;
        --spacing-sm: 1.5rem ;
        --spacing-md: 2rem ;
        --spacing-lg: 3rem ;
        --spacing-xl: 4rem ;
        --spacing-xxl: 8rem ;
        //font-size variables
        --font-size-xxxs: 0.5rem ;
        --font-size-xxs: 0.75rem ;
        --font-size-xs: 1rem ;
        --font-size-st: 1.25rem ;
        --font-size-sm: 1.5rem ;
        --font-size-md: 2rem ;
        --font-size-lg: 2.5rem ;
        --font-size-xl: 3rem ;
        --font-size-xxl: 4rem ;
        --font-size-xxxl: 6rem ;
        //font-weight variables
        --font-weight-light: 300 ;
        --font-weight-medium: 500 ;
        --font-weight-bold: 800 ;
        //color variables
        --color-primary:#f27a1a ;

        //border-radius variables
        --border-radius-xs: 0.25rem ;
        --border-radius-st: 0.5rem ;
        --border-radius-sm: 0.75rem ;
        --border-radius-md: 1rem ;
        --border-radius-lg: 1.5rem ;

    }
 `;
