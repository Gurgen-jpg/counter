import {combineReducers, createStore} from "redux";
import {counterReducer} from "./counterReducer";
import {loadState, saveSettings, saveState} from "../Storage/LocalstorageUtils";


const rootReducer = combineReducers(
    {
        counter: counterReducer
    }
)




export const store = createStore(rootReducer, loadState())

console.log(store.getState().counter)
//подписка на изменения стейта
store.subscribe(() => {
    console.log()
    saveState({
        counter: store.getState().counter
    })
    saveSettings({settings: store.getState().counter.settings})
})



export type AppStateType = ReturnType<typeof rootReducer>