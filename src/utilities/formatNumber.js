/**
 * Pads single-digit numbers with a leading zero for consistency in display.
 * @param {number} time - The time value to format.
 * @returns {string} Formatted time string with two digits.
 */
const formatNumber = (time) => {
  return time < 10 ? `0${time}` : `${time}`;
};

export default formatNumber;
