// Importaciones
import {Link} from 'react-router-dom'

// Componente
const ProfileBtn = ()=>{
    return(
        <>
            <Link
                to="/perfil"
            >
                <img src="/public/svg/person.svg" alt="profile" width="30px"/>
            </Link>
        </>
    )
}

export default ProfileBtn;