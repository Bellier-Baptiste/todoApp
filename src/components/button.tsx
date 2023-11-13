/*
// Ma version

import React from 'react';

type Props = {
    text : string
}

const Button: React.FC<Props> = ({ text }) => {
    return (
        <button> {text}</button>
    )
}

export default Button;
*/

// Version Alex

import React, { FunctionComponent } from 'react';

type Props = {
    label: string;
    onClick? : () => void;  
}


const Button: FunctionComponent<Props> = (props: Props) => {
    return (
        <button className="btn" onClick={props.onClick}>{props.label} </button>
    );
};

export default Button;