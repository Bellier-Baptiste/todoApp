import { Link } from 'react-router-dom';
import Form from '../components/content/form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleLeft } from '@fortawesome/free-regular-svg-icons';



const NewTaskPage = () => {

    return (
        <div>
            <Link to='/board'>
                <p style={{ marginRight: '650px', fontSize: '20px', color: 'white'}}><FontAwesomeIcon icon={faCircleLeft} /></p>            
            </Link>
            <Form/>
        </div>
    );
  };
  
  export default NewTaskPage;
  