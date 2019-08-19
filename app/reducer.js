import {combineReducers} from 'redux';
import feedsReducer from './screens/feeds/reducer'

 const reducers = combineReducers({
    feeds: feedsReducer,
});
export default reducers