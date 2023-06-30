// Importaciones
import {useEffect, useState} from 'react';

// Componentes privados
import CommentCard from '../../components/private/comments/CommentsCard.jsx';
import clienteFrontend from '../../config/axios.jsx';
import axios from 'axios';

const Comments = () => {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // Cambio del nombre del titulo
    document.querySelector(".title-section").textContent = "COMENTARIOS";

    // Llamas la funcion
    findComments();
  }, []);

  // Funcion para traer los comentarios
  const findComments = async () => {
    const { data } = await clienteFrontend.get("/all/comments");
    console.log(data);
    setComments(data);
  };

  // funcion para enviar los comentarios
  const sendComment = async () => {
    // Validación
    if (comment === "") {
      return alert("Falta el comentario a enviar");
    }

    // Envio de datos
    try {
      // Aqui va el envio del comentario
      const response = await clienteFrontend.post("/comments", {
        text: comment,
      });

      console.log(response);

      // Agregar el nuevo comentario a la lista de comentarios
      setComments([...comments, response.data]);

      // Se llama el método para actualizar los comentarios
      //findComments();

      // Se limpia el useState del comentario
      setComment("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section>
        {/* Comentario */}
        <div className="w-100 my-1 comments-zone">
          {/* Contenido */}
          {comments.map((comment, i) => {
            return <CommentCard key={i} comment={comment} />;
          })}
        </div>
        <div className="comment comment-content-input">
          <div>
            <textarea
              type="text"
              placeholder="Tu comentario..."
              className="form-control"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <img
              src="/public/svg/sendComment.svg"
              alt=""
              width="40px"
              className="sendComment"
              onClick={() => sendComment()}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Comments;