import React, {useState} from 'react';
import './App.css';

import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./Counter/redux/store";
import {incValueAC, InitialStateType, resetAC, setErrorAC, setMaxAC, setStartAC} from "./Counter/redux/counterReducer";
import {DisplayWithRedux} from "./Counter/DisplayWithRedux";
import {CounterWithRedux} from "./Counter/CounterWithRedux";


export const AppWithRedux = () => {
//Достать стейт и диспатчи
    let value = useSelector<AppStateType, InitialStateType>(state => state.counter);
    let dispatch = useDispatch();


//Диспатчу редюсеры
    const incValue = () => {
        dispatch(incValueAC())
    }
    const setStart = (e: string) => {
        dispatch(setStartAC(Number(e)))
    }
    const setMax = (e: string) => {
        dispatch(setMaxAC(Number(e)))
    }
    const reset = () => {
        dispatch(resetAC())
    }


    return <div>
        <DisplayWithRedux
            value={value.currValue}
            maxValue={value.maxValue}
            startValue={value.startValue}
        />
        <CounterWithRedux
            startValue={value.startValue}
            maxValue={value.maxValue}
            incValue={incValue}
            setStart={setStart}
            setMax={setMax}
            reset={reset}
            value={value.currValue}
        />


    </div>

}
