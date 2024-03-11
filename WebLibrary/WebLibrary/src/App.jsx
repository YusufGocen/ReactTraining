import './App.css'
import { useEffect,useState } from 'react';
import axios from 'axios';
import Librarys from './Librarys';


function App() {
  const [Library, setLibrary] = useState([]);
  const RemoveLibrary=(id) => {
    const AfterDelete=Library.filter((Library)=>Library.id !==id);
    setLibrary(AfterDelete);
  }
  const FetchLibrary= async() => {
      const response= await axios.get('http://localhost:3000/JavaScript-Library')
      setLibrary(response.data);
  }
  useEffect(()=>{
    FetchLibrary();
  },[])
  return (  
    <div>  
      <div>
        {Library.length===0 ? (
          <div className='Refresh'>
            <h2 >All The Clear</h2>
            <button className='delete' onClick={() => {FetchLibrary()}}>Refresh</button>
          </div>
        ) :  <Librarys Library={Library} RemoveLibrary={RemoveLibrary} />  };
      </div>
    
    </div>
  );
}

export default App;
