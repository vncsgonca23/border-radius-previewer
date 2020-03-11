import {createGlobalStyle} from "styled-components";
export default createGlobalStyle`
*{
  box-sizing:border-box;
  margin:0;
  outline:0;
  padding:0;
}
  *:focus{
    outline:0
  }
  html,body,#root{
    height:100%
  }
  body{
    -webkit-font-smoothing: antialiased;
  }
  body,input,button{
    font-family: 'Raleway', sans-serif
  }
  a{
    text-decoration:none;
  }
  ul{
    list-style:none;
  }
  button{
    cursor: pointer;
  }
  @media (min-width: 1440px) {
    .container, .container-lg, .container-md, .container-sm, .container-xl {
      max-width: 75%;
    }
  }
`;