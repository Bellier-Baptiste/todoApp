import { tasks } from "../bdd/database";
import Navbar from "../components/navigation/navbar";
import Sidebar from "../components/navigation/sidebar";

const ListPage = () => {
    const userTasks = tasks.filter(task => task.assigned_to === `User${1}`);
    console.log("User tasks : "+ userTasks);

    return (
        <div>
            <Navbar title='Navbar'/>
            <Sidebar title='Sidebar'/>
            <h1>List Page</h1>
            <ul>
                {userTasks.map(task => (
                    <li key={task.id}>{task.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default ListPage;
