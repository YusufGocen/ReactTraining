import './App.css'
import {Routes,Route} from 'react-router-dom'
import Home from './Componets/Home'
import About from './Componets/About'
import Menu from './Componets/Menu'
import Contact from './Componets/Contact'
import Navbar from './Componets/Navbar'
import Footer from './Componets/Footer'

function App() {
  return ( 
    <div>
      <Navbar/>

      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/about' exact element={<About/>}/>
        <Route path='/menu' exact element={<Menu/>}/>
        <Route path='/contact' exact element={<Contact/>}/>
      </Routes>
       
      <Footer/>
    </div>
   );
}

export default App;
