import { combineReducers } from 'redux'
import authReducer from './modules/auth/reducers'

const rootReducer = combineReducers({
    authReducer,
})

export default rootReducer