import {combineReducers} from "redux"
import favoriteReducers from "./favoriteReducers"

const rootReducer = combineReducers({
    favorites: favoriteReducers
})

export default rootReducer