import { createStore, combineReducers } from 'redux';
import smallDeviceReducer from './SmallDevices/ReducerSmallDevices';
import hightTechDevicesReducer from './HighTechDevices/ReducerHighTechDevices'
import commentReducer from './Comments/ReducerComments';


const rootReducer = combineReducers({
    smallDevices: smallDeviceReducer,
    highTechDevices: hightTechDevicesReducer,
    commentReducer: commentReducer
});

const store = createStore(rootReducer);

export default store;