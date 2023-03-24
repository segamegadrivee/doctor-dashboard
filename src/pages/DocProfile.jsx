import locationsvg from '../assets/svg/Location.svg'

let DocProfile = () => {
    return (
        <div className="docprofile__container container">
            <div className="docprofile__photo">
                <img src="https://randomuser.me/api/portraits/women/3.jpg" width='90' alt="" />
            </div>

            <div className="docprofile__header section">
                <span className="docprofile__name headline-900">Dr. Selena odette</span>
                <span className="docprofile__subname">Specialist of skin surgery</span>
                <div className="docprofile__location">
                    <img src={locationsvg} alt="img" />
                    <span className='docprofile__city'>Lublin, Poland</span>
                </div>
            </div>

        </div>

    )
}

export default DocProfile;