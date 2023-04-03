import {Component} from 'react'
import {
  GradientGeneratorContainer,
  UnorderedList,
  ChooseDirection,
  Heading,
  AppCont,
  PickHeading,
  PalletesCont,
  PickerCont,
  ColorInput,
  ButtonCont,
  GenerateButton,
  ColorCode,
} from './styledComponents'
import GradientDirectionItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    activeGradientDirection: gradientDirectionsList[0].value,
    fromColorInput: '#8ae323',
    toColorInput: '#014f7b',
    gradientValue: `to ${gradientDirectionsList[0].value},#8ae323, #014f7b`,
  }

  onChangeFromColorInput = event => {
    this.setState({fromColorInput: event.target.value})
  }

  onChangeToColorInput = event => {
    this.setState({toColorInput: event.target.value})
  }

  changeDirection = value => {
    this.setState({activeGradientDirection: value})
  }

  onGenerateColor = () => {
    const {activeGradientDirection, fromColorInput, toColorInput} = this.state
    this.setState({
      gradientValue: `to ${activeGradientDirection}, ${fromColorInput}, ${toColorInput}`,
    })
  }

  render() {
    const {
      activeGradientDirection,
      fromColorInput,
      toColorInput,
      gradientValue,
    } = this.state
    return (
      <GradientGeneratorContainer
        data-testid="gradientGenerator"
        gradientValue={gradientValue}
      >
        <AppCont>
          <Heading>Generate a CSS Color Gradient</Heading>
          <ChooseDirection>Choose Direction</ChooseDirection>
          <UnorderedList>
            {gradientDirectionsList.map(eachItem => (
              <GradientDirectionItem
                key={eachItem.directionId}
                directionDetails={eachItem}
                changeDirection={this.changeDirection}
                isActive={eachItem.value === activeGradientDirection}
              />
            ))}
          </UnorderedList>
          <PickHeading>Pick the Colors</PickHeading>
          <PalletesCont>
            <PickerCont>
              <ColorCode>{fromColorInput}</ColorCode>
              <ColorInput
                type="color"
                value={fromColorInput}
                onChange={this.onChangeFromColorInput}
              />
            </PickerCont>
            <PickerCont>
              <ColorCode>{toColorInput}</ColorCode>
              <ColorInput
                type="color"
                value={toColorInput}
                onChange={this.onChangeToColorInput}
              />
            </PickerCont>
          </PalletesCont>
          <ButtonCont>
            <GenerateButton onClick={this.onGenerateColor}>
              Generate
            </GenerateButton>
          </ButtonCont>
        </AppCont>
      </GradientGeneratorContainer>
    )
  }
}
export default GradientGenerator

// import {Component} from 'react'
// import GradientDirectionItem from '../GradientDirectionItem'

// import {
//   GradientColorContainer,
//   GradientColorGeneratorContainer,
//   Heading,
//   ChooseDirection,
//   UnOrderedList,
//   ColorPickerHeading,
//   ColorPickerContainer,
//   ColorPickerInputContainer,
//   CustomColorInput,
//   ColorPickerValue,
//   GenerateButton,
// } from './styledComponents'

// const gradientDirectionsList = [
//   {directionId: 'TOP', value: 'top', displayText: 'Top'},
//   {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
//   {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
//   {directionId: 'LEFT', value: 'left', displayText: 'Left'},
// ]
// // Write your code here

// class GradientGenerator extends Component {
//   state = {
//     activeGradientDirection: gradientDirectionsList[0].value,
//     fromColorInput: '#8ae323',
//     toColorInput: '#014f7b',
//     gradientValue: ` to ${gradientDirectionsList[0].value}, #8ae323, #014f7b`,
//   }

//   onChangeFromColorInput = event => {
//     this.setState({fromColorInput: event.target.value})
//   }

//   onChangeToColorInput = event => {
//     this.setState({toColorInput: event.target.value})
//   }

//   changeDirection = direction => {
//     this.setState({activeGradientDirection: direction})
//   }

//   onGenerateColor = () => {
//     const {activeGradientDirection, fromColorInput, toColorInput} = this.state
//     this.setState({
//       gradientValue: `to ${activeGradientDirection}, ${fromColorInput} ,${toColorInput}`,
//     })
//   }

//   render() {
//     const {
//       activeGradientDirection,
//       fromColorInput,
//       toColorInput,
//       gradientValue,
//     } = this.state
//     return (
//       <GradientColorContainer
//         data-testid="gradientGenerator"
//         gradientValue={gradientValue}
//       >
//         <GradientColorGeneratorContainer>
//           <Heading>Generate a CSS Color Gradient</Heading>
//           <ChooseDirection>Choose Direction</ChooseDirection>
//           <UnOrderedList>
//             {gradientDirectionsList.map(eachDirection => (
//               <GradientDirectionItem
//                 key={eachDirection.directionId}
//                 gradientDirectionDetails={eachDirection}
//                 changeDirection={this.changeDirection}
//                 isActive={activeGradientDirection === eachDirection.value}
//               />
//             ))}
//           </UnOrderedList>
//           <ColorPickerHeading>Pick the Colors</ColorPickerHeading>

//           <ColorPickerContainer>
//             <ColorPickerInputContainer>
//               <ColorPickerValue>{fromColorInput}</ColorPickerValue>
//               <CustomColorInput
//                 type="color"
//                 value={fromColorInput}
//                 onChange={this.onChangeFromColorInput}
//               />
//             </ColorPickerInputContainer>
//             <ColorPickerInputContainer>
//               <ColorPickerValue>{toColorInput}</ColorPickerValue>
//               <CustomColorInput
//                 type="color"
//                 value={toColorInput}
//                 onChange={this.onChangeToColorInput}
//               />
//             </ColorPickerInputContainer>
//           </ColorPickerContainer>
//           <GenerateButton type="button" onClick={this.onGenerateColor}>
//             Generate
//           </GenerateButton>
//         </GradientColorGeneratorContainer>
//       </GradientColorContainer>
//     )
//   }
// }

// export default GradientGenerator