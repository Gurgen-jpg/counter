import React, {ChangeEvent} from 'react';
import s from "./Counter.module.css";

type PropsType = {
    maxValue: number
    startValue: number
    incValue: () => void
    setStart: (e: string) => void
    setMax: (e: string) => void
    reset: () => void
    value: number
}

export const CounterWithRedux = ({
                                     incValue, setStart, setMax, reset,
                                     startValue, maxValue, value
                                 }: PropsType) => {

    console.log('Counter')
    const onChangeMaxHandle = (e: ChangeEvent<HTMLInputElement>) => {
        setMax(e.currentTarget.value)
    }
    const onChangeStartHandle = (e: ChangeEvent<HTMLInputElement>) => {
        setStart(e.currentTarget.value)
    }

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
        </div>
    );
};

