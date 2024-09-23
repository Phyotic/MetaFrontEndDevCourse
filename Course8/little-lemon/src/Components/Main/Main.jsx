import HomePage from "../HomePage/HomePage";
import { Routes, Route } from "react-router-dom";
import BookingPage from "../BookingPage/BookingPage";
import { useReducer } from "react";
import { times, initializeTimes, updateTimes } from "../../utils";

function Main() {
    const [availableTimes, dispatchAvailableTimes] = useReducer(
        updateTimes,
        times,
        initializeTimes
    );

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
                        />
                    }
                />
            </Routes>
        </main>
    );
}

export default Main;
