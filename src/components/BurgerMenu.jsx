import { Link } from "react-router-dom";
import Appointment from '../pages/Appointment';
import App from "./BarChart";

let BurgerMenu = () => {

    const closeMenu = () => {
        document.getElementById("menu__toggle").checked = false;
    }

    return (
        <div class="hamburger-menu">
            <input id="menu__toggle" type="checkbox" />
            <label class="menu__btn" for="menu__toggle">
                <span></span>
            </label>

            <ul class="menu__box">
                <li><Link class="menu__item" onClick={closeMenu} to='/'>Home</Link></li>
                <li><Link class="menu__item" to='/Transaction' onClick={closeMenu}>Transactions</Link></li>
                <li><Link class="menu__item" to='/DocProfile' onClick={closeMenu}>My Profile</Link></li>
                <li><Link class="menu__item" to='/Appointment' onClick={closeMenu}>Appointments</Link></li>
            </ul>
        </div>
    )
}

export default BurgerMenu;