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

export const Subtitle = styled.h2`
  color:#505050;
  font-family: OpenSans;
  font-size: 26px;
  font-weight: 600;
  margin-top: 30px;
`
export const Text = styled.p`
  font-size: 16px;
  font-weight: 300;
  line-height: 24px;
  margin-top: 30px;
  text-align: left;
`
export const Redes = styled.div`
  display: flex;
  margin-top: 20px;

  a{
    margin-right: 10px;
  }
`

export const Telefones = styled.div`
  display: flex;
  margin-top: 20px;

  a{
    color:#505050;
    font-size: 18px;
    font-weight: bold;
    margin-right: 10px;
    text-decoration: none;
  }
`

export const AboutImg = styled.div`
  display: flex;
  align-items: center;
`
