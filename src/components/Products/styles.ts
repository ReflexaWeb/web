import styled from "styled-components";


export const Section = styled.section`
  background: #fff;
`

export const Container = styled.div`
  display: flex;
  max-width: 1100px;
  margin: 0 auto;
  padding: 40px 0;

  select{
    border-radius: 5px;
    border:none;
    background-color: #0063b4;
    width: 216px;
    height: 40px;
    color:#fff;
    font-size: 18px;
    padding: 10px;
  }
`

export const Title = styled.div`
  width: 100%;
  display: block;

  h2{
    color:#0063b4;
  font-family: OpenSans;
  font-size: 44px;
  font-weight: 600;
  text-transform: uppercase;
  width: 100%;

  &::after{
    content: '';
    display: block;
    height: 3px;
    width: 237px;
    background-color: #ffb800;
  }
  }
`

export const Produtos = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  a{
    background: #f1f1f1;
    border-radius: 10px;
    display: block;
    max-width: 256px;
    padding: 30px 25px;
    margin-bottom: 60px;
    text-decoration: none;

    & + a{
      margin-left: 25px;
    }

    p{
      color: #0063b4;
      font-size: 18px;
      font-weight: 600;
      font-family: "Open-sans", sans-serif;
      line-height: 24px;
      padding-top: 35px;
      text-align: center;
    }

    span{
      border-radius: 11px;
      background-color: #0063b4;
      color: #fff;
      display: block;
      max-width: 156px;
      margin: 0 auto;
      height: 28px;
      padding: 5px 0;
      margin-top: 25px;
      font-family: "Open-sans", sans-serif;
      font-size: 14px;
      font-weight: 600;
      text-align: center;
    }

    img{
      height: 200px;
      width: 200px;
      object-fit: cover;
    }
  }
`