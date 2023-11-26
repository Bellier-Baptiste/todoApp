import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Navbar from '../components/navigation/navbar';
import Sidebar from '../components/navigation/sidebar';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const CalendarPage = () => {
    const [value, onChange] = useState<Value>(new Date());

    return (
        <div>
            <Navbar title='Navbar'/>
            <Sidebar title='Sidebar'/>
            <div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <h2>Selectionnez une date</h2>
                    <Calendar
                        onChange={onChange}
                        value={value}
                    />
                </div>
            </div>
        </div>
        
    );
  };
  
  export default CalendarPage;
  