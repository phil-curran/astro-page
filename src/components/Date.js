const today = new Date();
const day = today.getDate();
const month = today.toLocaleString("default", { month: "long" });
const year = today.getFullYear();

const TodaysDate = () => {
  return `${month} ${day}, ${year}`;
};

export default TodaysDate;
