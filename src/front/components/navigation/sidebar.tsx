import { FunctionComponent } from "react";
import Tab from "./tab";


type Props = {
    title: string;
}

const Sidebar: FunctionComponent<Props> = (props: Props) => {
    return ( 
        <div className="sidebar"> 
            <h1>{props.title} </h1>
            <span className="sidebar-body">
                <Tab label="Tab1"></Tab>
                <Tab label="Tab2"></Tab>
                <Tab label="Tab3"></Tab>
            </span>
        </div>
    );
};

export default Sidebar;