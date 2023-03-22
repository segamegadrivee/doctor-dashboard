import Schedule from '../components/Schedule';
import MenuIcon from '@mui/icons-material/Menu';

let Appointment = () => {
    return (
        <div className="appointment__container container">
            <span className="appointment__title headline-900">
                Appointment
            </span>

            <div className="section">
                <Schedule />
            </div>

        </div>
    )
}

export default Appointment;