import {FunctionComponent} from 'react';

type Props = {
    label: string;
    style?: React.CSSProperties;
};

const Tab: FunctionComponent<Props> = (props: Props) => {
    return (
        <div className="tab" style={props.style}>{props.label}</div>
    );
};

export default Tab;