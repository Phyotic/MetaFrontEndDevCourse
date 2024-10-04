import HomePage from "../HomePage/HomePage";
import { Routes, Route, useNavigate } from "react-router-dom";
import BookingPage from "../BookingPage/BookingPage";
import { useReducer } from "react";
import { initializeTimes, updateTimes, submitAPI } from "../../utils";
import ConfirmedBooking from "../ConfirmedBooking/ConfirmedBooking";

function Main() {
    const [availableTimes, dispatchAvailableTimes] = useReducer(
        updateTimes,
        new Date(),
        initializeTimes
    );

    const nav = useNavigate();

    function submitForm(formData) {
        if (submitAPI(formData)) {
            nav("/confirmed");
        }
    }

    return (
        <main>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route
                    path="/booking"
                    element={
                        <BookingPage
                            availableTimes={availableTimes}
                            dispatchAvailableTimes={dispatchAvailableTimes}
                            submitForm={submitForm}
                        />
                    }
                />
                <Route path="/confirmed" element={<ConfirmedBooking />} />
            </Routes>
        </main>
    );
}

export default Main;
