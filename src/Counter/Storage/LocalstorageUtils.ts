// localStorage


import {AppStateType} from "../redux/store";

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState === null) {
            return {
                counter: {
                    currValue: 0,
                    settings : {
                        startValue: 0,
                        maxValue: 1,
                    }
                }
            }
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


