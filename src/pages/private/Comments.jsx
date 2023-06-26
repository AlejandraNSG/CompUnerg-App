// Importaciones
import {useEffect, useState} from 'react';

// Componentes privados
import CommentCard from '../../components/private/comments/CommentsCard.jsx';

const Comments = () => {

    const [comment, setComment] = useState("");
    const [comments, setComments] = useState([]);

    useEffect(()=>{
        // Cambio del nombre del titulo
        document.querySelector(".title-section").textContent = "COMENTARIOS";

        // Llamas la funcion
        findComments();
    }, [])

    // Funcion para traer los comentarios
    const findComments = () =>{
        fetch('/src/data/comments.json')
            .then(data => data.json())
            .then(res => setComments(res))
            .catch(err => console.log(err))
    }

    // funcion para enviar los comentarios
    const sendComment = () =>{
        // Validación
        if(comment === ""){
            return alert("Falta el comentario a enviar");
        }

        // Envio de datos
        try{
            // Aqui va el envio del comentario

            // Se llama el metodo para actualizar los comentarios
            findComments();

            // Se limpia el useState del comentario
            setComment("")
        }catch(error){
            console.log(error.message);
        }
    }

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
                        <textarea type="text" placeholder="Tu comentario..." className="form-control" value={comment} onChange={(e) => setComment(e.target.value)}/>
                        <img src="/public/svg/sendComment.svg" alt="" width="40px" className="sendComment" onClick={() => sendComment()}/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Comments