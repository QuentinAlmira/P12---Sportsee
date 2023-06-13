import axios from "axios";

const api = axios.create({
  baseURL: `http://localhost:3002/`,
});

export const getUserInfos = async (id) => {
  try {
    const res = await api.get(`http://localhost:3002/user/${id}`);

    return res.data.data;
  } catch (e) {
    console.log(e);
  }
};

export const getUserActivity = async (id) => {
  try {
    const res = await api.get(`http://localhost:3002/user/${id}/activity`);
    return res.data.data;
  } catch (e) {
    console.log(e);
  }
};

export const getUserAverage = async (id) => {
  try {
    const res = await api.get(
      `http://localhost:3002/user/${id}/average-sessions`
    );
    return res.data.data;
  } catch (e) {
    console.log(e);
  }
};

export const getUserPerformance = async (id) => {
  try {
    const res = await api.get(`http://localhost:3002/user/${id}/performance`);
    return res.data.data;
  } catch (e) {
    console.log(e);
  }
};
