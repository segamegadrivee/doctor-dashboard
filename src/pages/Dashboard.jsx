import PieChart from '../components/PieChart'
import BarChart from '../components/BarChart'
import DetailsPatient from '../components/DetailsPatient';
import patient from '../data/patients.json'



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


                {patient.patients.slice(0, 3).map((patientData, i) => (
                    <DetailsPatient key={i} {...patientData} />
                ))}


            </div>

        </div>



    )
}

export default Dashboard;