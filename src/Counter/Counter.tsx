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
export type VersionType = 1.0 | 1.2;
export const Counter: React.FC<CountPropsType> = ({
                                                      counter, callback, callbackReset,
                                                      maxValue, startValue, ...restProps
                                                  }) => {

    const [version, setVersion] = useState<VersionType>(1.0)
    const [turnOn, setTurnOn] = useState<boolean>(false)
    const versionHandler = () => {
        if (version === 1.0) {
            return setVersion(1.2)
        } else return setVersion(1.0)
    }

    return (
        <div>
            <button onClick={versionHandler}>Counter version {version}</button>
            {
                version === 1.0 &&
                <>
                    <div className={s.wrapper}>
                        <div className={s.display}>
                            <Display counter={counter}
                                     maxValue={maxValue}
                                     error={restProps.error}
                                     version={version}
                            />
                        </div>
                        <Button title={'addCount'}
                                callback={callback}
                                disabled={(counter >= maxValue ? true : false) || (restProps.error)}
                                className={(counter >= maxValue || (restProps.error)) ? s.plusBottonDead : s.plusBotton}
                        />
                        <Button title={'reset'}
                                callback={callbackReset}
                                disabled={(counter === startValue ? true : false) || (restProps.error)}
                                className={((counter === startValue || restProps.error)) ? s.resetButtonDead : s.resetButton}
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
                </>
            }
            {
                version === 1.2 &&
                <>
                    <div className={s.wrapper}>
                        {turnOn || restProps.error
                            ? <>
                                <div className={s.display}>
                                    <SettingsDisplay
                                        maxValue={maxValue}
                                        startValue={startValue}
                                        setMaxValue={restProps.setMaxValue}
                                        setStartValue={restProps.setStartValue}
                                    />
                                </div>
                                {restProps.error && <span className={s.errorSpan}>WRONG VALUE</span>}
                            </>
                            : <Display counter={counter}
                                       maxValue={maxValue}
                                       error={restProps.error}
                                       version={version}
                            />
                        }
                        {!turnOn &&
                            <><Button title={'addCount'}
                                      callback={callback}
                                      disabled={(counter >= maxValue ? true : false) || (restProps.error)}
                                      className={(counter >= maxValue || (restProps.error)) ? s.plusBottonDead : s.plusBotton}
                            />
                                <Button title={'reset'}
                                        callback={callbackReset}
                                        disabled={(counter === startValue ? true : false) || (restProps.error)}
                                        className={(counter === startValue || (restProps.error)) ? s.resetButtonDead : s.resetButton}
                                /></>
                        }
                        <Button title={'Set value'}
                                callback={restProps.setButton}
                                turnOnnSetting={setTurnOn}
                                tunedOn={turnOn}
                                disabled={restProps.error}
                                className={(restProps.error) ? s.plusBottonDead : s.plusBotton}
                        />


                    </div>
                </>

            }
        </div>
    );
};

