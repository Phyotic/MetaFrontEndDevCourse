import { useState } from "react";
import "./BookingForm.css";

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
        <section className="form-container">
            <form onSubmit={submitForm}>
                <section className="reservation-time-form">
                    <section className="label-input-pair">
                        <label className="markazi-text-medium" htmlFor="res-date">
                            Choose date*
                        </label>
                        <input
                            className="karla-regular"
                            type="date"
                            id="res-date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            min={todayMin}
                            required
                        ></input>
                    </section>

                    <section className="label-input-pair">
                        <label className="markazi-text-medium" htmlFor="res-time">
                            Choose time*
                        </label>
                        <select
                            className="karla-regular"
                            id="res-time"
                            name="time"
                            onChange={handleChange}
                            required
                        >
                            {availableTimes.map((avTime) => {
                                return <option key={avTime}>{avTime}</option>;
                            })}
                        </select>
                    </section>
                </section>

                <section className="reservation-guests-occasion-form">
                    <section className="label-input-pair">
                        <label className="markazi-text-medium" htmlFor="guests">
                            Number of guests*
                        </label>
                        <input
                            className="karla-regular"
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
                    </section>

                    <section className="label-input-pair">
                        <label className="markazi-text-medium" htmlFor="occasion">
                            Occasion*
                        </label>
                        <select
                            className="karla-regular"
                            id="occasion"
                            name="occasion"
                            onChange={handleChange}
                            required
                        >
                            <option>Birthday</option>
                            <option>Anniversary</option>
                        </select>
                    </section>
                </section>

                <input
                    className="submit-form-button markazi-text-medium"
                    type="submit"
                    value="Make Your Reservation"
                ></input>
            </form>
        </section>
    );
}

export default BookingForm;
