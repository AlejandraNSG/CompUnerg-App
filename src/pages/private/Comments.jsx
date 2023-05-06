// Importaciones
import {useEffect, useState} from 'react';

// Componentes privados
import CommentCard from '../../components/private/comments/CommentsCard.jsx';

const Comments = () => {

    const [comments, setComments] = useState([]);

    useEffect(()=>{
        document.querySelector(".title-section").textContent = "COMENTARIOS";

        const findComments = () =>{
            fetch('/src/data/comments.json')
                .then(data => data.json())
                .then(res => setComments(res))
                .catch(err => console.log(err))
        }

        findComments();
    }, [])
    return (
        <>
            <section>
                {/* Comentario */}
                <div className="w-100 my-1 comments-zone">
                    {/* Contenido */}
                    {
                        comments.map((comment, i) => { return <CommentCard key={i} comment={comment}/>})
                    }
                </div>
                <div className="comment comment-content-input">
                    <div>
                        <textarea type="text" placeholder="Tu comentario..." className="form-control"/>
                        <img src="/public/svg/sendComment.svg" alt="" width="40px" className="sendComment"/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Comments