import PieChart from '../components/PieChart'
import BarChart from '../components/BarChart'



let Dashboard = () => {
    return (
        <div className="dashboard__container container">
            <span className="dashboard__title headline-900">
                Welcome back, Dr.Selena Odette
            </span>


            <div className="dashboard__piechart section">
                <div className="piechart__title">
                    <span className='headline-800'>Patient statistic</span>
                </div>
                <div className="piechart__chart">
                    <PieChart />
                </div>

                <div className="piechart__data">

                    <div className="data__column">
                        <div className="data__circle data__circle--red"></div>
                        <p className='data__text-category'>Treatment</p>
                        <p className='data__text-percent headline-800'>32.82%</p>
                    </div>

                    <div className="data__column">
                        <div className="data__circle data__circle"></div>
                        <p className='data__text-category'>Check-up</p>
                        <p className='data__text-percent headline-800' >41.18%</p>
                    </div>

                    <div className="data__column">
                        <div className="data__circle data__circle--grey"></div>
                        <p className='data__text-category'>Others</p>
                        <p className='data__text-percent headline-800'>26%</p>
                    </div>

                </div>
            </div>


            <div className="dashboard__earned section">
                <span className="earned__title headline-800">
                    Money Earned
                </span>

                <div className="earned__chart">
                    <BarChart />
                </div>

            </div>

            <div className="dashboard__payment section">
                <span className='payment__title headline-800'> Recent payment</span>


                <div className="payment__details">

                    <div className="details__patient">
                        <div className="patient__left">
                            <img className='patient__photo' src="https://randomuser.me/api/portraits/men/73.jpg" alt="" />
                            <div className="patient__nameid">
                                <span className='patient__name headline-800'>Mr.Scott Mctominay</span>
                                <span className='patient__id id'>#DOC8231</span>
                            </div>
                        </div>

                        <div className="patient__status patient__status--success">
                            <p>Succes</p>
                        </div>
                    </div>

                    <div className="details__appointment details__bar headline-800">
                        <p>Patient</p>
                        <p>Diabetes Control Appointment</p>
                    </div>

                    <div className="details__date details__bar headline-800 ">
                        <p>Date</p>
                        <p> Dec 14, 2023</p>
                    </div>

                    <div className="details__total details__bar headline-800">
                        <p>Total</p>
                        <p>$487</p>
                    </div>

                    <div className="details__paymentmethod details__bar headline-800" >
                        <p>Pay with</p>
                        <p>Google Pay</p>
                    </div>

                </div>


                <div className="payment__details">

                    <div className="details__patient">
                        <div className="patient__left">
                            <img className='patient__photo' src="https://randomuser.me/api/portraits/men/69.jpg" alt="" />
                            <div className="patient__nameid">
                                <span className='patient__name headline-800'>Mr.Robert Fox</span>
                                <span className='patient__id id'>#DOC1872</span>
                            </div>
                        </div>

                        <div className="patient__status patient__status--pending">
                            <p>Pending</p>
                        </div>
                    </div>

                    <div className="details__appointment details__bar headline-800">
                        <p>Patient</p>
                        <p>Root Canal</p>
                    </div>

                    <div className="details__date details__bar headline-800 ">
                        <p>Date</p>
                        <p> Dec 14, 2023</p>
                    </div>

                    <div className="details__total details__bar headline-800">
                        <p>Total</p>
                        <p>$891</p>
                    </div>

                    <div className="details__paymentmethod details__bar headline-800" >
                        <p>Pay with</p>
                        <p>Debit Card</p>
                    </div>

                </div>



            </div>
        </div>



    )
}

export default Dashboard;