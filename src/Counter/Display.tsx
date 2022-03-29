import React from 'react';
import s from "./Counter.module.css";
import {VersionType} from "./Counter";


type DisplayPropsType = {
    counter: number,
    maxValue: number
    error?: boolean
    version: VersionType

}

export const Display: React.FC<DisplayPropsType> = ({version,counter, maxValue, error}) => {
    return (
        <div>
            {!error
                ? <div className={`${counter === maxValue ? s.max : s.notMax} ${s.btn}`}><p>{counter}</p></div>
                : <span className={s.errorDisplay}> invalid input values </span>
            }
        </div>
    );
};

