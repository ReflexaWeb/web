import styled from "styled-components";

import barraImg from '../../assets/images/barra.jpg'

export const Topo = styled.header`
  max-width: 1100px;
  margin: 0 auto;
  padding: 30px 0;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Redes = styled.div`
  display: flex;

  > img{
    margin-right: 10px;
  }
`

export const Form = styled.form`
  width: 530px;
  display: flex;

  input{
    border: none;
    background-color: #e7e7e7;
    border-radius: 11px;
    flex:1;
    height: 37px;
    padding: 0 10px;
    margin-right: 4px;
    
    &:focus{
      outline: 0;
    }

  }
  button{
    border:none;
    border-radius: 11px;
    background: #0063b4;
    color:#fff;
    font-size: 16px;
    font-weight: 600;
    text-transform: uppercase;
    width: 110px;
    height: 37px;
     
   } 
`

export const Barra = styled.div`
  background: url(${barraImg}) no-repeat;
  background-size: cover;
  height: 55px;

`