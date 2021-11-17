import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  color: #505050;
  background: #fff;
  -webkit-font-smoothing: antialiased;
}

body{
  font: 14px "Montserrat", sans-serif;
}

button {
  cursor: pointer;
}

`

