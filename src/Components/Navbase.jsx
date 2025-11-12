import { Link } from "react-router-dom"
import CarrButton from "./CartButton"

const Navbase = ({user, cart}) => {
  return (
    <>
    <Link className="text-2xl font-bold text-emerald-400 items-center space-x-2.5 flex" to="/">
    Libre Mercado
    </Link>

    <nav className="flex flex-wrap items-center gap-4" >
        <Link className="text-gray-300 hover:text-emerald-400 transition duration-300 ease-in-out" to="/">
        Home
        </Link>
        <Link className="text-gray-300 hover:text-emerald-400 transition duration-300 ease-in-out" to="/login">
        Login
        </Link>
        <Link className="text-gray-300 hover:text-emerald-400 transition duration-300 ease-in-out" to="/SignUp">
        Registrarse
        </Link>
     <CarrButton user={user} cart={cart} />
    </nav>
 </>


  )

}

export default Navbase