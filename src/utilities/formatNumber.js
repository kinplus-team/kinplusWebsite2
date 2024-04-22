const formatNumber = (time) => {
  return time < 10 ? `0${time}` : `${time}`;
};

export default formatNumber;
