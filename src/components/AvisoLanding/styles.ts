import styled from "styled-components";

export const Section = styled.section`
  background: #f1f1f1;
`

export const Container = styled.div`
  display: flex;
  max-width: 1100px;
  margin: 0 auto;
  padding: 40px 0;

  @media(max-width: 600px) {
    flex-direction: column;
    max-width:100%;
    padding: 0 20px;
  }
`

export const About = styled.div`
  padding: 100px 0;

  @media(max-width: 600px) {
    padding: 50px 0;
  }
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

  @media(max-width: 600px) {
      font-size:25px;
  }
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

export const AboutImg = styled.div`
  display: flex;
  align-items: center;

  @media(max-width: 600px) {
    flex-direction:column;
    padding-bottom:50px;

    img{
      width: 100%;
      height: 100%;
      object-fit:cover;
    }
  }
`
