import { FunctionComponent } from "react";
import Tab from "./tab";
import { Link } from "react-router-dom";


type Props = {
    title: string;
}

const Sidebar: FunctionComponent<Props> = (props: Props) => {
    return ( 
        <div className="sidebar"> 
            <h1>{props.title} </h1>
            <span className="sidebar-body">
                <Link to="/list" className="link-style">
                    <Tab label="List" />
                </Link>
                <Link to="/board" className="link-style">
                    <Tab label="Board" />
                </Link>
                <Link to="/calendar" className="link-style">
                    <Tab label="Calendar" />
                </Link>
            </span>
        </div>
    );
};

export default Sidebar;
