import { useEffect, useState } from 'react';
import CourseCard from '/src/components/private/courses/CourseCard.jsx';
import clienteFrontend from '../../config/axios.jsx';

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Obtiene los cursos
    const getCourses = async() => {
      // Peticion con axios para obtener los cursos
      const { data } = await clienteFrontend('/courses');

      // Se establecen los cursos 
      setCourses(data['courses']);
      console.log( data );
    };

    // Llamada para obtener los cursos
    getCourses();
  }, []);

  return (
    <>
      <section className="courses-section">
        {courses?.length ? (
          courses.map((course, i) => {
            return <CourseCard key={i} course={course} />;
          })
        ) : (
          <>
            <div className="not-courses">
              <p>NO HAY CURSOS DISPONIBLES EN ESTE MOMENTO</p>
            </div>
          </>
        )}
      </section>
    </>
  );
};

export default Courses