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

            <div className="docprofile__description section">
                <span className='docprofile__description-title headline-900'> Profile Description</span>

                <div className="docprofile__description-text">
                    <p className='bodytext'>Specific tasks depend on your specialfy for
                        instance, the work surgeons carry out ona
                        daily basis is completely different from the 3
                        workload of an accident and emergency
                        doctor.</p>

                    <p>Regardless of your specialty, as a hospital doctor you'll need to:</p>
                    <p>
                        🖸 monitor and provide general care to
                        patients on hospital wards and in
                        outpatient clinics
                    </p>

                    <p>
                        🖸 admit patients requiring special care,
                        followed by investigations and treatment
                    </p>

                    <p>
                        🖸 examine and talk to patients to diagnose
                        their medical conditions
                    </p>

                    <p>
                        🖸 carry out specific procedures, e.g.
                        performing operations and specialist
                        investigations
                    </p>

                </div>
            </div>

        </div>

    )
}

export default DocProfile;