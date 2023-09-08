import React, {useState} from "react";
import Title from "./Title";
import Date from "./Date";
import Author from "./Author";
import Summary from "./Summery";

function Card({ title, author, date, summary }) {

    const [comments, setComments] = useState([]); // Track comments using useState
    const [likes, setLikes] = useState(0); // Track likes using useState

    const addComment = () => {
        const newComment = prompt('Add a comment:');
        if (newComment) {
          setComments([ ...comments, newComment]);
        }
      };
    
      const incrementLikes = () => {
        setLikes(likes + 1);
      };

    return (
        <div className="card">
            <Title title={title} />
            <Author author={author} />
            <Date date={date} />
            <Summary summary={summary} />

            <button onClick={addComment}>Add Comment</button>
            <button onClick={incrementLikes}>Like</button>
                {/* Display number of likes and button to increment likes */}
            <p>Likes: {likes}</p>
            {comments.length > 0 && (
        <div>
          <h3>Comments:</h3>
          <ul>
            {comments.map((comment, index) => (
              <li key={index}>{comment}</li>
            ))}
          </ul>
        </div>
      )}
        </div>
    )

}

export default  Card;