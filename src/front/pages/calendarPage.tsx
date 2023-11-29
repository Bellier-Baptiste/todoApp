import { SetStateAction, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Navbar from '../components/navigation/navbar';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const CalendarPage = () => {
    const [value, onChange] = useState<Value>(new Date());

    const [selectedDay, setSelectedDay] = useState(new Date());
    const [focusedDay, setFocusedDay] = useState(new Date());
    const [tasksCount, setTasksCount] = useState(3); // Remplacez cela par le véritable nombre de tâches du jour

    const handleDayClick = (selectedDay: SetStateAction<Date>, focusedDay: SetStateAction<Date>) => {
        if (selectedDay.toString() !== selectedDay.toString()) {
          // Afficher les tâches du jour sélectionné
          setSelectedDay(selectedDay);
          setFocusedDay(focusedDay);
          setTasksCount(3);
        }
      };

    const divStyle: React.CSSProperties = {
        color: 'black',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '75vw', 
        height: '75vh',
        backgroundColor: 'blue',
        margin: 'auto',
    };


    return (
        <div>
            <Navbar />
            <div style={divStyle}>
                <h2>Select a date</h2>
                <Calendar
                    onChange={handleDayClick}
                    value={selectedDay}
                    activeStartDate={focusedDay}
                    calendarType="US"
                    calendarStyle="black"
                    selectRange={false}
                    nextLabel="Next"
                    prevLabel="Previous"
                    locale="us-US"
                    tileClassName="custom-day"
                    tileContent={({ date }) => {
                        return (
                          <>
                            {
                              <div className="tasks-count-badge">
                                <p>{tasksCount}</p>
                              </div>
                            }
                          </>
                        );
                      }}
                    /*tileContent={({ date }) => {
                    // Personnalisez le contenu des tuiles si nécessaire
                    // Vous pouvez afficher des événements ou d'autres informations sur chaque jour
                    }}*/
                />
            </div>
        </div>
        
    );
};
  
export default CalendarPage;
  