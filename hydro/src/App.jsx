
import './App.css'
import { Navbar } from './components/Navbar/Navbar'
import {Routes, Route} from 'react-router-dom'
import { InfoData } from './components/InfoData'
import Home from './pages/Home'
function App() {
 

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={ <Home/> }/>
        <Route path='/infodata/:id' element={<InfoData/>} />
        
      </Routes>
    </div>
  )
}

export default App
