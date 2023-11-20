import { Fragment } from 'react'
import './App.css'
import Navbar from './components/navigation/navbar'
import Sidebar from './components/navigation/sidebar'

function App() {
  
  return (
    <Fragment>
      <Navbar title="Navbar"/>
      <div className='body'>
        <Sidebar title="Sidebar"/>
      </div>
    </Fragment>
  )
}

export default App