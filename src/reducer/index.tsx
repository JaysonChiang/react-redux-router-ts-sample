import { combineReducers } from 'redux'
import {value} from './value'

const rootReducer = combineReducers({counter:value})

export default rootReducer