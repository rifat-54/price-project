import "./App.css";
import DaisyNav from "./components/DaisyNav/DaisyNav"
import LineChart from "./components/LineChart/LineChart";
import Navber from "./components/Navber/Navber";
import Phones from "./components/Phones/Phones";
import PriceOption from "./components/PriceOption/PriceOption";

function App() {
  return (
    <>
      <Navber></Navber>
      <PriceOption></PriceOption>
      <LineChart></LineChart>
      <Phones></Phones>
      

    </>
  );
}

export default App;
