// import {
//   getUserInfos,
//   getUserActivity,
//   getUserAverage,
//   getUserPerformance,
// } from "../Services/DatasMocked";
import {
  getUserInfos,
  getUserActivity,
  getUserAverage,
  getUserPerformance,
} from "../Services/api";

export const UsermainInfo = async (id) => {
  let UsermainInfo = await getUserInfos(id);
  return UsermainInfo;
};

export const UserActivity = async (id) => {
  let UserActivity = [];
  UserActivity = await getUserActivity(id);
  return UserActivity;
};

export const UserAverage = async (id) => {
  let UserAverage = await getUserAverage(id);
  return UserAverage;
};

export const UserPerformance = async (id) => {
  let UserPerformance = [];
  UserPerformance = await getUserPerformance(id);
  return UserPerformance;
};

const Store = () => {};

export default Store;
