import { Provider } from 'react-redux';
import store from './Redux/Store';
import { Root, Title } from './components/style';
import HighTechDevices from './components/HighTechDevices';
import SmallDevices from './components/SmallDevicesHooks';

function App() {
  return (
    
    <Provider store={store} >
      <>
      <Title>React - Redux</Title>
      <Root>
        <SmallDevices />
        <HighTechDevices />
      </Root>
      </>
    </Provider>
  );
}

export default App;
