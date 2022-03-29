import React, {useState} from 'react';
import {Button} from "./Button";
import s from './Counter.module.css'
import {Display} from "./Display";
import {SettingsDisplay} from "./SettingsDisplay";


type CountPropsType = {
    counter: number
    callback: () => void
    callbackReset: () => void
    maxValue: number
    startValue: number
    setMaxValue: (e: number) => void
    setStartValue: (e: number) => void
    setButton: () => void
    error: boolean
}

export const Counter: React.FC<CountPropsType> = ({
                                                      counter, callback, callbackReset,
                                                      maxValue, startValue, ...restProps
                                                  }) => {




    return (
        <div>
            <div className={s.wrapper}>
                <div className={s.display}><Display counter={counter} maxValue={maxValue} error={restProps.error}/></div>
                <Button title={'addCount'}
                        callback={callback}
                        disabled={(counter >= maxValue ? true : false) || (restProps.error)}
                        className={(counter >= maxValue || (restProps.error)) ? s.plusBottonDead : s.plusBotton}
                />
                <Button title={'reset'}
                        callback={callbackReset}
                        disabled={(counter === startValue ? true : false) || (restProps.error)}
                        className={(counter === startValue || (restProps.error)) ? s.resetButtonDead : s.resetButton}
                />
            </div>
            <div className={s.wrapper}>
                <div className={s.display}><SettingsDisplay
                    maxValue={maxValue}
                    startValue={startValue}
                    setMaxValue={restProps.setMaxValue}
                    setStartValue={restProps.setStartValue}
                /></div>
                <Button title={'Set value'}
                        callback={restProps.setButton}
                        disabled={restProps.error}
                        className={(restProps.error) ? s.plusBottonDead : s.plusBotton}

                />
            </div>
        </div>
    );
};

