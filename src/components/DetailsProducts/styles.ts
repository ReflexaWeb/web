import styled from "styled-components";

export const Section = styled.section`
  background: #f1f1f1;
`

export const Container = styled.div`
  display: flex;
  max-width: 1100px;
  margin: 0 auto;
  padding: 40px 0;

  .imgDetailProduct{
    background: #fff;
    border-radius: 30px;
    box-shadow: 0 5px 12px 0 rgba(0, 0, 0, 0.08);
    padding: 16px 11px 11px 41px;
    margin-right: 55px;
    width: 496px;
    height: 496px;

    display: flex;
    align-items: center;

    img{
      height: 415px;
      width: 415px;
      object-fit: cover;
    }
  }

  .descDetailProduct{
    h2{
      color: #0063b4;
      font-size: 44px;
      font-weight: 600;
      line-height: 44px;
      margin-bottom: 45px;
    }

    span{
      display: block;
      font-size: 18px;
      margin-top: 15px;

      strong{
        font-weight: 600;
      }
    }

    a{
      background: #0063b4;
      border-radius: 11px;
      color: #fff;
      display: block;
      font-size: 16px;
      font-weight: 600;
      padding-top: 12px;
      width: 315px;
      height: 44px;
      margin-top: 55px;
      text-align: center;
      text-decoration: none;
      text-transform: uppercase;
    }
  }
`