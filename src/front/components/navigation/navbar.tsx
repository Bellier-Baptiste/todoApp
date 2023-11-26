import {FunctionComponent} from 'react';
import { useUser } from '../../userContext';

type Props = {
    title: string;
}


const Navbar: FunctionComponent<Props> = (props: Props) => {
    const { username } = useUser();
    console.log(username);
    
    return (
        <div className="navbar">
            <h1>{props.title}</h1>
        </div>
    );
};

export default Navbar;
