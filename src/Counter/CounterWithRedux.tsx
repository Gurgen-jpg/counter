import React, {ChangeEvent, useState} from 'react';
import s from "./Counter.module.css";
import {useDispatch} from "react-redux";
import {setMaxAC, setStartAC, setValueAC} from "./redux/counterReducer";

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


    const onChangeMaxHandle = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setMaxAC( Number(e.currentTarget.value)))
    }
    const onChangeStartHandle = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setStartAC(Number(e.currentTarget.value)))
    }
    const onClickSetValue = () => dispatch(setValueAC(startValue, maxValue))

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
            <button onClick={onClickSetValue}>set</button>
        </div>
    );
};

