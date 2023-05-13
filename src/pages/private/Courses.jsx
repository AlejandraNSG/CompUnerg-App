import { useEffect, useState } from 'react';
import CourseCard from '/src/components/private/courses/CourseCard.jsx';

const Courses = () => {

    // UseStates
    const [courses, setCourses] = useState([]);

    // Uso de uso del Efecto
    useEffect(()=>{

        document.querySelector(".title-section").textContent = "CURSOS"

        const getCourses = ()=>{
            fetch('/src/data/courses.json')
                .then(data => data.json())
                .then(result => setCourses(result))
                .catch(err => console.log(err))
        }

        getCourses();
    }, []);

    return (
        <>
            <section className="courses-section">
                {/* Navegador Lateral Izquierdo*/}
                {/* <nav>

                </nav> */}
                {/* Aqui la Galeria de Cursos */}
                
                    { courses.length > 0 ?
                            courses.map( (course, i) => { return <CourseCard key={i} course={course}/> })
                        :
                            <>
                                <div className="not-courses">
                                    <p>
                                        NO HAY CURSOS DISPONIBLES EN ESTE MOMENTO
                                    </p>
                                </div>
                            </>
                    }
                
            </section>
        </>
    )       
}

export default Courses