import Courses from "../../../pages/private/Courses";

// eslint-disable-next-line react/prop-types
const CourseCard = ({ course }) => {
  // eslint-disable-next-line react/prop-types
  const { title, description } = Courses;

  return (
    <>
      <div className="course-card col" style={{ width: "100px;" }}>
        <div className="course-img">
          <img
            src="/public/img/about.jpg"
            alt="imagen del curso"
            width={"41px"}
          />
        </div>
        <div className="course-info">
          <p className="course-title">{title}</p>
          <p className="course-description">{description}</p>
        </div>
      </div>
    </>
  );
};

export default CourseCard;
