// Importaciones
import {Link} from 'react-router-dom';

// Tarjeta de los cursos a pedir
const ReqCourseCard = ({course}) => {
    return (
      <>
        <Link to={`/home/request-courses/${course._id}`}>
          <div className="req-course">
            <div className="req-course-title">
              <p>{course.title}</p>
            </div>
            <div className="req-course-description">
              <p>{course.description}</p>
            </div>
            <div className="req-course-votes">
              <p>Cantidad de Votos: {course.votes}</p>
            </div>
          </div>
        </Link>
      </>
    );
}

export default ReqCourseCard