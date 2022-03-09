import BookingCard from "./BookingCard";

const BookingsGrid = ({guests, removeGuest}) => {

    const guestList = guests.map((guest) => {
        return <BookingCard guest={guest} key={guest._id} removeGuest={removeGuest}/>
    })

    return (
        <>
            {guestList}
        </>
    );
}

export default BookingsGrid;