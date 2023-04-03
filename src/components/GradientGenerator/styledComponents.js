import styled from 'styled-components'

export const GradientGeneratorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(${props => props.gradientValue});
  padding: 20px;
  background-size: cover;
  height: 100vh;
`
export const AppCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px;
`
export const Heading = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 36px;
  font-weight: bold;
`
export const ChooseDirection = styled.p`
  color: #ffffff;
  font-size: 28px;
`
export const UnorderedList = styled.ul`
  list-style-type: none;
  display: flex;
  margin-top: 10px;
  margin-bottom: 10px;
`
export const PickHeading = styled.p`
  font-weight: 500;
  font-family: 'Roboto';
  color: #ffffff;
`
export const PalletesCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 320px;
`

export const ColorCode = styled.p`
color='#ffffff';
font-size 26px;
font-weight:500;
`

export const PickerCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-right: 50px;
`
export const ColorInput = styled.input`
  background-color: transparent;
  width: 100px;
  height: 50px;
  border: none;
  border-radius: 10px;
  outline: none;
  cursor: pointer;
`
export const ButtonCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const GenerateButton = styled.button`
  color: #1e293b;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 600;
  background-color: #00c9b7;
  min-width: 25px;
  border-radius: 6px;
  border: none;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-right: 24px;
  outline: none;
  cursor: pointer;
  margin-top: 22px;
`
