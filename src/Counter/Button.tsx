import React from 'react';

type ButtonTypeProps = {
    title: string
    callback: () => void
    disabled?: boolean
    className?:string
    turnOnnSetting?:(on:boolean) => void
    tunedOn?:boolean
}

export const Button: React.FC<ButtonTypeProps> = ({title, callback, ...restProps}) => {
    const onclickButtonHandler = () => {
        restProps.turnOnnSetting && restProps.turnOnnSetting(!restProps.tunedOn);
        callback();
    }
    return (
        <button
            onClick={onclickButtonHandler}
            disabled={restProps.disabled}
            className={restProps.className}
        >{title}</button>
    );
};

