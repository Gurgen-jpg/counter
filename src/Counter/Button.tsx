import React from 'react';

type ButtonTypeProps = {
    title: string
    callback: () => void
    disabled?: boolean
    className?:string
}

export const Button: React.FC<ButtonTypeProps> = ({title, callback, ...restProps}) => {
    const onclickButtonHandler = () => {
        callback()
    }
    return (
        <button
            onClick={onclickButtonHandler}
            disabled={restProps.disabled}
            className={restProps.className}
        >{title}</button>
    );
};

