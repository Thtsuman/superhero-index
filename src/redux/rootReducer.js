import { combineReducers } from "redux";
import heroReducer from "./states/Hero/heroReducer";

const rootReducer = combineReducers({
    hero: heroReducer
})

export default rootReducer