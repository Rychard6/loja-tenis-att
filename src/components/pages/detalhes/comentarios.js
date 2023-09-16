import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "../../../context/userContext";
import jwt_decode from "jwt-decode";
import { GoogleLogin } from "@react-oauth/google";
import api from '../../../API/api';
import { IoTrash } from "react-icons/io5";
export default function Comentarios({ productId, initialComments }) {

  const {user, setUser} = useContext(UserContext);
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState(initialComments);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setUser(JSON.parse(user));
    }
  }, [])

  const handleCommentChange = (event) => {
    setCommentText(event.target.value);
  };

  const handleCommentSubmit = async () => {
    if (commentText.trim() !== "") {
      // Create a new comment object and add it to the comments list
      console.log("commentText", commentText);
      const newComment = await api.createComment(
        user.name,
        commentText,
        user.picture,
        +productId,
      );

      setComments([...comments, newComment]);
      setCommentText("");
    }
  };
    //excluir
    const handleCommentDelete = async (commentId) => {
      try {
        // Envie uma solicitação DELETE para a rota apropriada no backend (substitua a URL conforme necessário).
        await api.deleteComment(commentId);
        // Atualize o estado local para refletir a exclusão bem-sucedida (remova o comentário da lista, por exemplo).
        setComments(comments.filter((comment) => comment.id !== commentId));
      } catch (error) {
        console.error("Erro ao excluir o comentário", error);
      }
    };

  
  return (
    <>
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-white">
            Comments ({comments.length})
          </h2>
          <div className="flex space-x-2">
            <GoogleLogin
              //onClick={() => handleLogin("google")}
              onSuccess={(credentialResponse) => {
                const credentialResponseDecoded = jwt_decode(
                  credentialResponse.credential
                );
                console.log(credentialResponseDecoded);
                setUser(credentialResponseDecoded);
                localStorage.setItem("user", JSON.stringify(credentialResponseDecoded));
              }}
              onError={() => {
                console.log("Login Failed");
                setUser(null)
                localStorage.removeItem("user");
              }}
            />
            ;
          </div>
        </div>
        <textarea
          rows="4"
          value={commentText}
          onChange={handleCommentChange}
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-500"
          placeholder="Write your comment..."
        ></textarea>
        <div className="mt-2">
          {user ? (
            <button
              onClick={handleCommentSubmit}
              className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
              disabled={commentText.trim() === ""}
            >
              Post Comment
            </button>
          ) : (
            <p className="text-sm text-gray-500">Log in to post a comment.</p>
          )}
        </div>
        <div className="mt-4">
          {comments.map((comment, index) => (
            <div key={index} className="flex items-center border-t py-6 ">
              <div className=" w-10 h-10 rounded-full overflow-hidden mr-6">
                <img
                  src={comment.profilePictureUrl}
                  alt={`${comment.user} profile`}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-white mb-4 pt-4">
                <span className="font-semibold">{comment.user}: </span>
                {comment.text}
              </p>
              <div className="flex items-center ml-auto"> {/* Isso coloca o botão na extrema direita */}
                <button onClick={() => handleCommentDelete(comment.id)}>
                  <IoTrash className="text-2xl text-white"/>
                </button>
              </div>
            </div>


          ))}
        </div>
      </div>
    </>
  );
}
