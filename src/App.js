import { Provider } from 'react-redux';
import store from './Redux/Store';
import { Root, Title } from './components/style';
import HighTechDevices from './components/HighTechDevicesHooks';
import SmallDevices from './components/SmallDevicesHooks';
import Comments from './components/Comments';
// import SmallDevices from './components/SmallDevicesConnect';

function App() {
  return (
    
    <Provider store={store} >
      <>
      <Title>React - Redux</Title>
      <Root>
        <SmallDevices warning='This item is not available at the moment' />
        <HighTechDevices />
        <Comments />
      </Root>
      </>
    </Provider>
  );
}

export default App;
