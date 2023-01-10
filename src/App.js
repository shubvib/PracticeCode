import { createContext } from "react";
import "./App.css";
import CompA from "./Components/CompA";
import FetchAPI from './Components/FetchAPI';
import Demo1 from './Components/Demo1';
import AxiosAPI from './Components/AxiosAPI';
import DataFetchingAxios from "./DataFetchingAxios";

const FirstName = createContext();
const LastName = createContext();

function App() {

  const fname = "shubham"
  const lname = "vibhute"

  return (
    <div>
      {/* react hook usage useState and useEffect */}
      <Demo1/>     
      {/* fetching data from demo server and displayed in console using fetch function */}
      <FetchAPI/>
      {/* fetching data from demo server and displayed in console using Axios  */}
      <AxiosAPI/>   

      <DataFetchingAxios />

      <FirstName.Provider value={fname}>
        <LastName.Provider value={lname}>
          <CompA />
        </LastName.Provider>
      </FirstName.Provider>
    </div>
  );
}

export default App;
export { FirstName, LastName };
