// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  font-family: 'Roboto';
  width: 100vw;

  @media screen and (max-width: 576px) {
    flex-direction: column;
  }
`

export const CreditCardContainer = styled.div`
  background-color: #3b4b69;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  padding: 20px;
  height: 100vh;

  @media screen and (max-width: 576px) {
    height: 50vh;
    width: 100%;
  }
`

export const CreditCardHeading = styled.h1`
  color: #ffffff;
  font-weight: bold;
`

export const HorizontalLine = styled.hr`
  width: 150px;
  height: 3px;
  background-color: #ffd773;
  margin-bottom: 200px;

  @media screen and (max-width: 576px) {
    margin-bottom: 20px;
  }
`

export const CreditCard = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  background-size: cover;
  height: 250px;
  width: 80%;
  height: 250px;
  border-radius: 25px;
  dispay: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 20px;
  margin-top: 60px;

  @media screen and (max-width: 576px) {
    margin-top: 0;
    width: 80%;
  }
`

export const DetailsContainer = styled.div`
  margin-top: 40px;
`

export const CardNumber = styled.p`
  color: #ffffff;
  font-weight: bold;
`

export const CardholderName = styled.p`
  color: #d3d9e0;
`

export const CardName = styled.p`
  color: #ffffff;
  font-weight: bold;
`

export const PaymentContainer = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  padding: 20px;

  @media screen and (max-width: 576px) {
    width: 80%;
  }
`

export const PaymentCardContainer = styled.div`
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0px 1px 0px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
  height: 250px;
  padding: 20px;
`

export const PaymentHeading = styled.h1`
  color: #475569;
  font-weight: bold;
`
export const Input = styled.input`
  padding: 10px;
  outline: none;
  margin-bottom: 15px;
`
