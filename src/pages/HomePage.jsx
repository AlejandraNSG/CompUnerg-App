import { Navigation } from "../components/navigation.jsx";
import { Header } from "../components/header.jsx";
import { Features } from "../components/features.jsx";
import { About } from "../components/About.jsx";
import { Services } from "../components/services.jsx";
import { Gallery } from "../components/gallery.jsx";
import { Testimonials } from "../components/testimonials.jsx";
import { Team } from "../components/Team.jsx";
import { Contact } from "../components/Contact.jsx";

import JsonData from "../data/data.json";
import {useState, useEffect} from 'react';

const HomePage = () => {
    const [landingPageData, setLandingPageData] = useState({});
    useEffect(() => {
        setLandingPageData(JsonData);
    }, []);
    return (
        <>
            <div>
                <Navigation />
                <Header data={landingPageData.Header} />
                <Features data={landingPageData.Features} />
                <About data={landingPageData.About} />
                <Services data={landingPageData.Services} />
                <Gallery data={landingPageData.Gallery} />
                <Testimonials data={landingPageData.Testimonials} />
                <Team data={landingPageData.Team} />
                <Contact data={landingPageData.Contact} />
            </div>
        </>
    )
}

export default HomePage