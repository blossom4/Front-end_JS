import logo from './logo.svg';
// import './App.css';
// import './App.scss'
import styles from './App.module.css'
import Button from './components/Button'

console.log(styles)
// {
//   App: "App_App__2hFB5"
//   App-logo-spin: "App_App-logo-spin__16FrG"
//   header: "App_header__3R6b3"
//   link: "App_link__j3soZ"
//   logo: "App_logo__1vhBy"
// }

function App() {
  return (
    <div className={ styles["App"] }>
      <header className={ styles["header"] }>
        <img src={logo} className={ styles["logo"] } alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Button>Button</Button>
        <a
          className={ styles["link"] }
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
