import {FunctionComponent} from 'react';

type Props = {
    label: string;
};

const Tab: FunctionComponent<Props> = (props: Props) => {
    return (
        <div className="tab">{props.label}</div>
    );
};

export default Tab;