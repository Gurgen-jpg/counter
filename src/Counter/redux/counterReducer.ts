export const InitialState = {
    currValue: 0,
    maxValue: 1,
    startValue: 0,
    error: false,

}
export type InitialStateType = typeof InitialState


export const counterReducer = (state: InitialStateType = InitialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "INC-VALUE": {
            return {
                ...state, currValue: state.currValue + 1
            }
        }
        case "SET-START-VALUE": {
            return {
                ...state, startValue: action.newStartValue
            }
        }
        case "SET-MAX-VALUE": {
            return {
                ...state, maxValue: action.newMaxValue
            }
        }
        case "RESET-VALUE": {
            return {
                ...state, currValue: state.startValue
            }
        }
        case "SET-ERROR": {
            return {...state, error: action.errorValue}
        }
        default:
            return state
    }
}


export const incValueAC = () => ({type: 'INC-VALUE'} as const)
export const setStartAC = (newStartValue: number) => ({
    type: 'SET-START-VALUE',
    newStartValue
} as const)
export const setMaxAC = (newMaxValue: number) => ({
    type: 'SET-MAX-VALUE',
    newMaxValue
} as const)
export const resetAC = () => ({
    type: 'RESET-VALUE',
} as const)
export const setErrorAC = (errorValue: boolean) => ({type: 'SET-ERROR', errorValue} as const)


export type incValueACType = ReturnType<typeof incValueAC>
export type setStartACType = ReturnType<typeof setStartAC>
export type setMaxACType = ReturnType<typeof setMaxAC>
export type resetACType = ReturnType<typeof resetAC>
export type setErrorACType = ReturnType<typeof setErrorAC>


export type ActionType = incValueACType | setStartACType | setMaxACType | resetACType | setErrorACType