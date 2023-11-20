import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/navigation/navbar';
import Sidebar from './components/navigation/sidebar';
import ListPage from './pages/listPage';
import BoardPage from './pages/boardPage';
import CalendarPage from './pages/calendarPage';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/list" element={<ListPage />}/>
      <Route path="/board" element={<BoardPage />} />
      <Route path="/calendar" element={<CalendarPage />} />
      </Routes>

      <Fragment>
        <Navbar title="Navbar" />
        <div className='body'>
          <Sidebar title="Sidebar" />
        </div>
      </Fragment>
    </Router>
  );
}

export default App;
