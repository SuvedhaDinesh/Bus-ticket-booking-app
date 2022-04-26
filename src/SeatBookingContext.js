import { createContext, useState } from "react";

export const SeatBookingContext = createContext();

const SeatBookingContextProvider = ({ children }) => {
  const [seatData, setSeatData] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [bookingDetails, setBookingDetails] = useState([]);
  return (
    <SeatBookingContext.Provider
      value={{
        seatData,
        setSeatData,
        selectedSeats,
        setSelectedSeats,
        bookingDetails,
        setBookingDetails
      }}
    >
      {children}
    </SeatBookingContext.Provider>
  );
};

export default SeatBookingContextProvider;
