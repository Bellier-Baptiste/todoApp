import { FunctionComponent, ReactNode } from 'react';
import { useDarkMode } from '../../contexts/darkModeContext';
import Colors from '../../colors/colors';

type Props = {
  label: string;
  size?: string;
  height?: string;
  bColor?: string;
  children?: ReactNode;
};

const Section: FunctionComponent<Props> = (props: Props) => {
    const { isDarkMode } = useDarkMode();

    const colors = Colors();

    const sectionStyle = {
        width: props.size ?? '100%',
        height: props.height ?? 'auto',
        backgroundColor: props.bColor ?? 'transparent',
        borderRadius: '30px',
        color: isDarkMode ? colors.black : colors.ivory,
    };

    const lineStyle: React.CSSProperties = {
        backgroundColor: isDarkMode ? colors.black : colors.ivory,
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
