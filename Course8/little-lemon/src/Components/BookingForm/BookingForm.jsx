import { useState } from "react";
import "./BookingForm";

function BookingForm({ availableTimes, dispatchAvailableTimes, submitForm }) {
    const date = new Date().toJSON().slice(0, 10);
    let [formData, setFormData] = useState({
        date: date,
        time: "",
        guests: 2,
        occasion: "Birthday",
    });

    function handleSubmit(event) {
        event.preventDefault();
        window.alert("Reservation placed!");
    }

    function handleChange(event) {
        let { name, value } = event.target;
        setFormData({ ...formData, [name]: value });

        if (name === "date") {
            const date = new Date(value);
            dispatchAvailableTimes({ type: "update", data: date });
        }
    }

    return (
        <form onSubmit={submitForm}>
            <label htmlFor="res-date">Choose date</label>
            <input
                type="date"
                id="res-date"
                name="date"
                value={formData.date}
                onChange={handleChange}
            ></input>

            <label htmlFor="res-time">Choose time</label>
            <select id="res-time" name="time" onChange={handleChange}>
                {availableTimes.map((avTime) => {
                    return <option key={avTime}>{avTime}</option>;
                })}
            </select>

            <label htmlFor="guests">Number of guests</label>
            <input
                type="number"
                name="guests"
                placeholder="1"
                min="1"
                max="10"
                id="guests"
                value={formData.guests}
                onChange={handleChange}
            ></input>

            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" name="occasion" onChange={handleChange}>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>

            <input type="submit" value="Make Your Reservation"></input>
        </form>
    );
}

export default BookingForm;
