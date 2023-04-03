import styled from 'styled-components'

export const GradientBox = styled.div`
  background-image: ${props => props.backgroundImageValues};
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

export const MainHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 30px;
  color: #ffffff;
  text-align: center;
`

export const GradientDirectionItemsContainer = styled.ul`
    display: flex:
    justify-content: space-between;
    flex-wrap: wrap;
    min-width: 400px; 
    padding-left: 0px;
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
  min-width: 300px;
`

export const ColorCode = styled.p`
  font-size: 22px;
  color: #ffffff;
  font-weight: 500;
`

export const ColorBox = styled.input`
  height: 60px;
  width: 130px;
  border: none;
  background: transparent;
`

export const ColorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

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
