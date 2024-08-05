import { NavLink } from 'react-router-dom';
import logo from '../assets/gymshark.png';
const Navbar = () => {

  const linkClass = ({isActive})=> isActive ? 'flex justify-center items-center bg-gray-700 text-white box-border h-10 w-24 hover:bg-gray-700 hover:text-white rounded-full px-4 py-2' : 'flex justify-center items-center text-gray-700 hover:bg-gray-700 hover:text-white rounded-full box-border h-10 w-24 px-3 py-2';

  return (
    <>
  <nav className="fixed top-0 left-0 w-full bg-white border-b border-gray-500 z-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex h-24 items-center justify-between">
        <div className="flex items-center">
          <a className="flex items-center mr-4" href="/index.html">
            <img className="h-10 w-auto ml-8" src={logo} alt="React Jobs" />
            <span className="hidden md:block text-gray-800 text-2xl font-bold ml-4">GYM SHARK</span>
          </a>
        </div>
        <div className="flex items-center space-x-2 mr-8 flex-wrap">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/jobs" className={linkClass}>WOMEN</NavLink>
          <NavLink to="/Addjob" className={linkClass}>MEN</NavLink>
        </div>
      </div>
    </div>
  </nav>
</>
  )
}

export default Navbar
