import styled from 'styled-components'

export const Button = styled.button`
  color: #334155;
  font-weight: 700px;
  font-family: 'Roboto';
  font-size: 20px;
  width: 100%;
  height: 100%;
  border: none;
  background: transparent;
`

export const ListItem = styled.li`
  list-style: none;
  height: 55px;
  width: 180px;
  border-radius: 7px;
//   background-color: ${props => (props.isActive ? '#ffffff' : '#ffffff79')};
  background-color: #ffffff;
  opacity: ${props => (props.isActive ? '1' : '0.5')}
  margin: 0px;
`
