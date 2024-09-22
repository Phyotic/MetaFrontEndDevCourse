import { render, screen } from "@testing-library/react";
import BookingForm from "../../../../src/Components/BookingForm/BookingForm";
import { useReducer } from "react";

test("BookingForm component rendered", () => {
    let times = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

    render(<BookingForm availableTimes={times} dispatchAvailableTimes={""} />);
    const chooseDate = screen.getByText("Choose date");
    expect(chooseDate).toBeInTheDocument();
});
