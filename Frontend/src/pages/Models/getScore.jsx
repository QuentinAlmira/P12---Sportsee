export const getScore = (data) => {
  const { score, todayScore } = data;
  const UserScore = todayScore != null ? todayScore : score;

  return UserScore;
};
export default getScore;
