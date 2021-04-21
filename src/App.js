import { Root, Title } from './components/style';
import HighTechDevices from './components/HighTechDevices';
import SmallDevices from './components/SmallDevices';

function App() {
  return (
    <>
    <Title>React - Redux</Title>
    <Root>
      <SmallDevices />
      <HighTechDevices />
    </Root>
    </>
  );
}

export default App;
