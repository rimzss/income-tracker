import moment from "moment";

export const timeRelativer = (date) => {
  const formatedDate = moment(date).startOf("minute").fromNow();
  console.log(formatedDate);
  return formatedDate;
};

export const dateFormatter = (date) => {
  const formatedDate = moment(date).calendar();
  return formatedDate;
};
