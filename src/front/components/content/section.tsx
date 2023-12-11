import { FunctionComponent, ReactNode } from 'react';

type Props = {
  label: string;
  size?: string;
  height?: string;
  bColor?: string;
  children?: ReactNode;
};

const Section: FunctionComponent<Props> = (props: Props) => {
    const sectionStyle = {
        width: props.size || '100%',
        height: props.height || 'auto',
        backgroundColor: props.bColor || 'transparent',
        borderRadius: '30px',
        color: 'black',
    };

    const lineStyle: React.CSSProperties = {
        backgroundColor: 'black',
        height: '2px',
    };

    return (
        <div className="section" style={sectionStyle}>
            <h2>{props.label}</h2>
            <div style={lineStyle}/><br/>
            {props.children}
        </div>
    );
};

export default Section;
