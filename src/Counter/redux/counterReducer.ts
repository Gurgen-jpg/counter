export const InitialState = {
    currValue: 0,
    settings : {
        startValue: 0,
        maxValue: 1,
    }
}
export type InitialStateType = typeof InitialState

export const counterReducer = (state: InitialStateType = InitialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "INC-VALUE": {
            return {
                ...state, currValue: state.currValue + 1
            }
        }

        case "SET-VALUE": {
            return {
                ...state, settings: {...action.settings}
            }
        }
        case "SET-MAX-VALUE": {
            return {
                ...state, settings: {...state.settings, maxValue: action.maxValue}
            }
        }
        case "SET-START-VALUE": {
            return {
                ...state, settings: {...state.settings, startValue: action.startValue}
            }
        }
        case "RESET-VALUE": {
            return {
                ...state, currValue: state.settings.startValue
            }
        }
        default:
            return state
    }
}

export const incValueAC = () => ({type: 'INC-VALUE'} as const)
export const resetAC = () => ({
    type: 'RESET-VALUE',
} as const)
export const setValueAC = (startValue: number, maxValue:number) => ({
  type: 'SET-VALUE',
    settings: {
        startValue,
        maxValue,
    }
} as const)
export const setStartAC = (startValue: number) => ({
    type: 'SET-START-VALUE',
    startValue
}as const)
export const setMaxAC = (maxValue: number) => ({
    type: 'SET-MAX-VALUE',
    maxValue
}as const)

export type setStartACType = ReturnType<typeof setStartAC>
export type setMaxACType = ReturnType<typeof setMaxAC>
export type incValueACType = ReturnType<typeof incValueAC>
export type resetACType = ReturnType<typeof resetAC>
export type setValueACType = ReturnType<typeof setValueAC>



export type ActionType = incValueACType | resetACType | setValueACType | setStartACType | setMaxACType