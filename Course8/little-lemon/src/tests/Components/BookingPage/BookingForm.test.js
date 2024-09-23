import { fireEvent, render, screen } from "@testing-library/react";
import BookingForm from "../../../../src/Components/BookingForm/BookingForm";
import { initializeTimes, times, updateTimes } from "../../../utils";

test("BookingForm component rendered", () => {
    render(<BookingForm availableTimes={times} dispatchAvailableTimes={""} />);
    const chooseDate = screen.getByText("Choose date");
    expect(chooseDate).toBeInTheDocument();
});

test("initializeTimes returns expected value", () => {
    const result = initializeTimes(times);
    expect(result).toEqual(times);
});

test("updateTimes returns expected state", () => {
    const result = updateTimes(times, { type: "update" });
    expect(result).toEqual(times);
});
