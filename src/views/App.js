// import logo from "./logo.svg";
import "./App.scss";
// import ClassComponent from "./ExampleClassComp/ClassComponent";
import YoutubeList from "./ExampleClassComp/YoutubeList";
import { YoutubeData } from "./YoutubeData";
/**
 * 2 components: class component / function component (function, arrow)
 * Sử dụng JSX (function của JS trả về block)
 * State
 */

function App() {
  console.log(YoutubeData);
  return (
    <div>
      {/* <ClassComponent /> Shortcut */}
      {/* <ClassComponent></ClassComponent> Full */}
      <YoutubeList />
    </div>
  );
}

export default App;
