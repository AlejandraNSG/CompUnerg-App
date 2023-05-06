import {useEffect, useState} from 'react'
// import NavItem from './NavItem.jsx'
import {Link} from 'react-router-dom'

const NavBar = () => {

    const [navItems, setNavItems] = useState([]);

    useEffect(()=>{
        const searchItems = async() =>{
            await fetch('/src/data/sections.json')
                .then(data => data.json())
                .then(res => setNavItems(res))
                .catch(err => console.log(err))
            console.log(navItems);
        }
        searchItems();
    }, [])
    
    return (
        <>
            {/* Seccion del navegador */}
            <section className="navBar">
                <nav className="content-nav">
                    {/* {
                        navItems.map((item, i) => {return <NavItem key={i} item={item}/>})
                    } */}

                    {/* Logo de la app */}
                    <div>
                        <img className="logo-in-nav" src="/public/Assets/icon_logo.png" alt="logo-app" width={"140px"}/>
                    </div>

                    {/* Enlaces */}
                    <div>
                        <Link
                            to="/home"
                        >
                            <div>
                                <p>
                                    Cursos
                                </p>
                            </div>
                        </Link>
                        <Link
                            to="/home/request-courses"
                        >
                            <div>
                                <p>
                                    Cursos a Pedir
                                </p>
                            </div>
                        </Link>
                        <Link
                            to="/home/comments"
                        >
                            <div>
                                <p>
                                    Comentarios
                                </p>
                            </div>
                        </Link>
                        <Link
                            to="/home/notifications"
                        >
                            <div>
                                <p>
                                    Notificaciones
                                </p>
                            </div>
                        </Link>
                        <Link
                            to="/home/profile"
                        >
                            <div>
                                <p>
                                    Perfil
                                </p>
                            </div>
                        </Link>
                        <div>
                            <p>
                                Salir
                            </p>
                        </div>
                    </div>
                </nav>
            </section>
        </>
    )
}

export default NavBar