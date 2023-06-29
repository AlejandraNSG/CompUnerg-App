// Importaciones
import {useState, useEffect} from 'react';

import ReqCourseCard from '../../components/private/request-courses/ReqCourseCard.jsx'
import clienteFrontend from '../../config/axios.jsx';

const RequestCourses = () => {

    const [reqCourses, setReqCourses] = useState([]);

    useEffect(()=>{
      // Cambio de titulo en la seccion
      document.querySelector(".title-section").textContent = "Cursos a Pedir";

      const findReqCourses = async() => {
        fetch("http://localhost:4000/typecourse")
          .then((data) => data.json())
          .then((res) => setReqCourses(res))
          .catch((err) => console.log(err));
        
        const { data } = await clienteFrontend('/typecourse');

        setReqCourses(data)

        console.log(data);
      };

      findReqCourses();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // Retorno de la seccion
    return (
        <>
            <section className="request-courses-section">
                <div className="req-courses">
                    {
                        reqCourses.map((course, i) => {
                            return <ReqCourseCard key={i} course={course}/>
                        })
                    }
                </div>
            </section>
        </>
    )
}

export default RequestCourses