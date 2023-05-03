import NavBar from '../components/private/navBar/NavBar.jsx';
import LoggedHeader from '../components/private/header/LoggedHeader.jsx';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <>
            <main className="mainLayout">
                <NavBar/>
                <section className="dinamic-section">
                    <LoggedHeader/>
                    <Outlet/>
                </section>
            </main>
        </>
    )
}

export default MainLayout