import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function BookingCalendar() {
  const [date, setDate] = useState(new Date());
  return (
    <div>
      <Calendar onChange={setDate} value={date} />
      <p>Date sélectionnée : {date.toLocaleDateString()}</p>
    </div>
  );
}
export default BookingCalendar;