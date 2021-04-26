import { createStore, combineReducers } from 'redux';
import smallDeviceReducer from './SmallDevices/ReducerSmallDevices';
import hightTechDevicesReducer from './HighTechDevices/ReducerHighTechDevices'

const rootReducer = combineReducers({
    smallDevices: smallDeviceReducer,
    highTechDevices: hightTechDevicesReducer
});



const store = createStore(rootReducer);

export default store;
console.log(store);