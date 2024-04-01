import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faArrowDown, faUser} from '@fortawesome/free-solid-svg-icons'


const Header = () => {


return (
    <header className="header">
      <h1>
        <span className="yellow">FOOD</span>
        <span className="brown">EAT</span>
      </h1>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Menu</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#"><FontAwesomeIcon icon={faUser} /></a></li>
          <li> <a href="#"><FontAwesomeIcon icon={faArrowDown} /></a></li>
        </ul>
      </nav>
   </header>
  )
}

export default Header