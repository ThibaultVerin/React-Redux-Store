import { Root } from './components/style';
import HighTechDevices from './components/HighTechDevices';
import SmallDevices from './components/SmallDevices';

function App() {
  return (
    <Root>
      <SmallDevices />
      <HighTechDevices />
    </Root>
  );
}

export default App;
