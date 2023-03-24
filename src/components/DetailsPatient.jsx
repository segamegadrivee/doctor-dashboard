

let DetailsPatient = (props) => {
    return (
        <div className="payment__details">

            <div className="details__patient">
                <div className="patient__left">
                    <img className='patient__photo' src={props.avatar} alt="" />
                    <div className="patient__nameid">
                        <span className='patient__name headline-800'>{props.name}</span>
                        <span className='patient__id id'>{props.id}</span>
                    </div>
                </div>

                <div className={`patient__status patient__status--${props.status}`}>
                    <p>{props.status}</p>
                </div>
            </div>

            <div className="details__appointment details__bar headline-800">
                <p>{props.appointmentType}</p>
                <p>{props.appointmentDetails}</p>
            </div>

            <div className="details__date details__bar headline-800 ">
                <p>Date</p>
                <p>{props.date} </p>
            </div>

            <div className="details__total details__bar headline-800">
                <p>Total</p>
                <p>{props.totalAmount}</p>
            </div>

            <div className="details__paymentmethod details__bar headline-800" >
                <p>Pay with</p>
                <p>{props.paymentMethod}</p>
            </div>


        </div>
    )
}

export default DetailsPatient;