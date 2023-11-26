import {FunctionComponent} from 'react';

type Props = {
    title: string;
}


const Navbar: FunctionComponent<Props> = (props: Props) => {
    return (
        <div className="navbar">
            <h1>{props.title}</h1>
        </div>
    );
};

export default Navbar;
