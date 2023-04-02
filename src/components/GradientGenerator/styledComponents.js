import styled from 'styled-components'

export const GradientBox = styled.div`
  background-image: linear-gradient(to left, #8ae323, #014f7b)
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const MainHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 20px;
  color: #000000;
`

export const GradientDirectionItemsContainer = styled.ul`
    display: flex:
    justify-content: space-between;
    min-width: 400px; 
    padding: 10px;
`

export const DirectionAndColorHeading = styled.p`
  color: #ededed;
  font-size: 28px;
  font-family: 'Roboto';
`

export const ColorPickerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`

export const ColorCode = styled.p`
  font-size: 20px;
  color: #ffffff;
`

export const ColorBox = styled.input`
  height: 60px;
  width: 130px;
  border: none;
`

export const ColorContainer = styled.div``

export const GenerateButton = styled.button`
  background-color: #00c9b7;
  border: none;
  color: #1e293b;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 20px;
  padding: 10px;
  border-radius: 7px;
  width: 140px;
  height: 50px;
`
