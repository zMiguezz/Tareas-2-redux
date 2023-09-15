import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className='header'>
        <div className=''>
            <Link to='/'>App de Tareas</Link>
        </div>
        <ul>
            <li>
            <Link to='/login'>
                <FaSignInAlt/> Login
            </Link> 
            </li>
            <li>
                <Link to='/register'></Link>
            </li>
        </ul>
    </div>
  )
}

export default Header