import './App.css';
import HighTechDevices from './components/HighTechDevices';
import SmallDevices from './components/SmallDevices';

function App() {
  return (
    <div className="App">
      <SmallDevices />
      <HighTechDevices />
    </div>
  );
}

export default App;
