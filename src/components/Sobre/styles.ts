import styled from "styled-components";

export const Section = styled.section`
  background: #f1f1f1;
`

export const Container = styled.div`
  display: flex;
  max-width: 1100px;
  margin: 0 auto;
  padding: 40px 0;
`

export const About = styled.div`
  padding: 100px 0;
`

export const Title = styled.h1`
  color:#0063b4;
  font-family: OpenSans;
  font-size: 44px;
  font-weight: 600;
  margin-bottom: 30px;
  text-transform: uppercase;
  &::after{
    content: '';
    display: block;
    height: 3px;
    width: 237px;
    background-color: #ffb800;
  }
  
`
export const Text = styled.p`
  font-size: 14px;
  font-weight: 300;
  line-height: 24px;
  text-align: left;
`
export const AboutImg = styled.div`
  display: flex;
  align-items: center;
`

export const Endereco = styled.div`
  display: block;
  margin-top: 20px;

  p{
    span{
      font-weight:bold;
    }
  }

  a{
    color:#505050;
    display: block;
    font-size: 16px;
    font-weight: bold;
    margin-top: 25px;
    text-decoration:none;
  }
`
