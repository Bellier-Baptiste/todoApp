import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Navbar from '../components/navigation/navbar';
import { useDarkMode } from '../contexts/darkModeContext';
import Colors from '../colors/colors';
import { tasks } from '../bdd/database';
import ListItem from '../components/content/listItem';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const CalendarPage = () => {
  const { isDarkMode } = useDarkMode();
  let selectedDayTasks = tasks;

  const [selectedDay, setSelectedDay] = useState(new Date());
  const [ isHovered, setIsHovered ] = useState<boolean>(false);

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

  const dayColor: React.CSSProperties = {
        color: isDarkMode ? colors.amethyst : colors.beige,
    };

  const addButtonStyle: React.CSSProperties = {
    backgroundColor: isDarkMode ? isHovered ? colors.black : colors.darkSlateGray : isHovered ? colors.lightCoffee : colors.coffee,
    color: isDarkMode ? colors.amethyst : colors.black,
    marginBottom: '10px',  
  };

  return (
      <div style={{ width: '100%', height: '100%' }}>
          <Navbar showSearchInput={false} />
          <br />
          <div style={divStyle}>
              <h2>Select a date</h2>
              <div style={dayColor}>
              <Calendar
                  className={`calendar custom-calendar ${isDarkMode ? 'dark-calendar' : ''}`}
                  onChange={handleDayClick}
                  value={selectedDay}
                  calendarType="US"
                  locale="en-US"
                  selectRange={false}
                  nextLabel=">"
                  prevLabel="<"
                  next2Label=">>"
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
              /></div>
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
              <Link to="/newTask">
                <Button style={addButtonStyle} onMouseEnter={() => setIsHovered(true)} 
                        onMouseLeave={() => setIsHovered(false)}>
                  Add
                </Button>
              </Link> 
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
