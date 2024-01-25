import {FunctionComponent, MouseEventHandler} from 'react';

type Props = {
    label: string;
    style?: React.CSSProperties;
    onMouseEnter?: (event: MouseEvent) => void;
    onMouseLeave?: (event: MouseEvent) => void;
    onClick?: MouseEventHandler<HTMLDivElement>;
};

const Tab: FunctionComponent<Props> = (props: Props) => {
    return (
        <div className="tab" style={props.style} onClick={props.onClick}>{props.label}</div>
    );
};

export default Tab;