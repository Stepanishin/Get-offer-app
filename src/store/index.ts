import { combineReducers, createStore    } from "redux";
import { getLanguageReducer } from "./languageReducer"


const rootReducer = combineReducers({
    getLanguageReducer
})


export const store = createStore(rootReducer)