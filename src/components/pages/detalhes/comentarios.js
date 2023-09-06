import React, { useState } from 'react';
import jwt_decode from "jwt-decode";
import { GoogleLogin } from '@react-oauth/google';

export default function Comentarios(){
    {/* teste api google */}


    {/* */}  
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [commentText, setCommentText] = useState('');
    const [comments, setComments] = useState([]);

    const handleLogin = (provider) => {
        setIsLoggedIn(!isLoggedIn);
    };

    const handleCommentChange = (event) => {
        setCommentText(event.target.value);
    };

    const handleCommentSubmit = () => {
        if (commentText.trim() !== '') {
        // Create a new comment object and add it to the comments list
        const newComment = {
            text: commentText,
            user: isLoggedIn ? 'Logged In User' : 'Anonymous User',
        };
        setComments([...comments, newComment]);
        setCommentText('');
        }
    };
    return(
        <>
        <div className="p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-white">Comments ({comments.length})</h2>
        <div className="flex space-x-2">

          <GoogleLogin
            onClick={() => handleLogin('google')}
            onSuccess={credentialResponse => {
              setIsLoggedIn(true)
              const credentialResponseDecoded = jwt_decode(credentialResponse.credential);
              console.log(credentialResponseDecoded)
            }}
            onError={() => {
              console.log('Login Failed');
              setIsLoggedIn(false)
            }}
          />;

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
        {isLoggedIn ? (
          <button
            onClick={handleCommentSubmit}
            className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
            disabled={commentText.trim() === ''}
          >
            Post Comment
          </button>
        ) : (
          <p className="text-sm text-gray-500">
            Log in to post a comment.
          </p>
        )}
      </div>
      <div className="mt-4">
        {comments.map((comment, index) => (
          <div key={index} className="border-t pt-4">
            <p className="text-gray-700">
              <span className="font-semibold">{comment.user}: </span>
              {comment.text}
            </p>
          </div>
        ))}
      </div>
    </div>
        </>
    );
}