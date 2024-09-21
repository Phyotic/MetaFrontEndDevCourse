import HomePage from "../HomePage/HomePage";
import { Routes, Route } from "react-router-dom";
import BookingPage from "../BookingPage/BookingPage";

function Main() {
    return (
        <main>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/booking" element={<BookingPage />} />
            </Routes>
        </main>
    );
}

export default Main;
