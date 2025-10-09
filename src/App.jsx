import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import HomePage from './Pages/HomePage'
import SingUpPage from './Pages/SingUpPage'
import LogInPage from './Pages/LogInPage'
import Navbar from './Components/navbar';


const App = () => {

  const userLogin = false;

 return (

     <Router>
       <Navbar/>      
          <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/singup" element={!userLogin ? <SingUpPage /> : <Navigate to="/" />}/>
          <Route path="/contact" element={!userLogin ? <LogInPage /> : <Navigate to="/" />} />
        </Routes>
      </Router>


  
 );

 
};

export default App;