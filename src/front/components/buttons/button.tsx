import { FunctionComponent } from 'react';

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