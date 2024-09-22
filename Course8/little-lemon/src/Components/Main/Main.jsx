import HomePage from "../HomePage/HomePage";
import { Routes, Route } from "react-router-dom";
import BookingPage from "../BookingPage/BookingPage";
import { useReducer } from "react";

let times = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
const initializeTimes = (times) => times;

function updateTimes(state, action) {
    switch (action.type) {
        case "update": {
            return times;
        }
        default:
            return state;
    }
}

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
