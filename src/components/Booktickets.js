import { Button } from "bootstrap"
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"


function BookTickets() {
    const [selectedTheater, setSelectedTheater] = useState(null);
    const [selectedTickets, setSelectedTickets] = useState(0);
    const navigate = useNavigate()
    const theaters = [
        { id: 1, name: 'PVR INOX' },
        { id: 2, name: 'Martahalli Multiplex' },
        { id: 3, name: 'PVR VR' },
    ];

    const handleTheaterSelection = (event) => {
        const selectedTheaterId = parseInt(event.target.value);
        const theater = theaters.find((theater) => theater.id === selectedTheaterId);
        setSelectedTheater(theater);
    };
    const handleTicketSelection = (event) => {
        setSelectedTickets(parseInt(event.target.value));
    };

    const handleBooking = () => {
        if (selectedTheater && selectedTickets > 0) {
            const message = `Successfully booked ${selectedTickets} ticket(s) at ${selectedTheater.name}`;
            alert(message);
            
        } else {
            alert('Please select a theater and number of tickets to book');
        }
        navigate('/')
    };


    return (

        <div>
            <div>
                <h2>Book Tickets</h2>
                <label htmlFor="theaterSelect">Select a Theater:</label>
                <select id="theaterSelect" onChange={handleTheaterSelection}>
                    <option value="">Select a theater</option>
                    {theaters.map((theater) => (
                        <option key={theater.id} value={theater.id}>
                            {theater.name}
                        </option>
                    ))}
                </select>
                <label htmlFor="ticketSelect">Select Number of Tickets (Max 10):</label>
                <select id="ticketSelect" onChange={handleTicketSelection} value={selectedTickets}>
                    {[...Array(11).keys()].map((num) => (
                        <option key={num} value={num}>
                            {num}
                        </option>
                    ))}
                </select>
                <button onClick={handleBooking}>Book Tickets</button>
            </div>



        </div>
    )

}

export default BookTickets