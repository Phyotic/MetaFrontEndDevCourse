import BookingForm from "../BookingForm/BookingForm";
import "./BookingPage.css";

function BookingPage({ availableTimes, dispatchAvailableTimes }) {
    return (
        <>
            <h1>Booking page</h1>

            <BookingForm
                availableTimes={availableTimes}
                dispatchAvailableTimes={dispatchAvailableTimes}
            ></BookingForm>
        </>
    );
}

export default BookingPage;
