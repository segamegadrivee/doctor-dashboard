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

                <li> <Link to='/Dashboard'>Home</Link></li>
                <li><Link to='/Transaction'>Trans</Link></li>
                <li><a class="menu__item" href="#">Contact</a></li>
                <li><a class="menu__item" href="#">Twitter</a></li>
            </ul>
        </div>
    )
}

export default BurgerMenu;