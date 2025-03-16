import React from 'react';
import "./Card.css";

export const Card = ({event}) => {
  return (
    <>
      <div className="card">
        <img src={event.image} alt={event.name} className="card-image"/>
        <h2 className="card-heading"> {event.name}</h2>
        <p className="card-date"> Date: {event.date}</p>
        <p className="card-time"> Time: {event.time}</p>
        <p className="card-category"> Category: {event.category}</p>
      </div>
    </>
  );
};
