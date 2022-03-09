import {useState, useEffect} from 'react';
import { postGuest } from './BookingsService';

const BookingsForm = ({addGuest}) => {

    const [bookingData, setBookingData] = useState({});
    
    useEffect(() => {
        console.log(bookingData);
    }, [])

    const onChange = (event) => {
        bookingData[event.target.name] = event.target.value;
        setBookingData(bookingData);
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        postGuest(bookingData)
            .then((data) => {
                addGuest(data);
            })
    }

   

    return (
        <form onSubmit={handleFormSubmit}>
            <label htmlFor="name">Name:</label>
            <input type="text" id='name' name='name' onChange={onChange}/>

            <label htmlFor="email">Email:</label>
            <input type="email" id='email' name='email' onChange={onChange} />

            <label htmlFor="true">Checked in</label>
            <input type="radio" name='checkedIn' id='true' value="true" onChange={onChange} />
            <label htmlFor="false">Not checked in</label>
            <input type="radio" name='checkedIn' id='false' value="false" onChange={onChange} />

            <input type="submit" name='submit' value="Save booking" />
        </form>
    );
}

export default BookingsForm;