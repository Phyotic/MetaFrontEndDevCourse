import BookingForm from "../BookingForm/BookingForm";
import "./BookingPage.css";

function BookingPage({ availableTimes, dispatchAvailableTimes, submitForm }) {
    return (
        <>
            <h1 id="booking-page-header">Booking page</h1>

            <BookingForm
                availableTimes={availableTimes}
                dispatchAvailableTimes={dispatchAvailableTimes}
                submitForm={submitForm}
            ></BookingForm>
        </>
    );
}

export default BookingPage;
