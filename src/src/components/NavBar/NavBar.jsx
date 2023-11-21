
import './NavBar.css'
import CartWidget from "../CartWidget/CartWidget"
import {NavLink, Link} from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className="NavBar">
            <Link to='/'>
            <h3>Artística Locuras</h3>
            </Link>
            <div className='Categories'>
                <NavLink to={'/category/laminas'} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}></NavLink>
                <NavLink to={'/category/folex'} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}></NavLink>
                <NavLink to={'/category/pinceles'} className={({isActive}) => isActive ? 'ActiveOption' : 'Option' }></NavLink>
                </div>
                <CartWidget/>
        </nav>
    )
}

export default NavBar