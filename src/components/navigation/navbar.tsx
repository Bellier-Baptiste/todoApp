import {FunctionComponent} from 'react';

type Props = {
    title: string;
}


const Navbar: FunctionComponent<Props> = (props: Props) => {
    return (
        <div className="navbar">
            {props.title}
        </div>
    );
};

export default Navbar;
