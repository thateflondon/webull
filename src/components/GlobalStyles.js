import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
}

html, body {
    overflow-x:hidden;
}

a, body, button, div, input, p, textarea{
    font-family: OpenSans-Regular,PingFangSC-Regular,Arial,Helvetica,Microsoft YaHei,sans-serif;s
}
`;

export default GlobalStyle;
