import moment from "moment";

export const timeRelativer = (date) => {
  const formatedDate = moment(date).format("MMMM");
  return formatedDate;
};

export const dateFormatter = (date) => {
  const formatedDate = moment(date).calendar();
  return formatedDate;
};
