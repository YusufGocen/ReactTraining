import './App.css'
import {Routes,Route} from 'react-router-dom'
import Home from './Home';
import Links from './Link';
import About from './About';

function App() {
  return ( 
    <div>
      <Links/>
      <Routes>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
      </Routes>
    </div>
   );
}

export default App;