import {useState, useEffect} from 'react';
import BookingsForm from './BookingsForm';
import BookingsGrid from './BookingsGrid';
import {getGuests} from './BookingsService';
import './App.css';

function App() {

  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    getGuests().then((allGuests) => {
      setBookings(allGuests);
    })
  }, [])

  const addGuest = (guest) => {
    const temp = [...bookings, guest]
    setBookings(temp);
  }

  const removeGuest = (id) => {
    const temp = bookings.filter((booking) => {
      return booking._id !== id
    })
    setBookings(temp);
  }

  return (
    <>
      <h1>Hello World</h1>
      <BookingsForm addGuest={addGuest}/>
      <BookingsGrid guests={bookings} removeGuest={removeGuest}/>
    </>

  );
}

export default App;
