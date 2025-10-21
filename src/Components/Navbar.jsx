import { Link } from "react-router-dom";
import Navbase from "./Navbase";
import Dashboard from "./Dashboard";
import AuthStatus from "./AuthStatus";

const Navbar = () => {

   const user = true
   const cart = ["Pc","Mouse","Teclado"]
   const isAdmin = true

    return(
     
     <nav className="flex flex-wrap place-items-center gap-4 ">

      <Navbase user={user} cart={cart} />
      <Dashboard isAdmin={isAdmin} />
      <AuthStatus user={user} />


      </nav>


    );

};

export default Navbar;