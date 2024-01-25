import { Link, useNavigate } from 'react-router-dom';
import Form from '../components/content/form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleLeft } from '@fortawesome/free-regular-svg-icons';
import Colors from '../colors/colors';
import { useDarkMode } from '../contexts/darkModeContext';



const NewTaskPage = () => {
    const navigate = useNavigate();
    const { isDarkMode } = useDarkMode();

    const colors = Colors();

    const divStyle: React.CSSProperties = {
        backgroundColor: isDarkMode ? colors.darkCharcoal : colors.beige,
        width: '100vw',
        height: '100vh',
    };

    const style: React.CSSProperties = {
        marginRight: '650px', 
        fontSize: '20px', 
        color: isDarkMode ? colors.amethyst : colors.coffee,
    };

    return (
        <div style={divStyle}>
            <Link onClick={() => navigate(-1)} to={''}>
                <p style={style}><FontAwesomeIcon icon={faCircleLeft} /></p>            
            </Link>
            <Form/>
        </div>
    );
  };
  
  export default NewTaskPage;
  