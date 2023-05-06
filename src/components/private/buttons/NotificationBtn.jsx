// Importaciones
import {Link} from 'react-router-dom'

// Componente
const NotificationBtn = ()=>{
    return(
        <>
            <Link
                to="/home/notifications"
            >
                <img src="/public/svg/notification.svg" alt="notification" width="30px"/>
            </Link>
        </>
    )
}

export default NotificationBtn;