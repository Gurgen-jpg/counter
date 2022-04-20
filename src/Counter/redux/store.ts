import {combineReducers, createStore} from "redux";
import {counterReducer} from "./counterReducer";
import {loadState, saveState} from "../Storage/LocalstorageUtils";


const rootReducer = combineReducers(
    {
        counter: counterReducer
    }
)




export const store = createStore(rootReducer, loadState())

//подписка на изменения стейта
// store.subscribe(() => {
//     saveState({
//         counter: store.getState().counter
//     })
// })



export type AppStateType = ReturnType<typeof rootReducer>