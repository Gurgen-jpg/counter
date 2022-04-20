import React from 'react';
import s from "./Counter.module.css";

type PropsType ={
    value:number
    maxValue: number
    startValue: number
}
export const DisplayWithRedux = ({value, maxValue, startValue}:PropsType) => {
    console.log('Display')
    let err;
    (maxValue < 1) || (maxValue < startValue) || (startValue < 0) ? err = true : err = false

    return (
        <div className={s.wrapper}>
            <div className={s.display}>
                {!err
                    ? <div className={`${value === maxValue ? s.max : s.notMax} ${s.btn}`}><p>{value}</p></div>
                    : <span className={s.errorDisplay}> invalid input values </span>
                }
            </div>
        </div>
    );
};

