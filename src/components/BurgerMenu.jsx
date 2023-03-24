import { Link } from "react-router-dom";
import Appointment from '../pages/Appointment';
import App from "./BarChart";

let BurgerMenu = () => {
    return (
        <div class="hamburger-menu">
            <input id="menu__toggle" type="checkbox" />
            <label class="menu__btn" for="menu__toggle">
                <span></span>
            </label>

            <ul class="menu__box">

                <li> <Link class="menu__item" to='/Dashboard'>Home</Link></li>
                <li><Link class="menu__item" to='/Transaction'>Transactions</Link></li>
                <li><Link class="menu__item" to='/DocProfile'>My Profile</Link></li>
                <li><Link class="menu__item" to='/Appointment'>Appointments</Link></li>
            </ul>
        </div>
    )
}

export default BurgerMenu;