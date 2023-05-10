// import {useEffect} from 'react'
// import {useNavigate} from 'react-router-dom'
import ProfileBtn from '../buttons/ProfileBtn.jsx';
// import NotificationBtn from '../buttons/NotificationBtn.jsx';

const LoggedHeader = () => {
    return (
        <>
            <header className="LoggedHeader">
                <div className="header-content">
                    <div>
                        <p>
                            CompUnerg
                        </p>
                    </div>

                    <div className="title-content">
                        <h3 className="title-section">
                            Section Title
                        </h3>
                    </div>

                    <div className="buttons-content">
                        <ProfileBtn />
                        {/* <NotificationBtn/> */}
                    </div>
                </div>
            </header>
        </>
    )
}

export default LoggedHeader