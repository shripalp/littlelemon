import React from 'react';
import "./styles/Reservation.css";
import Form from './Form';
//import ReservationForm from './ReservationForm';

function Reservation() {

  return (
    <div className="res-content-wrapper">
        <div className="res-content-container">
            <div className="text">
                <h2>Experience the perfect balance of tradition and luxury.</h2>
                <p>At Little Lemon, we take great pride in providing our customers with the greatest luxurious experience with a touch of <em>tradition</em>.</p>
                <p>Book a table with us to share in this experience.</p>
            </div>
            <div className="form">
                <h1>Reserve a Table</h1>
                <p>Please fill in and submit form to book your reservation at Little Lemon.</p>

                <Form />
                
            </div>
        </div>
    </div>
  )
}

export default Reservation