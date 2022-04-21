import React, {ChangeEvent, useState} from 'react';
import s from "./Counter.module.css";
import {useDispatch, useSelector} from "react-redux";
import {InitialStateType, setMaxAC, setStartAC, setValueAC} from "./redux/counterReducer";
import {saveState} from "./Storage/LocalstorageUtils";
import {AppStateType} from "./redux/store";

type PropsType = {
    maxValue: number
    startValue: number
    incValue: () => void
    reset: () => void
    value: number
}

export const CounterWithRedux = ({
                                     incValue, reset,
                                     startValue, maxValue, value
                                 }: PropsType) => {

    let dispatch = useDispatch()
    const savedState = useSelector<AppStateType, InitialStateType>(state => state.counter)


    const onChangeMaxHandle = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setMaxAC( Number(e.currentTarget.value)))
    }
    const onChangeStartHandle = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setStartAC(Number(e.currentTarget.value)))
    }
    const onClickSetValue = () => dispatch(setValueAC(startValue))




    let err;
    (maxValue < 1) || (maxValue <= startValue) || (startValue < 0) ? err = true : err = false

    return (

        <div className={s.wrapper}>
            <input type="number" value={maxValue.toString()} onChange={onChangeMaxHandle}/> maxValue
            <input type="number" value={startValue.toString()} onChange={onChangeStartHandle}
            /> startValue
            <button onClick={incValue}
                    disabled={value === maxValue}
                    className={err || value === maxValue ? s.plusBottonDead : s.plusBotton}>inc</button>
            <button onClick={reset}
                    className={s.resetButton}>reset
            </button>
            <button onClick={onClickSetValue} disabled={(startValue < 0) || (startValue === maxValue) || (startValue > maxValue)}
                    className={err || value === maxValue ? s.plusBottonDead : s.plusBotton}>set</button>
        </div>
    );
};

