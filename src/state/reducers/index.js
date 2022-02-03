import { combineReducers } from 'redux'
import userReducer from "../reducers/user/userReducer"


const reducer = combineReducers({
    user: userReducer
})

export default reducer