import usersIcon from '../assets/svg/Users.svg'
import percent from '../assets/svg/Discount.svg'
import activity from '../assets/svg/Activity.svg'
import BurgerMenu from '../components/BurgerMenu'

let Transaction = () => {
    return (
        <div className="transaction__container container">
            <span className="transaction__title headline-900">Transaction</span>

            <div className="transaction__total section">
                <div className="total__header">
                    <img className="total__icon" src={usersIcon} alt="svg" />
                    <div className="total__header-right">
                        <span className="total__percent">+8.12%</span>
                        <span className='total__lastyear'>from last year</span>
                    </div>
                </div>

                <div className="total__footer">
                    <span className="total__number headline-800">1192</span>
                    <span className="total__title">Total Patient</span>
                </div>

            </div>


            <div className="transaction__total section">
                <div className="total__header">
                    <img className="total__icon" src={percent} alt="svg" />
                    <div className="total__header-right">
                        <span className="total__percent">+12.21%</span>
                        <span className='total__lastyear'>from last year</span>
                    </div>
                </div>

                <div className="total__footer">
                    <span className="total__number headline-800">2019</span>
                    <span className="total__title">Total Payment</span>
                </div>

            </div>


            <div className="transaction__total section">
                <div className="total__header">
                    <img className="total__icon" src={activity} alt="svg" />
                    <div className="total__header-right">
                        <span className="total__percent">+11.64%</span>
                        <span className='total__lastyear'>from last year</span>
                    </div>
                </div>

                <div className="total__footer">
                    <span className="total__number headline-800">$124.012K</span>
                    <span className="total__title">Total Income</span>
                </div>

            </div>





        </div>
    )
}

export default Transaction;