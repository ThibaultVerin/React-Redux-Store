import { createStore } from 'redux';
import smallDeviceReducer from './SmallDevices/ReducerSmallDevices';

const store = createStore(smallDeviceReducer);

export default store;
console.log(store);