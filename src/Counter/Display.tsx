import React from 'react';
import s from "./Counter.module.css";


type DisplayPropsType = {
    counter: number,
    maxValue: number
    error?: boolean
}

export const Display: React.FC<DisplayPropsType> = ({counter, maxValue, error}) => {
    return (
        <div>
            {!error
                ? <div className={`${counter === maxValue ? s.max : s.notMax} ${s.btn}`}><p>{counter}</p></div>
                : <div className={s.errorDisplay}> invalid input values </div>
            }
        </div>
    );
};

