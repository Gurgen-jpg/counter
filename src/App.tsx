import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./Counter/Counter";


function App() {


    const incrementValue = 1;


    // Settings & values
    const [error, setError] = useState(false)

    const [settingValues, setSettings] = useState(
        {
            startValue: Number(localStorage.getItem("startValue")),
            maxValue: Number(localStorage.getItem("MaxValue"))})

    const [counter, setCounter] = useState<number>(Number(localStorage.getItem("startValue")))

    useEffect(()=> {
        if ((settingValues.startValue >= settingValues.maxValue) || (settingValues.startValue < 0) || (settingValues.maxValue < 0)) {
            setError(true)
        } else setError(false)
    }, [settingValues] )
    const setStartValue = (newStartValue: number) => {
        setSettings({...settingValues, startValue: newStartValue})
    }

    const setMaxValue = (newMaxValue: number) => {
        setSettings({...settingValues, maxValue: newMaxValue})
    }
    const buttonSet = () => {
        localStorage.setItem("startValue", settingValues.startValue.toString())
        localStorage.setItem("MaxValue", settingValues.maxValue.toString())
        setCounter(Number(localStorage.getItem("startValue")))
    }

    const plus = () => {
        if (counter < settingValues.maxValue) setCounter(counter + incrementValue)
    }

    // Reset counter to 0
    const resetCounter = () => {
        setCounter( settingValues.startValue)
    }

    console.log('ERROR ^ : ',error)
    return (
        <Counter counter={counter}
                 callback={plus}
                 callbackReset={resetCounter}
                 maxValue={settingValues.maxValue}
                 startValue={settingValues.startValue}
                 setMaxValue={setMaxValue}
                 setStartValue={setStartValue}
                 setButton={buttonSet}
                 error={error}
        />
    )
}

export default App;
