import './App.css'
import {Routes ,Route} from 'react-router-dom'
import Login from './Components/Login'
import Register from './Components/Register'

function App() {
  return ( 
    <div>
      <Routes>
        <Route path='/' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>

    </div>
   );
}

export default App;