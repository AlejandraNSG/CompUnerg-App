const CourseCard = ({course}) => {
    const {name, description, duration} = course;

    return (
        <>
            <div className="course-card col" style={{width:"100px;"}}>
                <div className="course-img">
                    <img src="/public/img/about.jpg" alt="imagen del curso" width={"41px"}/>
                </div>
                <div className="course-info">
                    <p className="course-title">
                        {name}
                    </p>
                    <p className="course-description">
                        {description}
                    </p>
                    <p className="course-duration">
                        {duration}
                    </p>
                </div>
            </div>
        </>
    )
}

export default CourseCard