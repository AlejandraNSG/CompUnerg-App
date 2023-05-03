import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

const LoggedHeader = () => {

    useEffect(()=>{

    },[])

    const navigate = useNavigate();

    return (
        <>
            <header className="LoggedHeader">
                <div className="header-content">
                    <div>
                        <p>
                            Location
                        </p>
                    </div>

                    <div className="title-content">
                        <h3 className="title-section">
                            Section Title
                        </h3>
                    </div>

                    <div className="buttons-content">
                        <button
                            onClick={()=> navigate("/perfil")}
                        >
                            Perfil
                        </button>

                        <button
                            onClick={()=> navigate("/notifications")}
                        >
                            Notificaciones
                        </button>
                    </div>
                </div>
            </header>
        </>
    )
}

export default LoggedHeader