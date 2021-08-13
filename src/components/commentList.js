import React, { useEffect } from "react";
import { GetEventComments } from "../data/data";
import Comment from "./comment";

export default function CommentList({ event, handleRemoveItem, comments }) {
  return (
    <div>
      <div className="commentBox">
        <p>Commentaires</p>
        <div>
          {comments &&
            comments.map((comment) => (
              <Comment comment={comment} handleRemoveItem={handleRemoveItem} />
            ))}
        </div>
      </div>
    </div>
  );
}
