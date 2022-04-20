import React, {useEffect} from 'react';
import './App.css';

import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./Counter/redux/store";
import {incValueAC, InitialStateType, resetAC} from "./Counter/redux/counterReducer";
import {DisplayWithRedux} from "./Counter/DisplayWithRedux";
import {CounterWithRedux} from "./Counter/CounterWithRedux";


export const AppWithRedux = () => {
//Достать стейт и диспатчи
    let value = useSelector<AppStateType, InitialStateType>(state => state.counter);
    let dispatch = useDispatch();

    useEffect(() => {

    }, [value])


//Диспатчу редюсеры
    const incValue = () => {
        dispatch(incValueAC())
    }
    const reset = () => {
        dispatch(resetAC())
    }


    return <div>
        <DisplayWithRedux
            value={value.currValue}
            maxValue={value.settings.maxValue}
            startValue={value.settings.startValue}

        />
        <CounterWithRedux
            incValue={incValue}
            reset={reset}
            value={value.currValue}
            maxValue={value.settings.maxValue}
            startValue={value.settings.startValue}
        />


    </div>

}
