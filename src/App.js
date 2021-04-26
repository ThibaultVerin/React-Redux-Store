import { Provider } from 'react-redux';
import store from './Redux/Store';
import { Root, Title } from './components/style';
// import HighTechDevices from './components/HighTechDevicesHooks';
// import SmallDevices from './components/SmallDevicesHooks';
import SmallDevices from './components/SmallDevicesConnect';
import HighTechDevices from './components/HighTechDevicesConnect';

function App() {
  return (
    
    <Provider store={store} >
      <>
      <Title>React - Redux</Title>
      <Root>
        <SmallDevices warning='This item is not available at the moment' />
        <HighTechDevices />
      </Root>
      </>
    </Provider>
  );
}

export default App;
