import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import ListPage from './pages/listPage';
import BoardPage from './pages/boardPage';
import CalendarPage from './pages/calendarPage';
import NewTaskPage from './pages/newTaskPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/list" element={<ListPage />}/>
        <Route path="/board" element={<BoardPage />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/newTask" element={<NewTaskPage />} />
      </Routes>
    </Router>
  );
}

export default App;
