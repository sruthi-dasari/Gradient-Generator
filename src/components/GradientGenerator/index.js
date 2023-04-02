import {Component} from 'react'

import GradientDirectionItem from '../GradientDirectionItem'

import {
  GradientBox,
  MainHeading,
  GradientDirectionItemsContainer,
  DirectionAndColorHeading,
  ColorPickerContainer,
  ColorContainer,
  ColorCode,
  ColorBox,
  GenerateButton,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    directionValue: 'top',
    firstColorCode: '#8ae323',
    secondColorCode: '#014f7b',
  }

  updateDirection = id => {
    const reqItem = gradientDirectionsList.find(
      eachItem => eachItem.directionId === id,
    )
    this.setState({directionValue: reqItem.value})
  }

  render() {
    const {directionValue, firstColorCode, secondColorCode} = this.state
    return (
      <GradientBox
        direction={directionValue}
        firstColorCode={firstColorCode}
        secondColorCode={secondColorCode}
      >
        <MainHeading>Generate a CSS Color Gradient</MainHeading>
        <DirectionAndColorHeading>Choose Direction</DirectionAndColorHeading>
        <GradientDirectionItemsContainer>
          {gradientDirectionsList.map(eachItem => (
            <GradientDirectionItem
              itemDetails={eachItem}
              key={eachItem.directionId}
            />
          ))}
        </GradientDirectionItemsContainer>
        <DirectionAndColorHeading>Pick the Colors</DirectionAndColorHeading>
        <ColorPickerContainer>
          <ColorContainer>
            <ColorCode>{firstColorCode}</ColorCode>
            <ColorBox type="color" value={firstColorCode} />
          </ColorContainer>
          <ColorContainer>
            <ColorCode>{secondColorCode}</ColorCode>
            <ColorBox type="color" value={secondColorCode} />
          </ColorContainer>
        </ColorPickerContainer>
        <GenerateButton type="button" className="generate-btn">
          Generate
        </GenerateButton>
      </GradientBox>
    )
  }
}

export default GradientGenerator
