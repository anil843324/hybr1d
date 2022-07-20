
import './App.css'
import { Navbar } from './components/Navbar/Navbar'
import {Routes, Route} from 'react-router-dom'
import { InfoData } from './components/InfoData'
function App() {
 

  return (
    <div className="App">
      // routes in progress
      <Routes>
        <Route path='/' element={<Navbar/>}/>
        <Route path='/infodata/:id'  element={<InfoData/>}/>
      </Routes>
    </div>
  )
}

export default App
