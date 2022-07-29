import axios from "axios";

const API_URL =
  "https://barberinobe.phuhanh.com.vn/adminAPI/dashboard.php";

const getStatisticAPI = () => {
  const params = {
    option: "statistic",
  };

  return axios.get(API_URL, { params });
};

const getBookingListAPI = (page, sortby) => {
  const params = {
    option: "appointments",
    page,
    sortby,
  };

  return axios.get(API_URL, { params });
};

const getTotalPageAPI = (sortby) => {
  const params = {
    option: "getPages",
    sortby,
  };

  return axios.get(API_URL, { params });
};

const updateBookingStatus = (id, status) => {
  const data = new FormData();

  data.append("option", "changeStatus");
  data.append("id", id);
  data.append("status", status);

  return axios.post(API_URL, data);
};

export {
  getStatisticAPI,
  getBookingListAPI,
  getTotalPageAPI,
  updateBookingStatus,
};
