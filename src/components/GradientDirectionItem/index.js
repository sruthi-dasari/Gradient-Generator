import {Button} from './styledComponents'

const GradientDirectionItem = props => {
  const {updateDirection, itemDetails} = props
  const {directionId, value, displayText} = itemDetails

  const onClickButton = () => {
    updateDirection(directionId)
  }

  return (
    <Button onClick={onClickButton} value={value}>
      {displayText}
    </Button>
  )
}

export default GradientDirectionItem
