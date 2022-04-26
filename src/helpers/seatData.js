export const getSeatsData = (count) => {
  let seatsData = [];
  Array.from({ length: count }).forEach((_val, index) => {
    let seatData = {
      id: `${index + 1}`,
      name: `A${index + 1}`,
      status: "available"
    };
    seatsData.push(seatData);
  });
  return seatsData;
};

export const splitseatData = (seatData) => {
  let leftseatsData = [];
  let rightseatsData = [];
  let index = 0;

  while (index <= seatData.length - 4) {
    leftseatsData = [
      ...leftseatsData,
      { ...seatData[index] },
      { ...seatData[index + 1] }
    ];
    rightseatsData = [
      ...rightseatsData,
      { ...seatData[index + 2] },
      { ...seatData[index + 3] }
    ];
    index += 4;
  }
  return { leftseatsData, rightseatsData };
};

export const getUpdatedSeatStatus = (seatData, seatID) => {
  let updatedSeatData = seatData.map((seat) => {
    const { id, status } = seat;
    let updatedStatus;
    if (id === seatID) {
      if (status === "available") {
        updatedStatus = "selected";
      } else if (status === "selected") {
        updatedStatus = "available";
      }
      return { ...seat, status: updatedStatus };
    }
    return seat;
  });
  return updatedSeatData;
};

export const getBookedSeatsData = (seatData) => {
  let bookingStatusData = seatData.map((seat) => {
    const { status } = seat;
    let updatedSeatStatus;
    if (status === "selected") {
      updatedSeatStatus = "booked";
      return { ...seat, status: updatedSeatStatus };
    }
    return seat;
  });
  return bookingStatusData;
};

export const getSelectedSeats = (seatData) => {
  const selectedSeats = seatData.filter((seat) => {
    return seat.status === "selected";
  });
  return selectedSeats;
};

export const getBookingDetails = ({ selectedSeatNames, mobile, date }) => {
  const bookingID = `${parseInt(Math.random() * Math.pow(10, 7))}`;
  return {
    id: bookingID,
    seats: selectedSeatNames,
    mobile,
    date
  };
};
