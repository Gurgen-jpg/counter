// localStorage


import {AppStateType} from "../redux/store";
import {InitialStateType, SettingsType} from "../redux/counterReducer";

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState === null) {
            // return {
            //     counter: {
            //         currValue: 0,
            //         settings : {
            //             startValue: 0,
            //             maxValue: 1,
            //         }
            //     }
            // }
            return undefined
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};

export const saveState = (state: AppStateType) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch {
        // ignore write errors
    }
};

export const saveCurrent = (currValue: number) => {
    try {
        localStorage.setItem('currValue', JSON.stringify(currValue));
    } catch {
        // ignore write errors
    }
}
export const saveSettings = (state: { settings: {startValue:number , maxValue:number} | AppStateType}) => {
    try {
        localStorage.setItem('startValue', JSON.stringify(state));


    } catch {
        // ignore write errors
    }
};


