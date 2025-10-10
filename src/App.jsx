import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import HomePage from './Pages/HomePage'
import SingUpPage from './Pages/SingUpPage'
import LogInPage from './Pages/LogInPage'
import Navbar from './Components/navbar';
import AuthStatus from './Components/AuthStatus';
import Dashboard from './Components/DashBoard';
import CarrButton from './Components/CartButton';


const App = () => {

  const userLogin = false;

 return (
     
     <Router>
       <Navbar/>      
          <AuthStatus />
          <Dashboard />
          <CarrButton user={true} cart={['pc','teclado','mouse']} />
          <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/singup" element={!userLogin ? <SingUpPage /> : <Navigate to="/" />}/>
          <Route path="/login" element={!userLogin ? <LogInPage /> : <Navigate to="/" />} />
        </Routes>
      </Router>

    

  
 );

 
};

export default App;