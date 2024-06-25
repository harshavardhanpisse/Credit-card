// Write your code here
import {useState} from 'react'

import {
  MainContainer,
  CreditCardContainer,
  CreditCardHeading,
  HorizontalLine,
  DetailsContainer,
  CardNumber,
  CardholderName,
  CardName,
  PaymentContainer,
  PaymentCardContainer,
  PaymentHeading,
  Input,
} from './styledComponents'

const CreditCard = () => {
  const [numberInput, setNumberInput] = useState('')
  const [nameInput, setNameInput] = useState('')

  const onChangeNumberInput = event => {
    setNumberInput(event.target.value)
  }

  const onChangeNameInput = event => {
    setNameInput(event.target.value)
  }

  return (
    <MainContainer>
      <CreditCardContainer>
        <CreditCardHeading> CREDIT CARD </CreditCardHeading>
        <HorizontalLine />
        <CreditCard>
          <DetailsContainer>
            <CardNumber> {numberInput} </CardNumber>
            <CardholderName> CARDHOLDER NAME </CardholderName>
            <CardName> {nameInput} </CardName>
          </DetailsContainer>
        </CreditCard>
      </CreditCardContainer>
      <PaymentContainer>
        <PaymentCardContainer>
          <PaymentHeading>Payment Method</PaymentHeading>
          <Input
            onChange={onChangeNumberInput}
            placeholder="Card Number"
            type="text"
            value={numberInput}
          />
          <Input
            onChange={onChangeNameInput}
            placeholder="Cardholder Name"
            type="text"
            value={nameInput}
          />
        </PaymentCardContainer>
      </PaymentContainer>
    </MainContainer>
  )
}

export default CreditCard
