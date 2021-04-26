import { createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk';
import { userReducer  as reducer} from './reducers/user.reducer';

export const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk))
);

