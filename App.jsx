import React from 'react';
import BookingCalendar from './components/BookingCalendar';

function App() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h1>Réserver avec Jess B</h1>
      <BookingCalendar />
    </div>
  );
}
export default App;