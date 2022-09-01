import {  NavLink, Outlet } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import '../Sidebar/Sidebar.css'
import iconImg from "../../Assets/Images/icon.png";
function Sidebar() {



  return (
    <div>
      <Outlet/>
      <div className="Navbar">
        aaaaaaaaaaaaa
          <div className="img ms-auto">aaaaaaaaaaaaa</div>
        </div>
        <nav className='nav-menu pt-3 '>
          <ul className="nav-menu-items">
            <li className="navbar-toggle">
              <NavLink to ='#!' className='menu-bars'>
                <img src={iconImg} className="Icon" alt="" />
              </NavLink>
              </li>  
              {SidebarData.map((item, index)=> {
                return(
                  <li key={index} className={item.cName} >
                    <NavLink to={item.path} className="text">
                      <div className='icons'>
                        {item.icon}
                      </div >
                      <div className='textDecor'>
                        {item.title}
                      </div> 
                    </NavLink>
                  </li>
                )
              })}
          </ul>  
        </nav>  
      </div>
  )
}

export default Sidebar
