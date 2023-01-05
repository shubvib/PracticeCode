import './App.css';
import FetchAPI from './Components/FetchAPI';
import Demo1 from './Components/Demo1';
import AxiosAPI from './Components/AxiosAPI';

function App() {
  return (

    <div>
      {/* react hook usage useState and useEffect */}
      <Demo1/>     
      {/* fetching data from demo server and displayed in console using fetch function */}
      <FetchAPI/>
      {/* fetching data from demo server and displayed in console using Axios  */}
      <AxiosAPI/>   
    </div>

  );
}

export default App;