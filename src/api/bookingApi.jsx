/* eslint-disable camelcase */
import axios from "axios";

const API_URL = "http://barberinobe.phuhanh.com.vn/api/";

const getServicesAPI = () => {
  const params = {
    option: "services",
  };

  return axios.get(`${API_URL}booking.php`, { params });
};

const getDateTimeAPI = (selectedServices) => {
  const services = JSON.stringify(selectedServices);
  const params = {
    option: "getDateTime",
    selected_services: services,
  };

  return axios.get(`${API_URL}booking.php`, { params });
};

const getTimeByDateAPI = (date, selectedServices) => {
  const services = JSON.stringify(selectedServices);
  const params = {
    option: "getTimeByDate",
    appointmentDate: date,
    selected_services: services,
  };

  return axios.get(`${API_URL}booking.php`, { params });
};

const createBookingAPI = (bookingData) => {
  const data = new FormData();

  data.append("option", "createAppointment");
  Object.keys(bookingData).forEach((key) => {
    data.append(key, bookingData[key]);
  });

  return axios.post(`${API_URL}appointment.php`, data);
};

export {
  getServicesAPI,
  getDateTimeAPI,
  getTimeByDateAPI,
  createBookingAPI,
};
