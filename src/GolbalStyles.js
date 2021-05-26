import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset}
    a{
        text-decoration:none;
        color:inherit
    }
    *{
        box-sizing:border-box;
    }
    body{
        font-family:--apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size:16px;
        width:100%;
        color:white;
        font-weight:600;
        word-break: keep-all;
        ::-webkit-scrollbar {
            display: none;
        }
    
    }
    #root section{
        max-width: 720px;
        /* height: 100%; */
        width: 100%;
        margin: 0 auto;
    }
        @media screen and (min-width:0px){
      

        }
        @media screen and (min-width:320px) {
            #root{
                height:100%;
            }
            body{
                padding:0px;
                height:100%;
            }
        }
        @media screen and (min-width:768px) {
            body{
                padding: 0 200px;
                height: 100vh;
            }
            #root{
                height:100vh;
            }
        }
   
`;

export default GlobalStyles;
