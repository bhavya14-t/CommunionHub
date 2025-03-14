import React, { useState } from "react";

export const EventForm = ({ addEvent }) => {

    const [eventName, setEventName] = useState('');
    const [eventCategory, setEventCategory] = useState('');
    const [eventDate, setEventDate] = useState('');
    const [eventTime, setEventTime] = useState('');
    const [eventImage, setEventImage] = useState(null);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        if (name === "eventName") {
            setEventName(value);
        } else if (name === "eventCategory") {
            setEventCategory(value);
        } else if (name === "eventDate") {
            setEventDate(value);
        } else if (name === "eventTime") {
            setEventTime(value);
        }
    };
    const handleImageChange = (event) => {
        setEventImage(event.target.files[0]);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const newEvent = {
            name: eventName,
            category: eventCategory,
            date: eventDate,
            time: eventTime,
            image: eventImage,
        };
        addEvent(newEvent);
        setEventName('');
        setEventCategory('');
        setEventDate('');
        setEventTime('');
        setEventImage(null);
    };

    return (
        <div>
            {!showForm && (
                <button onClick={() => setShowForm(true)} className="add-event-button">
                    Add New Event
                </button>
            )}
            {showForm && (
                <form onSubmit={handleSubmit}
                    className="event-form">
                    <input type="file" onChange={handleImageChange}
                        className="event-image-input" />
                        <br />
                        <label className="event-label">
                            Event Name:
                            <input type="text" name="eventName"
                            value={eventName}
                            
                            onChange={handleInputChange}
                            
                            className="event-input" />
                        </label>
                        <br />
                        <label className="event-label">
                            Event Category:
                            <input type="text" name="eventCategory"
                            value={eventCategory}
                            
                            onChange={handleInputChange}
                            
                            className="event-input" />
                        </label>
                        <br />
                        <label className="event-label">
                            Event Date:
                            <input type="date" name="eventDate"
                            value={eventDate}
                            
                            onChange={handleInputChange}
                            
                            className="event-input" />
                        </label>
                        <br />
                        <label className="event-label">
                            Event Time:
                            <input type="time" name="eventTime"
                            value={eventTime}
                            
                            onChange={handleInputChange}
                            
                            className="event-input" />
                        </label>
                        <br />
                        <button type="submit" className="event-submit-button">
                            Create Event
                        </button>

                        <button type="button" 
                        onClick={() =>setShowForm(false)}
                        className="event-cancel-button">
                        Cancel
                        </button>
                </form>       
    )}
    </div >
   );
};