import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Navbar from '../components/navigation/navbar';
import { useDarkMode } from '../contexts/darkModeContext';
import Colors from '../colors/colors';
import { tasks } from '../bdd/database';
import ListItem from '../components/content/listItem';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const CalendarPage = () => {
  const { isDarkMode } = useDarkMode();
  let selectedDayTasks = tasks;

  const [selectedDay, setSelectedDay] = useState(new Date());

  const colors = Colors();

  const divStyle: React.CSSProperties = {
      color: isDarkMode ? colors.amethyst : colors.coffee,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100vw',
      height: '100%',
      backgroundColor: isDarkMode ? colors.darkCharcoal : colors.beige,
      margin: 'auto',
  };

  return (
      <div style={{ width: '100%', height: '100%' }}>
          <Navbar showSearchInput={false} />
          <br />
          <div style={divStyle}>
              <h2>Select a date</h2>
              <Calendar
                  className='calendar custom-calendar'
                  onChange={handleDayClick}
                  value={selectedDay}
                  calendarType="US"
                  selectRange={false}
                  nextLabel=">"
                  prevLabel="<"
                  next2Label=">>" // Nouvelle propriété pour le bouton suivant
                  prev2Label="<<"
                  tileClassName="custom-day"
                  tileContent={({ date, view }) => (
                    view === 'month' && getTasksCountForDay(date) > 0 ? (
                      <div className="tasks-count-badge">
                        <p className='pastille'>{getTasksCountForDay(date)}</p>
                      </div>
                    )
                    : null
                  )}
              />
              {getTasksCountForDay(selectedDay) == 0 ?
                <h2>{formatDate(selectedDay)} : No task</h2>
                : getTasksCountForDay(selectedDay) == 1 ?
                  <h2>{formatDate(selectedDay)} : {getTasksCountForDay(selectedDay)} task </h2>
                : <h2>{formatDate(selectedDay)} : {getTasksCountForDay(selectedDay)} tasks</h2>
              }
              {selectedDayTasks.map(task => (
                <ListItem 
                  taskName={task.title} 
                  assignedTo={task.assigned_to} 
                  deadline={task.due_date.toLocaleDateString()} 
                  creator={task.created_by} 
                  state={task.state ?? 'Incomplete'} 
                  id={task.id}
                />
              ))}
          </div>
      </div>
  );

  function getTasksCountForDay(date: Date) {
    const dayTasks = tasks.filter(task => {
        const taskDueDate = task.due_date.toLocaleDateString();
        return taskDueDate === date.toLocaleDateString();
    });
    selectedDayTasks = dayTasks
    if (dayTasks.length > 0) {
        return dayTasks.length;
    } else {
      return 0;
    }
  }

  function handleDayClick(value: Value) {
      if (value instanceof Date) {
          setSelectedDay(value);
      }
  }
  
  function formatDate(date: Date): string {
    return date.toLocaleDateString('us-US', { day: 'numeric', month: 'long' });
  }
};

export default CalendarPage;
