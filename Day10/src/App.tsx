import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <div>day10미션 입니다.</div>
      <Link to="/mission1">mission 1</Link>
      <br />
      <Link to="/mission2">mission 2</Link>
      <br />
      <Link to="/mission3">mission 3</Link>


      <br />
    </>
  );
}

export default App;
