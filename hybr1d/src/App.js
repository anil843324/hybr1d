
import './App.css';
import Navbar from './components/Navbar/Navbar';
import SearchData from './components/SearchData';
import { Route,Routes} from "react-router-dom"
import InfoData from './components/InfoData';
function App() {


  return (
    <div >
       
       <Navbar/>
       
      <Routes>
     
       <Route path='/' element={  <SearchData/> }/>
      
       <Route path='/infoData/:id' element={<InfoData />} />
       
     
       </Routes>      
    </div>
  );
}

export default App;
