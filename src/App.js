import BookTickets from "./components/bookTickets/BookTickets";
import styled from "styled-components";
import SeatBookingContextProvider from "./SeatBookingContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookingList from "./components/bookingList/BookingList";

const StyledApp = styled.div`
  font-family: sans-serif;
  text-align: center;
`;

export default function App() {
  return (
    <SeatBookingContextProvider>
      <StyledApp>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<BookTickets />} />
            <Route path="/booking-list" element={<BookingList />} />
          </Routes>
        </BrowserRouter>
      </StyledApp>
    </SeatBookingContextProvider>
  );
}
