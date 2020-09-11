import { combineReducers } from 'redux';
import user from './user_reducer';
import searchTerms from './search_reducer'

const rootReducer = combineReducers({
    user,
    searchTerms
});

export default rootReducer;