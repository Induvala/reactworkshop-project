import { createStore } from "redux";
import ListReducer from "../reducer/reducer";

let store = createStore(ListReducer)

export default store