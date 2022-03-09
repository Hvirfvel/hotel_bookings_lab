import { deleteGuest } from "./BookingsService";

const BookingCard = ({guest, removeGuest}) => {

    const handleDelete = () => {
        deleteGuest(guest._id)
        .then(() => {
            removeGuest(guest._id)
        })
    }

    return (
        <li>
            <p>{guest.name}</p>
            <p>{guest.email}</p>
            <p>{guest.checked_in ? "Checked in" : "Not checked in"}</p>
            <button onClick={handleDelete}>Delete</button>
        </li>
    );
}
export default BookingCard;