import { useState } from "react";
import "./BookingForm";

function BookingForm({ availableTimes, dispatchAvailableTimes, submitForm }) {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    let day = today.getDate();
    if (day < 10) {
        day = "0" + day;
    }

    const todayMin = `${year}-${month}-${day}`;

    const date = new Date().toJSON().slice(0, 10);
    let [formData, setFormData] = useState({
        date: date,
        time: "",
        guests: 2,
        occasion: "Birthday",
    });

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
            <label htmlFor="res-date">Choose date*</label>
            <input
                type="date"
                id="res-date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                min={todayMin}
                required
            ></input>

            <label htmlFor="res-time">Choose time*</label>
            <select id="res-time" name="time" onChange={handleChange} required>
                {availableTimes.map((avTime) => {
                    return <option key={avTime}>{avTime}</option>;
                })}
            </select>

            <label htmlFor="guests">Number of guests*</label>
            <input
                type="number"
                name="guests"
                placeholder="1"
                min="1"
                max="10"
                id="guests"
                value={formData.guests}
                onChange={handleChange}
                required
            ></input>

            <label htmlFor="occasion">Occasion*</label>
            <select id="occasion" name="occasion" onChange={handleChange} required>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>

            <input type="submit" value="Make Your Reservation"></input>
        </form>
    );
}

export default BookingForm;
