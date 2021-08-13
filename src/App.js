import React from "react";
import "./App.css";
import Form from "./components/form";
import { useState, useEffect } from "react";
import NavBar from "./components/navBar";
import { events, comments } from "./data/data";
import CommentList from "./components/commentList";
import Box from "@material-ui/core/Box";

export default function App() {
  const [event, setEvent] = useState({});
  const [eventList, setEventList] = useState([]);
  const [commentsList, setCommentList] = useState([]);

  useEffect(() => {
    setEventList(events);
    setCommentList(comments);
  }, []);
  const updateEvent = (event) => {
    const evt = eventList.find((e) => e._id === event._id);
    evt.title = event.title;
    setEventList([...eventList]);
  };

  const handleRemoveItem = (name) => {
    console.log(commentsList.length);
    const commentsFiltered = commentsList.filter(
      (comment) => comment.author != name
    );
    console.log(commentsFiltered.length);
    setCommentList(commentsFiltered);
  };

  const GetEventComments = (index) => {
    if (typeof index !== "number") {
      throw "Invalid index";
    }
    if (index === 47) {
      return commentsList.slice(0, 2);
    } else if (index === 81) {
      return commentsList.slice(2, 5);
    } else {
      return [];
    }
  };
  return (
    <div className="App container" spacing={2}>
      <Box
        display="flex"
        p={1}
        bgcolor="background.paper"
        style={{ "justify-content": "space-between" }}
      >
        <div style={{ marginRight: "20px" }}>
          <NavBar events={eventList} event={event} setEvent={setEvent} />
        </div>

        <div style={{ marginTop: "60px" }} className="form">
          <Form event={event} setEvent={updateEvent} />
        </div>

        <div style={{ marginTop: "60px" }}>
          <CommentList
            comments={event._id ? GetEventComments(event._id) : []}
            event={event}
            setCommentList={setCommentList}
            handleRemoveItem={handleRemoveItem}
          />
        </div>
      </Box>
    </div>
  );
}
