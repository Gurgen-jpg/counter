import {combineReducers, createStore} from "redux";
import {counterReducer} from "./counterReducer";


const rootReducer = combineReducers(
    {
        counter: counterReducer
    }
)



//Работа с LocalStorage
let preloadState;
const checkPreloadState = localStorage.getItem('appState')
if (checkPreloadState) {
    preloadState = JSON.parse(checkPreloadState)
}


export const store = createStore(rootReducer, preloadState)

//подписка на изменения стейта
store.subscribe(() => {
    localStorage.setItem('appState', JSON.stringify(store.getState()))
})



export type AppStateType = ReturnType<typeof rootReducer>