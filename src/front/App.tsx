import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import ListPage from './pages/listPage';
import BoardPage from './pages/boardPage';
import CalendarPage from './pages/calendarPage';
import NewTaskPage from './pages/newTaskPage';
import LoginPage from './pages/loginPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/list" element={<ListPage />}/>
        <Route path="/board" element={<BoardPage />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/newTask" element={<NewTaskPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
