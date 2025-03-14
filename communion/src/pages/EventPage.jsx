import React from "react";
import {Card} from "./Card";
import {eventsData} from "./eventsData";
import {EventForm} from "./EventForm";

const EventPage = () => {
    return(
        <div className="event-page">
        <h1> Events </h1>
        <div className="cards-container">
        {eventsData.map((event) => (
            <Card key = {event.id}
            event={event} />
        ))}
        </div>
        <EventForm addEvent={addEvent} />
        </div>
    );
};