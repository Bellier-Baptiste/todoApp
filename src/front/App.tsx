import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import ListPage from './pages/listPage';
import BoardPage from './pages/boardPage';
import CalendarPage from './pages/calendarPage';
import NewTaskPage from './pages/newTaskPage';
import LoginPage from './pages/loginPage';
import TaskDetailsPage from './pages/taskDetailsPage';
import SignInPage from './pages/signInPage';
import { UserProvider } from './contexts/userContext';
import TodayPage from './pages/todayPage';
import ImportExportPage from './pages/importExportPage';

function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/list" element={<ListPage />}/>
          <Route path="/board" element={<BoardPage />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/newTask" element={<NewTaskPage />} />
          <Route path="/task/:id" element={<TaskDetailsPage />} />
          <Route path="/today" element={<TodayPage />} />
          <Route path="/data" element={<ImportExportPage />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
