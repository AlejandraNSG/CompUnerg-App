// Importaciones
import {useState, useEffect} from 'react';
import { useParams } from 'react-router';

const RequestCourse = () => {

    // States
    const [reqCourse, setReqCourse] = useState(null);
    const params = useParams();

    useEffect(()=>{
        // Cambio de Titulo en la seccion
        document.querySelector('.title-section').textContent = "Cursos a Pedir";

        // Creacion de la funcion para buscar el curso
        const findCourse = ()=>{
            fetch("/src/data/requestCourses.json")
                .then(data => data.json())
                .then(res => {
                    // Variables
                    let data = null;

                    // Iteracion y busqueda
                    res.forEach( course =>{
                        if(parseInt(course.id) === parseInt(params.id)){
                            data = course;
                        }
                    })

                    // Si hay data, se colocan los datos, de lo contrario, se armma un objeto
                    // data !== null ? setReqCourse(data) : setReqCourse({message:"NO SE ENCUENTRA EL CURSO", error:true})
                })
        }

        // Invocación de la función
        findCourse();
    },[])

    return (
        <>
            <section className="request-courses-section">
                {
                    reqCourse !== null ?
                        <>
                            <div>
                                <p>

                                </p>
                            </div>
                        </> 
                        :
                        <>
                            <div className="message-error-content">
                                <div className="message-error">
                                    <p>
                                        No se encuentra el curso pedido
                                    </p>
                                </div>
                            </div>
                        </>
                }
            </section>
        </>
    )
}

export default RequestCourse