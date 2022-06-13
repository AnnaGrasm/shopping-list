import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
  --primary: #738b8c;
  --primary-light: #b8ddf4;
  --secondary: #b79cb3;
  --secondary-light: #e5d2eb;

}
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body{
font-family: 'Roboto', sans-serif;
background-color: var(--primary);

}

ol ul {
  list-style: none;
  
}
li{
  list-style: none;
}
`;
export default GlobalStyles;
