import { combineReducers } from 'redux-immutable';
import { reducer as headerReducer} from '../common/header/store';
import { reducer as homeReducer } from '../page/Home/store';
import { reducer as detailReducer } from '../page/Detail/store';
import { reducer as LoginReducer } from '../page/Login/store';

export default combineReducers({
    header: headerReducer,
    home: homeReducer,
    detail: detailReducer,
    login: LoginReducer,
});
