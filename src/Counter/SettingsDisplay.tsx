import React, {ChangeEvent} from 'react';
type SettingsDisplayType = {
    maxValue: number
    startValue: number
    setMaxValue:(e:number)=>void
    setStartValue:(e:number)=>void
}

export const SettingsDisplay = (props: SettingsDisplayType) => {
    
    const onChangeMaxHandle = (e: ChangeEvent<HTMLInputElement>) => {
        props.setMaxValue(Number(e.currentTarget.value))
    }
    const onChangeStartHandle = (e: ChangeEvent<HTMLInputElement>) => {
        props.setStartValue(Number(e.currentTarget.value))
    }

    return (
        <div>
            max Value
            <input type="number" onChange={onChangeMaxHandle} value={props.maxValue.toString()}/>
            start Value
            <input type="number" onChange={onChangeStartHandle} value={props.startValue.toString()}/>
        </div>
    );
};
