const CommentsCard = ({comment}) => {
    const {avatar, body, date} = comment;
    return (
        <>
            {/* Contenido */}
            <div className="comment">
                <div className="content-comment p-5">
                    <div className="w-50 rounded-circle">
                        <img src={avatar} alt="" width="40px"/>
                    </div>
                    <div className="d-flex flex-column">
                        <p className="text-comment">
                            {body}
                        </p>
                        <div className="sub-comments">
                            <p>
                                {date}
                            </p>
                            <p>
                                Responder
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CommentsCard