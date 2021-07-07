import logo from './logo.svg';
import './App.css';
import StyledButton from './components/StyledButton';
import styled, { createGlobalStyle } from 'styled-components';
import StyledA from './components/StyledA'

const PrimaryStyledButton = styled(StyledButton)`
  background: palevioletred;
  color: white;
`

const UppercaseButton = ((props) => {
  return (
    <button { ...props } children={ props.children.toUpperCase() } />
  )
})

const MyButton = ((props) => {
  return (
    <button { ...props } children={ `MyButton ${props.children}` } />
  )
})

const StyledMyButton = styled(MyButton)`
  background: transparent;
  border-radius: 3px;
  border: 2px solid ${ (props) => props.color || 'palevioletred' };
  color: ${ (props) => props.color || 'palevioletred' };
  margin: 0 1em;
  padding: 0.25em 1em;
  font-size: 20px;

  :hover {
    border: 2px solid white;
  }

  ::before {
    content: '@';
  }
`

const GlobalStyle = createGlobalStyle`
  button {
    color: violet;
  }
`

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <StyledButton>Button</StyledButton>
          <StyledButton primary={ true }>Button</StyledButton>
          <PrimaryStyledButton>Button</PrimaryStyledButton>
          <StyledButton as="a" href="/">Button</StyledButton>
          <StyledButton as={ UppercaseButton }>Button</StyledButton>
          <StyledMyButton>Button</StyledMyButton>
          <StyledMyButton color="green">Button</StyledMyButton>
          <StyledA href="https://google.com">tag</StyledA>
        </p>
      </header>
    </div>
  );
}

export default App;
