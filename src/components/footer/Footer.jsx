import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faTruck, faMobileScreenButton, faPeopleGroup ,faUtensils} from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return (
    <footer className="footer"> 
    <h2>Our services</h2> 
    <nav>
      <ul>
        <li><FontAwesomeIcon icon={faMobileScreenButton} />  <a href='#'>Online Booking</a></li>
        <li><FontAwesomeIcon icon={faUtensils} /> <a href='#'>Catering Service</a></li>
        <li><FontAwesomeIcon icon={faPeopleGroup} /><a href='#'>Membership</a> </li>
        <li><FontAwesomeIcon icon={faTruck} /><a href='#'>Delivery Service</a>
        </li>
        </ul>
    </nav>
</footer>
  )
}

export default Footer