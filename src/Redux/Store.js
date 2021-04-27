import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import smallDeviceReducer from './SmallDevices/ReducerSmallDevices';
import hightTechDevicesReducer from './HighTechDevices/ReducerHighTechDevices'
import commentReducer from './Comments/ReducerComments';


const rootReducer = combineReducers({
    smallDevices: smallDeviceReducer,
    highTechDevices: hightTechDevicesReducer,
    commentReducer: commentReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;