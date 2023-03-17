import Chart from '../components/Chart'

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
                    <Chart />
                </div>

                <div className="piechart__data">

                    <div className="data__column">
                        <div className="data__circle"></div>
                        <p className='data__text-category'>Treatment</p>
                        <p className='data__text-percent headline-800'>32.82%</p>
                    </div>

                    <div className="data__column">
                        <div className="data__circle"></div>
                        <p className='data__text-category'>Check-up</p>
                        <p className='data__text-percent headline-800' >41.18%</p>
                    </div>

                    <div className="data__column">
                        <div className="data__circle"></div>
                        {/* ADD COLORS TO CIRCLES */}
                        <p className='data__text-category'>Others</p>
                        <p className='data__text-percent headline-800'>26%</p>
                    </div>

                </div>
            </div>
            <div className="dashboard__money">

            </div>
            <div className="dashboard__payment">

            </div>
        </div>



    )
}

export default Dashboard;