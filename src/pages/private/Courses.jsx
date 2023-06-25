import { useEffect, useState } from 'react';
import CourseCard from '/src/components/private/courses/CourseCard.jsx';

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // const getCourses = () => {
    //   fetch("/src/data/courses.json")
    //     .then((data) => data.json())
    //     .then((result) => setCourses(result))
    //     .catch((err) => console.log(err));
    // };

    const getCourse = () => {
      fetch("http://localhost:4000/courses")
        .then((data) => data.json())
        .then((result) => setCourses(result))
        .catch((err) => console.log(err));
    };

    getCourse();
    // getCourses();
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