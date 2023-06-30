import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  body{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: Lato, Arial, Helvetica, sans-serif;
    }
`

export const CorFundo = styled.div`
    background: linear-gradient(130deg, #f9d03f -80%, #171616 30%);
    height: 100%;

`