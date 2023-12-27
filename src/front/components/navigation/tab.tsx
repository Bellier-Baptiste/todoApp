import {FunctionComponent} from 'react';

type Props = {
    label: string;
    style?: React.CSSProperties;
    onMouseEnter?: (event: MouseEvent) => void;
    onMouseLeave?: (event: MouseEvent) => void;
};

const Tab: FunctionComponent<Props> = (props: Props) => {
    return (
        <div className="tab" style={props.style}>{props.label}</div>
    );
};

export default Tab;