import React, { useState } from "react";
export default function NavBar({
  events,
  setEvent,
  comment,
  setComment,
  GetEventComments,
}) {
  return (
    <div>
      <h3
        className="font-monospace m-2"
        style={{ textDecorationColor: "lightslategray" }}
      >
        Mes évènements
      </h3>
      <nav className="sidebar ">
        {events.map((event) => (
          <button
            className="btn btn-light d-grid gap-2 col-11 mx-auto m-3"
            key={event._id}
            onClick={() => {
              setEvent(event);
            }}
          >
            {event.title}{" "}
          </button>
        ))}
      </nav>
    </div>
  );
}
