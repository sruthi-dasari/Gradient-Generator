import {Button, ListItem} from './styledComponents'

const GradientDirectionItem = props => {
  const {updateDirection, itemDetails} = props
  const {directionId, value, displayText} = itemDetails

  const onClickButton = () => {
    updateDirection(directionId)
  }

  return (
    <Button onClick={onClickButton} value={value}>
      <ListItem>{displayText}</ListItem>
    </Button>
  )
}

export default GradientDirectionItem
