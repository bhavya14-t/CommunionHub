import React, {useState} from "react";
import { Card } from "../components/UI/Card";
import { eventsData } from "../components/utils/eventsData";
import { EventForm } from "../components/UI/EventForm";

export const EventPage = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [events, setEvents] = useState(eventsData);
    
    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    const filteredEvents = events.filter((event) => {
        if (selectedCategory === 'all') {
            return true;
        }
        return event.category === selectedCategory;
    });

    return(
        <div className="event-page">
        <h1> Events </h1>
        <select value={selectedCategory}
        onChange={handleCategoryChange}>
            <option value="all">All</option>
            <option value="social"> Social </option>
            <option value="religious"> Religious </option>
            <option value="charity"> Charity</option>
        </select>
        <div className="cards-container">
        {filteredEvents.map((event) => (
            <Card key = {event.id}
            event={event} />
        ))}
        </div>
        <EventForm addEvent={(event) => setEvents([...events, event])} />
        </div>
    );
};