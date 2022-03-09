import './App.css';
import Choices from './Components/Choices';
import Dialogue from './Components/Dialogue';
import Stage from './Components/Stage';

function App() {
  return (
    <div className="App">
      <Stage/>
      <Dialogue/>
      <Choices/>
    
    </div>
  );
}

export default App;
