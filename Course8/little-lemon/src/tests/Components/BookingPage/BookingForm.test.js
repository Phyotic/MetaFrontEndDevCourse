import { render, screen } from "@testing-library/react";
import BookingForm from "../../../../src/Components/BookingForm/BookingForm";
import { initializeTimes, times, updateTimes } from "../../../utils";

test("BookingForm component rendered", () => {
    render(<BookingForm availableTimes={times} dispatchAvailableTimes={""} />);
    const chooseDate = screen.getByText("Choose date*");
    expect(chooseDate).toBeInTheDocument();
});

test("initializeTimes returns expected value", () => {
    const result = initializeTimes(new Date());
    expect(result.length).toBeGreaterThan(0);
});

test("updateTimes returns expected state", () => {
    const oct312024 = ["17:00", "17:30", "18:30", "20:00", "20:30", "21:00", "23:00"];
    const result = updateTimes([], {
        type: "update",
        data: new Date("2024-10-31T00:00:00.000z"),
    });

    expect(result).toEqual(oct312024);
});

test("date input has validation attributes; required, min", () => {
    render(<BookingForm availableTimes={times} dispatchAvailableTimes={""} />);
    const dateInput = screen.getByLabelText("Choose date*");
    expect(dateInput).toHaveAttribute("required");
    expect(dateInput).toHaveAttribute("min");
});

test("time select input has validation attributes; required", () => {
    render(<BookingForm availableTimes={times} dispatchAvailableTimes={""} />);
    const selectInput = screen.getByLabelText("Choose time*");
    expect(selectInput).toHaveAttribute("required");
});

test("guest number input has validation attributes; min, max, required", () => {
    render(<BookingForm availableTimes={times} dispatchAvailableTimes={""} />);
    const guestInput = screen.getByLabelText("Number of guests*");
    expect(guestInput).toHaveAttribute("min");
    expect(guestInput).toHaveAttribute("max");
    expect(guestInput).toHaveAttribute("required");
});

test("occasion select input has validation attributes", () => {
    render(<BookingForm availableTimes={times} dispatchAvailableTimes={""} />);
    const occasionInput = screen.getByLabelText("Occasion*");
    expect(occasionInput).toHaveAttribute("required");
});
