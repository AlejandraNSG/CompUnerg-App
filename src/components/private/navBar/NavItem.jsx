import {Link} from 'react-router-dom'

const NavItem = (item) => {
    return (
        <>
            <Link
                to={item.url}
            >
                <div>
                    <p>
                        {item.name}
                    </p>
                </div>
            </Link>
        </>
    )   
}

export default NavItem