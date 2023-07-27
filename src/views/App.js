import logo from "./logo.svg";
import "./App.scss";
import ClassComponent from "./ExampleClassComp/ClassComponent";
/**
 * 2 components: class component / function component (function, arrow)
 * Sử dụng JSX (function của JS trả về block)
 * State
 */

function App() {
  // const App = () => {   ()
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello World with ReactJS</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ClassComponent /> {/* Shortcut */}
        {/* <ClassComponent></ClassComponent> Full */}
      </header>
    </div>
  );
}

export default App;
