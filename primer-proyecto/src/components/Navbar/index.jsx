import "./navbar.css"
import CartWidget from "../CartWidget";

const Navbar = () => {
  return (
    <div className='container'>
      
    <nav className='navPrincipal'>
    <a href="#" className='logo'>El viejo cañon</a>
     <input type="search" className='search' name="search" id="search" placeholder='Buscar...' />
     <a href="#" className="cart"> <CartWidget/> </a>
    </nav>
    </div>
    
  )
}

export default Navbar