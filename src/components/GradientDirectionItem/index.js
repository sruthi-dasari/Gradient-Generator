import {Component} from 'react'

import {Button, ListItem} from './styledComponents'

class GradientDirectionItem extends Component {
  onClickButton = () => {
    const {updateDirection, itemDetails} = this.props
    const {directionId} = itemDetails
    updateDirection(directionId)
  }

  render() {
    const {itemDetails, isActive} = this.props
    const {value, displayText} = itemDetails
    return (
      <ListItem isActive={isActive}>
        <Button onClick={this.onClickButton} value={value}>
          {displayText}
        </Button>
      </ListItem>
    )
  }
}

export default GradientDirectionItem
