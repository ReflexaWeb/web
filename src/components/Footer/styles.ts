import styled from "styled-components";

import barraImg from '../../assets/images/barra.jpg'

export const Rodape = styled.footer`
  background: url(${barraImg}) no-repeat;
  background-size: cover;
  height: 55px;

  display: flex;
  justify-content: center;
  align-items: center;

  p{
    color: #fff;
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
  }

`