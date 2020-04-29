import { createStore } from "redux";
import { carReducer } from "./reducers/carReducer";


export const store = createStore(
carReducer,
);